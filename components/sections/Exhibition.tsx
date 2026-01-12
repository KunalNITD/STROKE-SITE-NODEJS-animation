"use client";

import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

export default function Exhibition() {
    const videos = [
        {
            id: 1,
            title: 'Aarohan 2024 Trailer',
            thumbnail: '/images/video_thumb_1.jpg',
            duration: '2:34',
            views: '50K',
        },
        {
            id: 2,
            title: 'STROKES Showreel',
            thumbnail: '/images/video_thumb_2.jpg',
            duration: '3:15',
            views: '35K',
        },
        {
            id: 3,
            title: 'Recstacy Highlights',
            thumbnail: '/images/video_thumb_3.jpg',
            duration: '4:20',
            views: '42K',
        },
        {
            id: 4,
            title: 'Behind The Scenes',
            thumbnail: '/images/video_thumb_4.jpg',
            duration: '5:10',
            views: '28K',
        },
    ];

    return (
        <section id="exhibition" className="min-h-screen py-20 px-4 md:px-8 bg-gradient-to-b from-transparent to-electric-purple/10">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-5xl md:text-6xl font-bold text-gradient mb-6">
                        Video Exhibition
                    </h2>
                    <p className="text-xl text-gray-300">
                        Cinematic storytelling at its finest
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {videos.map((video, index) => (
                        <motion.div
                            key={video.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative glass-card overflow-hidden hoverable cursor-pointer"
                        >
                            <div className="relative aspect-video bg-gradient-to-br from-neon-cyan/20 to-electric-purple/20">
                                {/* Placeholder for video thumbnail */}
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="text-center">
                                        <div className="w-20 h-20 rounded-full bg-gradient-to-r from-neon-cyan to-electric-purple flex items-center justify-center mb-4 mx-auto transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-90">
                                            <Play className="text-white ml-1" size={32} fill="white" />
                                        </div>
                                        <h3 className="text-2xl font-bold mb-2">{video.title}</h3>
                                        <div className="flex items-center justify-center gap-4 text-gray-400">
                                            <span>{video.duration}</span>
                                            <span>•</span>
                                            <span>{video.views} views</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Hover Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-space-black to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-300" />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
