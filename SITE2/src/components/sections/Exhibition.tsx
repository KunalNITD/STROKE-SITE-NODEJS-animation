"use client";

import { motion } from "framer-motion";
import { Play } from "lucide-react";

const videos = [
    { id: 1, title: "Aarohan '24 Trailer", thumbnail: "https://images.unsplash.com/photo-1536240478700-b869070f9279?q=80&w=1000&auto=format&fit=crop" },
    { id: 2, title: "Recstacy Aftermovie", thumbnail: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44c?q=80&w=1000&auto=format&fit=crop" },
];

export default function Exhibition() {
    return (
        <section id="exhibition" className="py-24 px-6 relative">
            <div className="max-w-7xl mx-auto">
                <motion.h2
                    className="text-4xl md:text-6xl font-bold mb-16 text-right tracking-tighter"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                >
                    <span className="text-brand-purple">EXHIBITION</span> HALL
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {videos.map((vid, index) => (
                        <motion.div
                            key={vid.id}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            whileHover={{ scale: 1.02 }}
                            transition={{ delay: index * 0.2 }}
                            className="relative aspect-video rounded-3xl overflow-hidden group cursor-pointer border border-white/10"
                        >
                            <img
                                src={vid.thumbnail}
                                alt={vid.title}
                                className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105 filter grayscale group-hover:grayscale-0"
                            />
                            <div className="absolute inset-0 bg-black/50 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                                <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                                    <Play className="fill-white text-white ml-1" />
                                </div>
                            </div>
                            <div className="absolute bottom-0 left-0 p-6 w-full bg-gradient-to-t from-black to-transparent">
                                <h3 className="text-2xl font-bold text-white">{vid.title}</h3>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
