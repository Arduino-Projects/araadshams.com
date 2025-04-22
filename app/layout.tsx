import type { Metadata } from "next";
import { GeistSans, GeistMono } from "geist/font";
import { Navbar } from "@/components/layout/navbar";
import { Toaster } from "@/components/ui/toaster";
import { AmplitudeProvider } from "@/components/providers/amplitude-provider";
import "./globals.css";

export const metadata: Metadata = {
  title: "Araad Shams - Portfolio",
  description: "Personal portfolio showcasing my work and experience",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body className="antialiased bg-background text-foreground">
        <AmplitudeProvider>
          <Navbar />
          {children}
          <Toaster />
        </AmplitudeProvider>
      </body>
    </html>
  );
}
