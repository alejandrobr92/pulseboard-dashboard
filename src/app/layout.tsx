import type { Metadata } from "next";
import "./globals.css";
import { ReactNode } from "react";

export const metadata: Metadata = {
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
        {children}
      </body>
    </html>
  );
}
