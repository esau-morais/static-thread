import { ThemeWrapper } from "@/components/ThemeWrapper";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";
import { Header } from "@/components/Header";

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
          <Header />

          <main className="mx-auto max-w-2xl">{children}</main>
        </ThemeWrapper>
      </body>
    </html>
  );
}
