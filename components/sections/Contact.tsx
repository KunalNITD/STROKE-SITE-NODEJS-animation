"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Instagram, Linkedin, Globe } from 'lucide-react';
import MagneticButton from '../MagneticButton';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        // Add form submission logic here
    };

    const socialLinks = [
        {
            name: 'Instagram',
            icon: Instagram,
            url: 'https://instagram.com',
            color: 'from-purple-500 to-pink-500',
        },
        {
            name: 'LinkedIn',
            icon: Linkedin,
            url: 'https://linkedin.com',
            color: 'from-blue-500 to-cyan-500',
        },
        {
            name: 'Behance',
            icon: Globe,
            url: 'https://behance.net',
            color: 'from-blue-600 to-blue-400',
        },
    ];

    return (
        <section id="contact" className="min-h-screen py-20 px-4 md:px-8 bg-gradient-to-b from-transparent to-neon-cyan/10">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-5xl md:text-6xl font-bold text-gradient mb-6">
                        Get In Touch
                    </h2>
                    <p className="text-xl text-gray-300">
                        Let&apos;s create something amazing together
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12">
                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="glass-card p-8"
                    >
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium mb-2">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    className="w-full px-4 py-3 glass-card bg-white/5 border-none rounded-lg focus:outline-none focus:ring-2 focus:ring-neon-cyan transition-all"
                                    placeholder="Your name"
                                    required
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium mb-2">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    className="w-full px-4 py-3 glass-card bg-white/5 border-none rounded-lg focus:outline-none focus:ring-2 focus:ring-neon-cyan transition-all"
                                    placeholder="your.email@example.com"
                                    required
                                />
                            </div>

                            <div>
                                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                                    Subject
                                </label>
                                <input
                                    type="text"
                                    id="subject"
                                    value={formData.subject}
                                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                                    className="w-full px-4 py-3 glass-card bg-white/5 border-none rounded-lg focus:outline-none focus:ring-2 focus:ring-neon-cyan transition-all"
                                    placeholder="What's this about?"
                                    required
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium mb-2">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    rows={5}
                                    className="w-full px-4 py-3 glass-card bg-white/5 border-none rounded-lg focus:outline-none focus:ring-2 focus:ring-neon-cyan transition-all resize-none"
                                    placeholder="Tell us about your project..."
                                    required
                                />
                            </div>

                            <MagneticButton className="w-full glass-button px-6 py-4 rounded-lg font-medium bg-gradient-to-r from-neon-cyan to-electric-purple hover:opacity-90 transition-opacity flex items-center justify-center gap-2">
                                <Send size={20} />
                                Send Message
                            </MagneticButton>
                        </form>
                    </motion.div>

                    {/* Social Links */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex flex-col justify-center"
                    >
                        <h3 className="text-3xl font-bold mb-8">Connect With Us</h3>
                        <div className="space-y-6">
                            {socialLinks.map((social, index) => {
                                const Icon = social.icon;
                                return (
                                    <motion.a
                                        key={social.name}
                                        href={social.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        initial={{ opacity: 0, x: 50 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                        className="group glass-card p-6 flex items-center gap-4 hoverable cursor-pointer"
                                        whileHover={{ scale: 1.02, x: 10 }}
                                    >
                                        <div className={`w-14 h-14 rounded-lg bg-gradient-to-br ${social.color} flex items-center justify-center transform transition-transform group-hover:rotate-12`}>
                                            <Icon size={28} className="text-white" />
                                        </div>
                                        <div>
                                            <h4 className="text-xl font-bold">{social.name}</h4>
                                            <p className="text-gray-400">Follow us on {social.name}</p>
                                        </div>
                                    </motion.a>
                                );
                            })}
                        </div>

                        <div className="mt-12 glass-card p-6">
                            <h4 className="text-xl font-bold mb-4">Location</h4>
                            <p className="text-gray-300">
                                National Institute of Technology<br />
                                Durgapur, West Bengal<br />
                                India - 713209
                            </p>
                        </div>
                    </motion.div>
                </div>

                {/* Footer */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="mt-20 text-center text-gray-400"
                >
                    <p>&copy; 2024 STROKES - NIT Durgapur. All rights reserved.</p>
                </motion.div>
            </div>
        </section>
    );
}
