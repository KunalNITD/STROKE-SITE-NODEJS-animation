"use client";

import { motion } from 'framer-motion';
import {
    Image as ImageIcon,
    Layers,
    Figma,
    Film,
    Code2,
    Box
} from 'lucide-react';

export default function TechStack() {
    const tools = [
        {
            name: 'Photoshop',
            icon: ImageIcon,
            color: 'from-blue-500 to-cyan-500',
            description: 'Photo editing & manipulation',
        },
        {
            name: 'Illustrator',
            icon: Layers,
            color: 'from-orange-500 to-yellow-500',
            description: 'Vector graphics & illustrations',
        },
        {
            name: 'Figma',
            icon: Figma,
            color: 'from-purple-500 to-pink-500',
            description: 'UI/UX design & prototyping',
        },
        {
            name: 'Premiere Pro',
            icon: Film,
            color: 'from-purple-600 to-blue-600',
            description: 'Video editing & production',
        },
        {
            name: 'Next.js',
            icon: Code2,
            color: 'from-neon-cyan to-blue-500',
            description: 'Web development framework',
        },
        {
            name: 'Three.js',
            icon: Box,
            color: 'from-electric-purple to-pink-500',
            description: '3D graphics & animations',
        },
    ];

    return (
        <section id="tech-stack" className="min-h-screen py-20 px-4 md:px-8">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-5xl md:text-6xl font-bold text-gradient mb-6">
                        Tech Stack
                    </h2>
                    <p className="text-xl text-gray-300">
                        Tools we use to bring ideas to life
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {tools.map((tool, index) => {
                        const Icon = tool.icon;
                        return (
                            <motion.div
                                key={tool.name}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="glass-card p-8 group hoverable cursor-pointer"
                                whileHover={{ scale: 1.05 }}
                            >
                                <div className="flex flex-col items-center text-center">
                                    <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${tool.color} flex items-center justify-center mb-6 transform transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110`}>
                                        <Icon size={40} className="text-white" />
                                    </div>
                                    <h3 className="text-2xl font-bold mb-3">{tool.name}</h3>
                                    <p className="text-gray-400">{tool.description}</p>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
