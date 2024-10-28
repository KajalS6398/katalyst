import type { Metadata } from "next";
import "./globals.css";
import { cn } from "@/utils/util";
import { Poppins } from "next/font/google";

export const metadata: Metadata = {
  title: "Katalyst",
  description: "Website Design System",
};

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  preload: true,
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(poppins.className)}>{children}</body>
    </html>
  );
}
