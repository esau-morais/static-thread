import { ThemeWrapper } from "@/components/ThemeWrapper";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "@ | %s",
    default: "Static Thread",
  },
  description: "Incremental static generation using threads",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background antialiased",
          inter.className
        )}
      >
        <ThemeWrapper attribute="class" defaultTheme="dark">
          {children}
        </ThemeWrapper>
      </body>
    </html>
  );
}
