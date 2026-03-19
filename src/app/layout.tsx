'use client'

import { ReactNode } from "react";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@/lib/react-query";
import type { Metadata } from "next";
import "./globals.css";

const metadata: Metadata = {
  title: "PulseBoard",
  description: "Real-time team analytics dashboard",
};

type RootLayoutProps = Readonly<{
  children: ReactNode;
}>;

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={`min-h-screen bg-green-100 text-gray-800`}>
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
      </body>
    </html>
  );
}
