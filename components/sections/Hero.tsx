"use client";

import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
    return (
        <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-radial from-electric-purple/20 via-transparent to-transparent opacity-50" />

            {/* Floating 3D Logo */}
            <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="relative z-10"
            >
                <motion.div
                    animate={{
                        y: [0, -20, 0],
                        rotateX: [0, 10, 0],
                        rotateY: [0, 10, 0],
                    }}
                    transition={{
                        duration: 6,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="text-center"
                    style={{ transformStyle: 'preserve-3d' }}
                >
                    <h1 className="text-8xl md:text-9xl font-bold text-gradient mb-6 animate-glow">
                        STROKES
                    </h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="text-xl md:text-2xl text-gray-300 font-light mb-8"
                    >
                        The Intersection of Art and Code
                    </motion.p>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7 }}
                        className="text-lg text-gray-400"
                    >
                        NIT Durgapur&apos;s Creative & Technical Design Club
                    </motion.p>
                </motion.div>
            </motion.div>

            {/* Scroll Down Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
            >
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="flex flex-col items-center gap-2 cursor-pointer hoverable"
                    onClick={() => {
                        document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                >
                    <span className="text-sm text-gray-400">Scroll Down</span>
                    <ChevronDown className="text-neon-cyan" size={32} />
                </motion.div>
            </motion.div>
        </section>
    );
}
