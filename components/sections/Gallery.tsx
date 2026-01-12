"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

export default function Gallery() {
    const [activeFilter, setActiveFilter] = useState('all');

    const galleryItems = [
        {
            id: 1,
            category: 'graphic-design',
            title: 'Neon Horizon Festival',
            image: '/images/gallery_graphic_design_1.png',
            description: 'Festival poster design with vibrant gradients',
        },
        {
            id: 2,
            category: 'graphic-design',
            title: 'Aarohan Tech Fest',
            image: '/images/gallery_graphic_design_2.png',
            description: 'Official poster for Aarohan 2024',
        },
        {
            id: 3,
            category: 'photography',
            title: 'Campus Nights',
            image: '/images/gallery_photo_1.png',
            description: 'Long exposure campus photography',
        },
        {
            id: 4,
            category: 'photography',
            title: 'Recstacy Performance',
            image: '/images/gallery_photo_2.png',
            description: 'Live performance capture from Recstacy',
        },
        {
            id: 5,
            category: '3d-art',
            title: 'Abstract Geometry',
            image: '/images/gallery_3d_art_1.png',
            description: '3D render with metallic surfaces',
        },
        {
            id: 6,
            category: '3d-art',
            title: 'Holographic Logo',
            image: '/images/gallery_3d_art_2.png',
            description: 'Futuristic 3D logo design',
        },
    ];

    const filters = [
        { id: 'all', label: 'All Work' },
        { id: 'graphic-design', label: 'Graphic Design' },
        { id: 'photography', label: 'Photography' },
        { id: '3d-art', label: '3D Art' },
    ];

    const filteredItems = activeFilter === 'all'
        ? galleryItems
        : galleryItems.filter(item => item.category === activeFilter);

    return (
        <section id="gallery" className="min-h-screen py-20 px-4 md:px-8">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-5xl md:text-6xl font-bold text-gradient mb-6">
                        Art Work Gallery
                    </h2>
                    <p className="text-xl text-gray-300 mb-8">
                        Showcasing our creative excellence
                    </p>

                    {/* Filter Buttons */}
                    <div className="flex flex-wrap justify-center gap-4 mb-12">
                        {filters.map((filter) => (
                            <button
                                key={filter.id}
                                onClick={() => setActiveFilter(filter.id)}
                                className={`px-6 py-3 rounded-lg font-medium transition-all hoverable ${activeFilter === filter.id
                                        ? 'bg-gradient-to-r from-neon-cyan to-electric-purple text-white'
                                        : 'glass-button'
                                    }`}
                            >
                                {filter.label}
                            </button>
                        ))}
                    </div>
                </motion.div>

                {/* Masonry Grid */}
                <motion.div
                    layout
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    <AnimatePresence mode="popLayout">
                        {filteredItems.map((item, index) => (
                            <motion.div
                                key={item.id}
                                layout
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.8 }}
                                transition={{ duration: 0.5 }}
                                className="group relative glass-card overflow-hidden hoverable cursor-pointer"
                                style={{ height: index % 3 === 0 ? '400px' : '350px' }}
                            >
                                <div className="relative w-full h-full">
                                    <div
                                        className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                                        style={{ backgroundImage: `url(${item.image})` }}
                                    />

                                    {/* Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-space-black via-space-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                                        <h3 className="text-2xl font-bold mb-2 text-neon-cyan">
                                            {item.title}
                                        </h3>
                                        <p className="text-gray-300">{item.description}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    );
}
