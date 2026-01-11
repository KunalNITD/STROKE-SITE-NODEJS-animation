"use client";

import { motion } from "framer-motion";

export default function About() {
    return (
        <section id="about" className="min-h-[80vh] flex items-center justify-center py-20 px-6 relative">
            <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-5xl md:text-7xl font-bold tracking-tight"
                >
                    CREATIVE<br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-brand-purple">
                        BACKBONE
                    </span><br />
                    OF NITD.
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="glass p-8 md:p-12 rounded-3xl"
                >
                    <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                        We are STROKES, the official Creative and Technical Design Club of National Institute of Technology, Durgapur.
                    </p>
                    <p className="mt-6 text-lg md:text-xl text-gray-400 leading-relaxed">
                        From crafting the visual identity of Eastern India’s largest fests like <strong className="text-brand-cyan">Aarohan</strong> and <strong className="text-brand-purple">Recstacy</strong>,
                        to exploring the depths of 3D Art, UI/UX, and Cinematography — we bridge the gap between imagination and reality.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
