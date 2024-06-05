import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "eiktec graphics",
    description: "eiktec 2024",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="h-full">
            <body
                className={cn(
                    "relative h-full font-sans antialiased",
                    inter.className,
                )}
            >
                <main className="relative flex min-h-screen flex-col">
                    <Navbar />
                    <div className="flex-1 flex-grow">{children}</div>
                    <Footer />
                </main>
            </body>
        </html>
    );
}
