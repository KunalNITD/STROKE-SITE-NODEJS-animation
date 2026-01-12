"use client";

import { motion } from 'framer-motion';
import { BentoGrid, BentoItem } from '../BentoGrid';
import { Users, Award, Palette, Code } from 'lucide-react';

export default function About() {
    return (
        <section id="about" className="min-h-screen py-20 px-4 md:px-8">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-5xl md:text-6xl font-bold text-gradient mb-6">
                        About STROKES
                    </h2>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                        The creative backbone of NIT Durgapur
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8 mb-12">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="glass-card p-8"
                    >
                        <h3 className="text-3xl font-bold mb-4 text-neon-cyan">Who We Are</h3>
                        <p className="text-gray-300 leading-relaxed mb-4">
                            STROKES is the official Creative and Technical Design Club of NIT Durgapur,
                            where artistry meets innovation. We are a passionate collective of designers,
                            photographers, videographers, and developers pushing the boundaries of visual
                            storytelling.
                        </p>
                        <p className="text-gray-300 leading-relaxed">
                            From conceptualization to execution, we craft the visual identity that defines
                            our campus&apos;s biggest events and celebrations.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="glass-card p-8"
                    >
                        <h3 className="text-3xl font-bold mb-4 text-electric-purple">What We Do</h3>
                        <p className="text-gray-300 leading-relaxed mb-4">
                            We handle the complete visual identity for NIT Durgapur&apos;s premier fests including:
                        </p>
                        <ul className="space-y-3">
                            <li className="flex items-center gap-3 text-gray-300">
                                <span className="w-2 h-2 bg-neon-cyan rounded-full"></span>
                                <span><strong className="text-neon-cyan">Aarohan</strong> - The annual techno-management fest</span>
                            </li>
                            <li className="flex items-center gap-3 text-gray-300">
                                <span className="w-2 h-2 bg-electric-purple rounded-full"></span>
                                <span><strong className="text-electric-purple">Recstacy</strong> - The cultural extravaganza</span>
                            </li>
                            <li className="flex items-center gap-3 text-gray-300">
                                <span className="w-2 h-2 bg-neon-cyan rounded-full"></span>
                                <span>Campus events, posters, and promotional content</span>
                            </li>
                        </ul>
                    </motion.div>
                </div>

                <BentoGrid>
                    <BentoItem size="medium">
                        <div className="flex flex-col items-center text-center">
                            <div className="w-16 h-16 rounded-full bg-neon-cyan/20 flex items-center justify-center mb-4">
                                <Palette className="text-neon-cyan" size={32} />
                            </div>
                            <h4 className="text-2xl font-bold mb-2">Design</h4>
                            <p className="text-gray-400">
                                Graphic design, UI/UX, and visual identity creation
                            </p>
                        </div>
                    </BentoItem>

                    <BentoItem size="medium">
                        <div className="flex flex-col items-center text-center">
                            <div className="w-16 h-16 rounded-full bg-electric-purple/20 flex items-center justify-center mb-4">
                                <Code className="text-electric-purple" size={32} />
                            </div>
                            <h4 className="text-2xl font-bold mb-2">Development</h4>
                            <p className="text-gray-400">
                                Web development, animations, and interactive experiences
                            </p>
                        </div>
                    </BentoItem>

                    <BentoItem size="medium">
                        <div className="flex flex-col items-center text-center">
                            <div className="w-16 h-16 rounded-full bg-neon-cyan/20 flex items-center justify-center mb-4">
                                <Award className="text-neon-cyan" size={32} />
                            </div>
                            <h4 className="text-2xl font-bold mb-2">Excellence</h4>
                            <p className="text-gray-400">
                                Award-winning work recognized across competitions
                            </p>
                        </div>
                    </BentoItem>
                </BentoGrid>
            </div>
        </section>
    );
}
