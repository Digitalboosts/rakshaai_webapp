"use client";

import { motion } from "framer-motion";
import { Facebook, Users, CheckCircle2, Info } from "lucide-react";
import Link from "next/link";

interface FBCardProps {
    name?: string;
    id?: string;
    url?: string;
    gender?: string;
    verified?: boolean;
    profile_picture?: string;
    cover_photo?: string;
    followers?: string;
    following?: string;
    profile_type?: string;
    profile_intro_text?: string;
    category?: string;
    email?: string;
    managed_by?: string;
}

export default function FBCard({
    name,
    id,
    url,
    gender,
    verified,
    profile_picture,
    cover_photo,
    followers,
    following,
    profile_type,
    profile_intro_text,
    category,
    email,
    managed_by
}: FBCardProps) {
    // If no data is available, don't render the card
    if (!name && !url) {
        return null;
    }

    return (
        <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="glass rounded-2xl p-6 card-hover"
        >
            {/* Cover Photo */}
            {cover_photo && (
                <div className="mb-4 -mx-6 -mt-6">
                    <div className="h-24 bg-gradient-to-r from-blue-500 to-purple-600 rounded-t-2xl relative overflow-hidden">
                        <img
                            src={cover_photo}
                            alt="Cover photo"
                            className="w-full h-full object-cover"
                            onError={(e) => {
                                (e.target as HTMLImageElement).style.display = 'none';
                            }}
                        />
                    </div>
                </div>
            )}

            <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                    <div className="relative">
                        {profile_picture ? (
                            <div className="w-12 h-12 rounded-xl overflow-hidden border-2 border-blue-200 dark:border-blue-800">
                                <img
                                    src={profile_picture}
                                    alt={`${name} profile`}
                                    className="w-full h-full object-cover"
                                    onError={(e) => {
                                        (e.target as HTMLImageElement).style.display = 'none';
                                        (e.target as HTMLImageElement).parentElement!.innerHTML = '<div class="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center"><svg class="h-6 w-6 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg></div>';
                                    }}
                                />
                            </div>
                        ) : (
                            <div className="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center">
                                <Facebook className="h-6 w-6 text-white" />
                            </div>
                        )}
                    </div>
                    <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-1">
                            <h3 className="text-lg font-bold text-gray-900 dark:text-white truncate">{name || "Unknown"}</h3>
                            {verified && (
                                <CheckCircle2 className="h-5 w-5 text-blue-500 flex-shrink-0" />
                            )}
                        </div>
                        <div className="space-y-1">
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                                {category || "Facebook Page"} • {profile_type || "PAGE"}
                            </p>
                            {profile_intro_text && (
                                <p className="text-xs text-gray-500 dark:text-gray-500 line-clamp-2">
                                    {profile_intro_text}
                                </p>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            <div className="space-y-3">
                {/* Followers and Following */}
                <div className="grid grid-cols-2 gap-3">
                    <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800/50 rounded-xl">
                        <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
                            <Users className="h-4 w-4" />
                            <span className="text-sm">Followers</span>
                        </div>
                        <span className="text-lg font-bold text-gray-900 dark:text-white">{followers || "N/A"}</span>
                    </div>
                    {following && (
                        <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800/50 rounded-xl">
                            <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
                                <Users className="h-4 w-4" />
                                <span className="text-sm">Following</span>
                            </div>
                            <span className="text-lg font-bold text-gray-900 dark:text-white">{following}</span>
                        </div>
                    )}
                </div>

                {/* Verification Status */}
                <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800/50 rounded-xl">
                    <div className="flex items-center">
                        <span className="text-sm text-gray-600 dark:text-gray-400">Verification</span>
                        <div className="relative inline-block group ml-1">
                            <Info className="h-3 w-3 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 cursor-help transition-colors" />
                            <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-gray-900 dark:bg-gray-700 text-white text-xs rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-50 w-56 text-center">
                                {verified ? "This page has been verified by Facebook as authentic" : "This page has not been verified by Facebook"}
                                <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900 dark:border-t-gray-700"></div>
                            </div>
                        </div>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${verified ? "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400" : "bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-400"}`}>
                        {verified ? "✓ Verified" : "Not Verified"}
                    </span>
                </div>

                {/* Additional Information */}
                {/* {id && (
                    <div className="p-3 bg-gray-50 dark:bg-gray-800/50 rounded-xl">
                        <div className="flex justify-between items-center">
                            <span className="text-sm text-gray-600 dark:text-gray-400">Page ID</span>
                            <span className="text-sm font-mono text-gray-900 dark:text-white">{id}</span>
                        </div>
                    </div>
                )} */}

                {email && (
                    <div className="p-3 bg-gray-50 dark:bg-gray-800/50 rounded-xl">
                        <div className="flex justify-between items-center">
                            <span className="text-sm text-gray-600 dark:text-gray-400">Contact Email</span>
                            <span className="text-sm text-gray-900 dark:text-white">{email}</span>
                        </div>
                    </div>
                )}

                {managed_by && (
                    <div className="p-3 bg-gray-50 dark:bg-gray-800/50 rounded-xl">
                        <div className="flex justify-between items-center">
                            <span className="text-sm text-gray-600 dark:text-gray-400">Managed By</span>
                            <span className="text-sm text-gray-900 dark:text-white">{managed_by}</span>
                        </div>
                    </div>
                )}

                {url ? (
                    <Link
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white text-center rounded-xl font-medium transition-colors"
                    >
                        Visit Facebook Page
                    </Link>
                ) : (
                    <div className="block w-full py-3 px-4 bg-gray-400 text-white text-center rounded-xl font-medium cursor-not-allowed">
                        No Page Available
                    </div>
                )}
            </div>
        </motion.div>
    );
}
