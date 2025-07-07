import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import { ThemeProvider } from "@/components/theme-provider"
import Container from "@/components/global/Container";
import { Toaster } from "@/components/ui/sonner";
import {ClerkProvider} from '@clerk/nextjs'


export const metadata: Metadata = {
  title: "E store",
  description: "store build with Next js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning >
      <body>
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
        <Navbar />

        <Container className="pt-24">
          {children}
        </Container>
          <Toaster/>
        </ThemeProvider>
      </body>
    </html>
    </ClerkProvider>
  );
}
