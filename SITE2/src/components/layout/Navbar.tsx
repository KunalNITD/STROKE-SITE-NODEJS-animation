"use client";

import Link from "next/link";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";
import Magnetic from "@/components/ui/Magnetic";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Work", href: "#work" },
    { name: "Exhibition", href: "#exhibition" },
    { name: "Tech", href: "#tech" },
    { name: "Contact", href: "#contact" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [hidden, setHidden] = useState(false);
    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious() ?? 0;
        if (latest > previous && latest > 150) {
            setHidden(true);
        } else {
            setHidden(false);
        }
    });

    return (
        <>
            <motion.nav
                variants={{
                    visible: { y: 0 },
                    hidden: { y: "-100%" },
                }}
                animate={hidden ? "hidden" : "visible"}
                transition={{ duration: 0.35, ease: "easeInOut" }}
                className="fixed top-0 left-0 w-full z-40 px-6 py-6 flex justify-between items-center mix-blend-difference text-white"
            // Note: Mix-blend-difference might be tricky with Light mode if background is white and text is white (diff = black). 
            // With ThemeToggle, we need to ensure visibility. 
            // Dark Mode: Bg Black, Text White. Diff = works.
            // Light Mode: Bg White, Text Black. Diff = works (White on White = Black).
            // However, elements *inside* nav need to be carefully colored.
            >
                <div className="flex items-center gap-2">
                    {/* Logo 3D effect reduced for navbar, kept simple text */}
                    <Link href="/" className="text-2xl font-bold tracking-tighter">STROKES</Link>
                </div>

                {/* Desktop Nav */}
                <div className="hidden md:flex gap-8 items-center">
                    {navLinks.map((link) => (
                        <Magnetic key={link.name}>
                            <Link href={link.href} className="text-sm font-medium uppercase tracking-widest hover:text-brand-cyan transition-colors">
                                {link.name}
                            </Link>
                        </Magnetic>
                    ))}
                </div>

                {/* Mobile Nav Toggle */}
                <div className="md:hidden flex items-center gap-4 z-50">
                    <div className="cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? <X /> : <Menu />}
                    </div>
                </div>
            </motion.nav>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: "-100%" }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: "-100%" }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                        className="fixed inset-0 bg-background z-30 flex flex-col justify-center items-center gap-8"
                    >
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-4xl font-bold uppercase tracking-tight hover:text-brand-cyan transition-colors text-foreground"
                                onClick={() => setIsOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
