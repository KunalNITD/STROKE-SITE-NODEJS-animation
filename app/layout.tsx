import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";
import Navigation from "@/components/Navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "STROKES - NIT Durgapur | The Intersection of Art and Code",
    description: "Official Creative and Technical Design Club of NIT Durgapur. Handling visual identity for fests like Aarohan and Recstacy.",
    keywords: ["STROKES", "NIT Durgapur", "Design Club", "Creative Club", "Aarohan", "Recstacy", "Graphic Design", "Photography"],
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <CustomCursor />
                <Navigation />
                {children}
            </body>
        </html>
    );
}
