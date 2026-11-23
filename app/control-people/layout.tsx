import { ReduxProvider } from "@/components/ReduxProvider";
import { NotificationManager } from "@/components/NotificationManager";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Secure Access",
  description: "Authorized personnel access portal",
  robots: {
    index: false,
    follow: false,
    nocache: true,
  },
};

export default function ControlLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ReduxProvider>
      {children}
      <NotificationManager />
    </ReduxProvider>
  );
}
