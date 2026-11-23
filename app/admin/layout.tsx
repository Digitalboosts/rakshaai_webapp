import { ReduxProvider } from "@/components/ReduxProvider";
import { NotificationManager } from "@/components/NotificationManager";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin Panel",
  description: "RakshaAI Admin Panel - Manage platform content and settings",
  robots: {
    index: false,
    follow: false,
    nocache: true,
  },
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ReduxProvider>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        {children}
        <NotificationManager />
      </div>
    </ReduxProvider>
  );
}
