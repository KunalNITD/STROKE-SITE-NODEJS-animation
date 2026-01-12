"use client";

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';

export default function ThemeToggle() {
    const [isDark, setIsDark] = useState(true);

    useEffect(() => {
        // Check localStorage for saved theme
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            setIsDark(savedTheme === 'dark');
            if (savedTheme === 'light') {
                document.body.classList.add('light');
            }
        }
    }, []);

    const toggleTheme = () => {
        setIsDark(!isDark);
        document.body.classList.toggle('light');
        localStorage.setItem('theme', !isDark ? 'dark' : 'light');
    };

    return (
        <button
            onClick={toggleTheme}
            className="relative w-16 h-8 glass-card p-1 hoverable overflow-hidden"
            aria-label="Toggle theme"
        >
            {/* Liquid Morphing Background */}
            <motion.div
                className="absolute top-0 left-0 h-full rounded-full bg-gradient-to-r from-neon-cyan to-electric-purple"
                initial={false}
                animate={{
                    width: isDark ? '50%' : '50%',
                    x: isDark ? '0%' : '100%',
                }}
                transition={{
                    type: "spring",
                    stiffness: 200,
                    damping: 20,
                }}
            />

            {/* Icon Container */}
            <div className="relative flex items-center justify-between h-full px-1">
                <AnimatePresence mode="wait">
                    {isDark ? (
                        <motion.div
                            key="moon"
                            initial={{ opacity: 0, rotate: -90 }}
                            animate={{ opacity: 1, rotate: 0 }}
                            exit={{ opacity: 0, rotate: 90 }}
                            transition={{ duration: 0.3 }}
                            className="absolute left-1"
                        >
                            <Moon size={16} className="text-white" />
                        </motion.div>
                    ) : (
                        <motion.div
                            key="sun"
                            initial={{ opacity: 0, rotate: -90 }}
                            animate={{ opacity: 1, rotate: 0 }}
                            exit={{ opacity: 0, rotate: 90 }}
                            transition={{ duration: 0.3 }}
                            className="absolute right-1"
                        >
                            <Sun size={16} className="text-white" />
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </button>
    );
}
