"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { useRef } from "react";

export default function Hero() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    return (
        <section id="home" ref={containerRef} className="relative h-screen flex flex-col items-center justify-center overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(112,0,255,0.15),transparent_50%)] animate-pulse" />
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-cyan/20 rounded-full blur-[100px] mix-blend-screen" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-brand-purple/20 rounded-full blur-[100px] mix-blend-screen" />

            <motion.div style={{ y, opacity }} className="relative z-10 text-center flex flex-col items-center">
                {/* glitched text effect or just big bold text */}
                <h1 className="text-[15vw] leading-none font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-white via-white to-gray-500 drop-shadow-[0_0_50px_rgba(255,255,255,0.1)] select-none pointer-events-none">
                    STROKES
                </h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="text-xl md:text-3xl font-light tracking-[0.2em] text-gray-300 mt-4 uppercase"
                >
                    The Intersection of <span className="text-brand-cyan">Art</span> & <span className="text-brand-purple">Code</span>
                </motion.p>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
                className="absolute bottom-12 z-20"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, y: [0, 10, 0] }}
                transition={{ delay: 1, duration: 2, repeat: Infinity }}
            >
                <ArrowDown className="text-white/50 w-8 h-8" />
            </motion.div>
        </section>
    );
}
