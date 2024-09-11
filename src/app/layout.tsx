import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SortingAlgorithmProvider } from "@/context/visualizer";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "algorithm visualizer",
  description: "an algorithm visualizer for educational purposes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SortingAlgorithmProvider>{children}</SortingAlgorithmProvider>
      </body>
    </html>
  );
}
