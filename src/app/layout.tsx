import type { Metadata } from "next";
import "./globals.css";
import { cn } from "@/utils/util";
import { karla, montserrat } from "./font";

export const metadata: Metadata = {
  title: "Katalyst",
  description: "Website Design System",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          montserrat.className,
          montserrat.variable,
          karla.variable,
        )}
      >
        {children}
      </body>
    </html>
  );
}
