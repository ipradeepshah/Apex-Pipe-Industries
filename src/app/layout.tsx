
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./context/ThemeContext";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Apex Pipe Industries",
  description: " Apex Pipe Industries is one of the leading manufacturer of PVC Pipes in Nepal, having a track record of successfully manufacturing & marketing uPVC pipes conforming to different standards ranging from 1½ to 8",
  keywords: [
    "Apex Pipe Industries",
    "Pipe Manufacturer in Nepal",
    "apex Pipe Industries Nepal",
  ],
  authors: [{ name: "Pradeep Shah",
              
     url: "https://www.linkedin.com/in/ipradeepshah/" }],
  creator: "Pradeep Shah",
  openGraph: {
    title: "Apex Pipe Industries",
    description: " Apex Pipe Industries is one of the leading manufacturer of PVC Pipes in Nepal, having a track record of successfully manufacturing & marketing uPVC pipes conforming to different standards ranging from 1½ to 8",
    url: "https://apexpipeindustries.com.np",
    siteName: "Apex Pipe Industries ",
    
    },
  }

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (    
        
    <body className={`bg-white transition-colors dark:bg-gray-900 dark:text-white ${geistSans.variable} ${geistMono.variable}`}>
        <ThemeProvider>
          <Navbar />
          <main className="min-h-screen pt-24">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    
  );
}
