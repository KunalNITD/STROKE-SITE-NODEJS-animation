"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import MagneticButton from './MagneticButton';
import ThemeToggle from './ThemeToggle';

export default function Navigation() {
    const [isOpen, setIsOpen] = useState(false);

    const navItems = [
        { name: 'Home', href: '#hero' },
        { name: 'About', href: '#about' },
        { name: 'Gallery', href: '#gallery' },
        { name: 'Exhibition', href: '#exhibition' },
        { name: 'Tech Stack', href: '#tech-stack' },
        { name: 'Contact', href: '#contact' },
    ];

    const scrollToSection = (href: string) => {
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setIsOpen(false);
        }
    };

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 p-4 md:p-6">
            <div className="max-w-7xl mx-auto">
                <div className="glass-card px-6 py-4 flex items-center justify-between">
                    {/* Logo */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="text-2xl font-bold text-gradient"
                    >
                        STROKES
                    </motion.div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-6">
                        {navItems.map((item, index) => (
                            <MagneticButton
                                key={item.name}
                                onClick={() => scrollToSection(item.href)}
                                className="glass-button px-4 py-2 rounded-lg text-sm font-medium transition-all"
                            >
                                {item.name}
                            </MagneticButton>
                        ))}
                        <ThemeToggle />
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center gap-4">
                        <ThemeToggle />
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="glass-button p-2 rounded-lg hoverable"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            className="md:hidden mt-4 glass-card p-6"
                        >
                            {navItems.map((item, index) => (
                                <motion.button
                                    key={item.name}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    onClick={() => scrollToSection(item.href)}
                                    className="w-full text-left py-3 px-4 glass-button rounded-lg mb-2 hoverable"
                                >
                                    {item.name}
                                </motion.button>
                            ))}
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </nav>
    );
}
