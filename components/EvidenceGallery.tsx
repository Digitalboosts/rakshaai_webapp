"use client";

import { useState, useEffect, useCallback, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, ZoomIn, ZoomOut, RotateCw, Download, FileText, Image as ImageIcon, Maximize2, Minimize2 } from 'lucide-react';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

// Set up PDF.js worker with fallback options
if (typeof window !== 'undefined') {
    // Try multiple CDN sources for better reliability
    const workerSources = [
        `https://cdn.jsdelivr.net/npm/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`,
        `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`,
        '/pdf.worker.min.mjs' // fallback to local file if available
    ];

    pdfjs.GlobalWorkerOptions.workerSrc = workerSources[0];
}

interface EvidenceItem {
    id: string;
    url: string;
    type: 'pdf' | 'image';
    name: string;
    reportId?: number;
    reporterName?: string;
}

interface EvidenceGalleryProps {
    isOpen: boolean;
    onClose: () => void;
    items: EvidenceItem[];
    initialIndex?: number;
}

export default function EvidenceGallery({ isOpen, onClose, items, initialIndex = 0 }: EvidenceGalleryProps) {
    const [currentIndex, setCurrentIndex] = useState(initialIndex);
    const [zoom, setZoom] = useState(1);
    const [rotation, setRotation] = useState(0);
    const [isFullscreen, setIsFullscreen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [numPages, setNumPages] = useState<number | null>(null);
    const [pdfPage, setPdfPage] = useState(1);
    const [pdfError, setPdfError] = useState<string | null>(null);
    const [touchStartX, setTouchStartX] = useState<number | null>(null);
    const [touchStartY, setTouchStartY] = useState<number | null>(null);

    const currentItem = items[currentIndex];

    // Memoize the PDF file configuration to prevent unnecessary reloads
    const pdfFileConfig = useMemo(() => {
        if (!currentItem?.url || currentItem.type !== 'pdf') return null;

        return {
            url: currentItem.url,
            httpHeaders: {
                'Access-Control-Allow-Origin': '*',
            },
            withCredentials: false
        };
    }, [currentItem?.url, currentItem?.type]);

    // Memoize PDF options to prevent unnecessary reloads
    const pdfOptions = useMemo(() => ({
        cMapUrl: `https://cdn.jsdelivr.net/npm/pdfjs-dist@${pdfjs.version}/cmaps/`,
        cMapPacked: true,
        standardFontDataUrl: `https://cdn.jsdelivr.net/npm/pdfjs-dist@${pdfjs.version}/standard_fonts/`,
    }), []);

    // Reset state when gallery opens/closes
    useEffect(() => {
        if (isOpen) {
            setCurrentIndex(initialIndex);
            setZoom(1);
            setRotation(0);
            setIsFullscreen(false);
            setPdfPage(1);
            setPdfError(null);
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen, initialIndex]);

    // Keyboard navigation
    const handleKeyDown = useCallback((e: KeyboardEvent) => {
        if (!isOpen) return;

        switch (e.key) {
            case 'Escape':
                onClose();
                break;
            case 'ArrowLeft':
                handlePrevious();
                break;
            case 'ArrowRight':
                handleNext();
                break;
            case '=':
            case '+':
                handleZoomIn();
                break;
            case '-':
                handleZoomOut();
                break;
            case '0':
                setZoom(1);
                setRotation(0);
                break;
        }
    }, [isOpen]);

    useEffect(() => {
        document.addEventListener('keydown', handleKeyDown);
        return () => document.removeEventListener('keydown', handleKeyDown);
    }, [handleKeyDown]);

    const handlePrevious = () => {
        setCurrentIndex((prev) => {
            const newIndex = prev > 0 ? prev - 1 : items.length - 1;
            if (items[newIndex]?.type === 'pdf') setPdfPage(1);
            return newIndex;
        });
        setZoom(1);
        setRotation(0);
        setPdfError(null);
    };

    const handleNext = () => {
        setCurrentIndex((prev) => {
            const newIndex = prev < items.length - 1 ? prev + 1 : 0;
            if (items[newIndex]?.type === 'pdf') setPdfPage(1);
            return newIndex;
        });
        setZoom(1);
        setRotation(0);
        setPdfError(null);
    };

    const handleZoomIn = () => {
        setZoom((prev) => Math.min(prev + 0.25, 3));
    };

    const handleZoomOut = () => {
        setZoom((prev) => Math.max(prev - 0.25, 0.25));
    };

    const handleRotate = () => {
        setRotation((prev) => (prev + 90) % 360);
    };

    // const handleDownload = async () => {
    //     if (!currentItem) return;

    //     try {
    //         const response = await fetch(currentItem.url);
    //         const blob = await response.blob();
    //         const url = window.URL.createObjectURL(blob);
    //         const a = document.createElement('a');
    //         a.href = url;
    //         a.download = currentItem.name || `evidence-${currentItem.id}`;
    //         document.body.appendChild(a);
    //         a.click();
    //         document.body.removeChild(a);
    //         window.URL.revokeObjectURL(url);
    //     } catch (error) {
    //         console.error('Download failed:', error);
    //     }
    // };

    const toggleFullscreen = () => {
        setIsFullscreen(!isFullscreen);
    };

    // Touch event handlers for swipe gestures
    const handleTouchStart = (e: React.TouchEvent) => {
        setTouchStartX(e.touches[0].clientX);
        setTouchStartY(e.touches[0].clientY);
    };

    const handleTouchEnd = (e: React.TouchEvent) => {
        if (!touchStartX || !touchStartY) return;

        const touchEndX = e.changedTouches[0].clientX;
        const touchEndY = e.changedTouches[0].clientY;
        const diffX = touchStartX - touchEndX;
        const diffY = touchStartY - touchEndY;

        // Only trigger swipe if horizontal movement is greater than vertical
        if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 50) {
            if (diffX > 0) {
                handleNext(); // Swipe left - next
            } else {
                handlePrevious(); // Swipe right - previous
            }
        }

        setTouchStartX(null);
        setTouchStartY(null);
    };


    if (!isOpen) return null;

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-50 flex items-start justify-center bg-black/50 backdrop-blur-xs p-2 sm:p-4 overflow-y-auto pt-4 sm:pt-8"
                onClick={(e) => e.target === e.currentTarget && onClose()}
            >
                {/* Modal Card */}
                <div className="relative w-full max-w-4xl mx-auto rounded-2xl sm:rounded-3xl shadow-2xl bg-white/80 dark:bg-gray-900/90 border border-gray-200 dark:border-gray-800 flex flex-col overflow-hidden min-h-[80vh] max-h-[96vh]">
                    {/* Header */}
                    <div className="flex items-center justify-between px-3 sm:px-6 py-3 sm:py-4 border-b border-gray-100 dark:border-gray-800 bg-white/60 dark:bg-gray-900/70 backdrop-blur-xs">
                        <div className="flex items-center gap-2 sm:gap-3 min-w-0 flex-1">
                            {currentItem?.type === 'pdf' ? (
                                <FileText className="h-4 w-4 sm:h-5 sm:w-5 text-red-500 flex-shrink-0" />
                            ) : (
                                <ImageIcon className="h-4 w-4 sm:h-5 sm:w-5 text-blue-500 flex-shrink-0" />
                            )}
                            <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 min-w-0 flex-1">
                                <span className="font-semibold text-gray-900 dark:text-white text-sm sm:text-base truncate max-w-[120px] sm:max-w-[180px] md:max-w-xs">
                                    {currentItem?.name || `Evidence ${currentIndex + 1}`}
                                </span>
                                {currentItem?.reporterName && (
                                    <span className="text-xs text-gray-500 dark:text-gray-300 truncate">by {currentItem.reporterName}</span>
                                )}
                            </div>
                        </div>
                        <button
                            onClick={onClose}
                            className="p-1.5 sm:p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors text-gray-700 dark:text-gray-200 flex-shrink-0"
                            title="Close"
                        >
                            <X className="h-5 w-5" />
                        </button>
                    </div>

                    {/* Main Preview Area */}
                    <div 
                        className="relative flex-1 bg-gradient-to-br from-white/60 to-gray-100/80 dark:from-gray-900/80 dark:to-gray-800/80 overflow-hidden"
                        onTouchStart={handleTouchStart}
                        onTouchEnd={handleTouchEnd}
                    >
                        {/* Navigation arrows */}
                        {items.length > 1 && (
                            <button
                                onClick={handlePrevious}
                                className="absolute left-1 sm:left-2 top-1/2 -translate-y-1/2 p-1.5 sm:p-2 rounded-full bg-white/90 dark:bg-gray-800/90 border border-gray-200 dark:border-gray-700 shadow hover:bg-indigo-100 dark:hover:bg-indigo-900 transition-colors z-10 touch-manipulation"
                                title="Previous"
                            >
                                <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6 text-indigo-500" />
                            </button>
                        )}
                        <div className="absolute inset-0 overflow-auto scrollbar-thin">
                            <motion.div
                                key={currentIndex}
                                initial={{ opacity: 0, scale: 0.96 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.96 }}
                                transition={{ duration: 0.2 }}
                                className="relative min-h-full flex items-center justify-center p-2 sm:p-4"
                                style={{
                                    transform: `scale(${zoom}) rotate(${rotation}deg)`,
                                    transition: 'transform 0.2s ease-in-out',
                                    transformOrigin: 'center center'
                                }}
                            >
                            {currentItem?.type === 'pdf' ? (
                                <div className="flex flex-col items-center w-full bg-white rounded-xl shadow-xl p-2 my-4">
                                    {pdfError ? (
                                        <div className="flex flex-col items-center justify-center h-40 text-center p-4">
                                            <FileText className="h-12 w-12 text-gray-400 mb-2" />
                                            <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">Failed to load PDF file</p>
                                            <p className="text-xs text-gray-500 dark:text-gray-500 mb-3">{pdfError}</p>
                                            <button
                                                onClick={() => {
                                                    setPdfError(null);
                                                    setIsLoading(true);
                                                }}
                                                className="px-3 py-1.5 text-xs bg-indigo-100 hover:bg-indigo-200 dark:bg-indigo-900 dark:hover:bg-indigo-800 text-indigo-700 dark:text-indigo-300 rounded-lg transition-colors"
                                            >
                                                Try Again
                                            </button>
                                        </div>
                                    ) : (
                                        <Document
                                            file={pdfFileConfig}
                                            onLoadSuccess={({ numPages }) => {
                                                setNumPages(numPages);
                                                setIsLoading(false);
                                                setPdfError(null);
                                            }}
                                            onLoadError={(error) => {
                                                console.error('PDF loading error:', error);
                                                setIsLoading(false);
                                                setPdfError(error.message || 'Unknown error occurred');
                                            }}
                                            loading={<div className="flex items-center justify-center h-32 sm:h-40"><div className="animate-spin rounded-full h-6 w-6 sm:h-8 sm:w-8 border-b-2 border-indigo-500"></div></div>}
                                            className="w-full flex flex-col items-center overflow-auto"
                                            options={pdfOptions}
                                        >
                                            <Page
                                                pageNumber={pdfPage}
                                                width={isFullscreen ? undefined : Math.min(520, window.innerWidth - 100)}
                                                renderTextLayer={false}
                                                renderAnnotationLayer={false}
                                                loading={<div className="flex items-center justify-center h-32 sm:h-40"><div className="animate-spin rounded-full h-6 w-6 sm:h-8 sm:w-8 border-b-2 border-indigo-500"></div></div>}
                                                onLoadError={(error) => {
                                                    console.error('PDF page loading error:', error);
                                                    setPdfError('Failed to render PDF page');
                                                }}
                                                className="max-w-full"
                                            />
                                        </Document>
                                    )}
                                    {/* PDF page navigation */}
                                    {numPages && numPages > 1 && (
                                        <div className="flex items-center justify-center mt-2 space-x-2 flex-shrink-0">
                                            <button
                                                onClick={() => setPdfPage((p) => Math.max(1, p - 1))}
                                                disabled={pdfPage <= 1}
                                                className="p-1.5 rounded hover:bg-indigo-100 disabled:opacity-50 touch-manipulation"
                                                title="Previous Page"
                                            >
                                                <ChevronLeft className="h-4 w-4" />
                                            </button>
                                            <span className="text-xs sm:text-sm text-gray-700 dark:text-gray-300 px-2">Page {pdfPage} of {numPages}</span>
                                            <button
                                                onClick={() => setPdfPage((p) => Math.min(numPages!, p + 1))}
                                                disabled={pdfPage >= numPages}
                                                className="p-1.5 rounded hover:bg-indigo-100 disabled:opacity-50 touch-manipulation"
                                                title="Next Page"
                                            >
                                                <ChevronRight className="h-4 w-4" />
                                            </button>
                                        </div>
                                    )}
                                </div>
                            ) : (
                                <div className="w-full flex justify-center my-4">
                                    <img
                                        src={currentItem.url}
                                        alt={currentItem.name}
                                        className="max-w-full h-auto object-contain rounded-lg sm:rounded-xl shadow-xl"
                                        onLoad={() => setIsLoading(false)}
                                        style={{
                                            maxHeight: isFullscreen
                                                ? 'none'
                                                : window.innerWidth < 640 ? '70vh' : '80vh',
                                            width: 'auto'
                                        }}
                                    />
                                </div>
                            )}
                            {isLoading && (
                                <div className="absolute inset-0 flex items-center justify-center bg-gray-900/30 rounded-xl">
                                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-500"></div>
                                </div>
                            )}
                        </motion.div>
                        </div>
                        {items.length > 1 && (
                            <button
                                onClick={handleNext}
                                className="absolute right-1 sm:right-2 top-1/2 -translate-y-1/2 p-1.5 sm:p-2 rounded-full bg-white/90 dark:bg-gray-800/90 border border-gray-200 dark:border-gray-700 shadow hover:bg-indigo-100 dark:hover:bg-indigo-900 transition-colors z-10 touch-manipulation"
                                title="Next"
                            >
                                <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6 text-indigo-500" />
                            </button>
                        )}
                    </div>

                    {/* Bottom Toolbar */}
                    <div className="flex-shrink-0 flex flex-col gap-2 px-3 sm:px-6 py-3 border-t border-gray-100 dark:border-gray-800 bg-white/60 dark:bg-gray-900/70 backdrop-blur-sm">
                        <div className="flex items-center justify-between">
                            {/* Controls */}
                            <div className="flex items-center gap-1 sm:gap-2 overflow-x-auto scrollbar-hide">
                                <button
                                    onClick={handleZoomOut}
                                    disabled={zoom <= 0.25}
                                    className="p-1.5 sm:p-2 rounded-lg hover:bg-indigo-100 dark:hover:bg-indigo-900 transition-colors text-indigo-600 dark:text-indigo-300 disabled:opacity-50 disabled:cursor-not-allowed flex-shrink-0 touch-manipulation"
                                    title="Zoom Out"
                                >
                                    <ZoomOut className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                                </button>
                                <span className="text-xs text-gray-700 dark:text-gray-200 min-w-8 text-center flex-shrink-0">
                                    {Math.round(zoom * 100)}%
                                </span>
                                <button
                                    onClick={handleZoomIn}
                                    disabled={zoom >= 3}
                                    className="p-1.5 sm:p-2 rounded-lg hover:bg-indigo-100 dark:hover:bg-indigo-900 transition-colors text-indigo-600 dark:text-indigo-300 disabled:opacity-50 disabled:cursor-not-allowed flex-shrink-0 touch-manipulation"
                                    title="Zoom In"
                                >
                                    <ZoomIn className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                                </button>
                                <button
                                    onClick={handleRotate}
                                    className="p-1.5 sm:p-2 rounded-lg hover:bg-indigo-100 dark:hover:bg-indigo-900 transition-colors text-indigo-600 dark:text-indigo-300 flex-shrink-0 touch-manipulation"
                                    title="Rotate"
                                >
                                    <RotateCw className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                                </button>
                                <button
                                    onClick={toggleFullscreen}
                                    className="p-1.5 sm:p-2 rounded-lg hover:bg-indigo-100 dark:hover:bg-indigo-900 transition-colors text-indigo-600 dark:text-indigo-300 flex-shrink-0 touch-manipulation"
                                    title={isFullscreen ? 'Exit Fullscreen' : 'Fullscreen'}
                                >
                                    {isFullscreen ? <Minimize2 className="h-3.5 w-3.5 sm:h-4 sm:w-4" /> : <Maximize2 className="h-3.5 w-3.5 sm:h-4 sm:w-4" />}
                                </button>
                                {/* <button
                                    onClick={handleDownload}
                                    className="p-1.5 sm:p-2 rounded-lg hover:bg-indigo-100 dark:hover:bg-indigo-900 transition-colors text-indigo-600 dark:text-indigo-300 flex-shrink-0 touch-manipulation"
                                    title="Download"
                                >
                                    <Download className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                                </button> */}
                            </div>
                            {/* Evidence count */}
                            <span className="text-xs text-gray-500 dark:text-gray-400 flex-shrink-0 ml-2">
                                {currentIndex + 1} of {items.length}
                            </span>
                        </div>
                        {/* Thumbnails */}
                        {items.length > 1 && (
                            <div className="flex items-center gap-2 overflow-x-auto scrollbar-hide pt-1">
                                {items.map((item, index) => (
                                    <button
                                        key={item.id}
                                        onClick={() => {
                                            setCurrentIndex(index);
                                            setZoom(1);
                                            setRotation(0);
                                            setPdfError(null);
                                            if (items[index]?.type === 'pdf') setPdfPage(1);
                                        }}
                                        className={`flex-shrink-0 w-12 h-8 rounded-lg border-2 transition-all ${index === currentIndex
                                            ? 'border-indigo-400 bg-indigo-100 dark:bg-indigo-900/40'
                                            : 'border-gray-200 dark:border-gray-700 hover:border-indigo-300 dark:hover:border-indigo-500'
                                            }`}
                                        title={item.name}
                                    >
                                        <div className="w-full h-full rounded flex items-center justify-center bg-white/80 dark:bg-gray-800/80">
                                            {item.type === 'pdf' ? (
                                                <FileText className="h-4 w-4 text-red-400" />
                                            ) : (
                                                <ImageIcon className="h-4 w-4 text-blue-400" />
                                            )}
                                        </div>
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </motion.div>
        </AnimatePresence>
    );
}