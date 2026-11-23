"use client";
import { useEffect, useState } from "react";

export default function ApiInspectorClient({ data }: { data: any }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined" && data) {
      console.log("API response (server -> client):", data);
    }
  }, [data]);

  if (!data) return null;

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <button
        type="button"
        onClick={() => {
          console.log("API response (manual):", data);
          setOpen((s) => !s);
        }}
        className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium px-3 py-2 rounded-lg shadow-md"
      >
        {open ? "Hide API" : "Show API"}
      </button>

      {open && (
        <div className="mt-2 max-h-80 w-[min(90vw,48rem)] overflow-auto bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg p-3 text-xs">
          <pre className="whitespace-pre-wrap">{JSON.stringify(data, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}
