import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import dynamic from "next/dynamic";

const ChatAssistant = dynamic(() => import("@/components/ChatAssistant"), {
  ssr: false,
});

export const metadata: Metadata = {
  title: "Macojal - Build Faster. Scale Smarter.",
  description:
    "Macojal builds secure AI-driven and Web3-enabled digital platforms for enterprises, governments, and mission-critical organizations.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased bg-white text-gray-900 dark:bg-primary-dark dark:text-gray-100">
        <ThemeProvider>
          {children}
          <ChatAssistant />
        </ThemeProvider>
      </body>
    </html>
  );
}

