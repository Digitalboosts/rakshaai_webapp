"use client";

import { useEffect, useRef, useState } from "react";

interface AnimatedScoreBarProps {
  percent: number;
  barColorClass: string;
}

export default function AnimatedScoreBar({ percent, barColorClass }: AnimatedScoreBarProps) {
  const [width, setWidth] = useState(0);
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = barRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setWidth(percent), 100);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [percent]);

  return (
    <div ref={barRef} className="w-full h-3 rounded-full bg-gray-100 dark:bg-gray-800 overflow-hidden">
      <div
        className={`h-full rounded-full ${barColorClass} transition-all duration-1000 ease-out`}
        style={{ width: `${width}%` }}
      />
    </div>
  );
}
