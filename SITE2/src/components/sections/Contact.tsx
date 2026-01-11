"use client";

import { motion } from "framer-motion";
import { Instagram, Linkedin, Twitter } from "lucide-react";
import Magnetic from "../ui/Magnetic";

export default function Contact() {
    return (
        <section id="contact" className="py-24 px-6 relative overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-purple/20 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-4xl mx-auto relative z-10">
                <motion.h2
                    className="text-4xl md:text-6xl font-bold mb-12 text-center"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                >
                    LET'S <span className="text-brand-cyan">CREATE</span> TOGETHER
                </motion.h2>

                <div className="glass-card p-8 md:p-12 mb-12">
                    <form className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-400">Name</label>
                                <input type="text" className="w-full bg-white/5 border border-white/10 rounded-lg p-3 focus:outline-none focus:border-brand-cyan transition-colors" placeholder="John Doe" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-400">Email</label>
                                <input type="email" className="w-full bg-white/5 border border-white/10 rounded-lg p-3 focus:outline-none focus:border-brand-cyan transition-colors" placeholder="john@example.com" />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-400">Message</label>
                            <textarea rows={4} className="w-full bg-white/5 border border-white/10 rounded-lg p-3 focus:outline-none focus:border-brand-cyan transition-colors" placeholder="Tell us about your project..." />
                        </div>
                        <div className="flex justify-center">
                            <Magnetic>
                                <button className="px-8 py-3 bg-white text-black font-bold rounded-full hover:bg-brand-cyan transition-colors">
                                    Send Message
                                </button>
                            </Magnetic>
                        </div>
                    </form>
                </div>

                <div className="flex justify-center gap-8">
                    {[
                        { icon: Instagram, href: "#" },
                        { icon: Linkedin, href: "#" },
                        { icon: Twitter, href: "#" }, /* Using Twitter as proxy for Behance or similar if not in Lucide regular set commonly used, or just Generic. Lucide has generic? Lucide has Behance? I'll check. Behance might not be in basic lucide imports I usually get. I'll use Twitter for now or check map. */
                    ].map((social, i) => (
                        <Magnetic key={i}>
                            <a href={social.href} className="p-4 bg-white/5 rounded-full hover:bg-white/20 transition-colors">
                                <social.icon className="w-6 h-6" />
                            </a>
                        </Magnetic>
                    ))}
                </div>
            </div>
        </section>
    );
}
