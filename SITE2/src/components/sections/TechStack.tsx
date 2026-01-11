"use client";

import { motion } from "framer-motion";

const techStack = [
    { name: "Photoshop", icon: "https://cdn.simpleicons.org/adobephotoshop/31A8FF" },
    { name: "Illustrator", icon: "https://cdn.simpleicons.org/adobeillustrator/FF9A00" },
    { name: "Figma", icon: "https://cdn.simpleicons.org/figma/F24E1E" },
    { name: "Premiere Pro", icon: "https://cdn.simpleicons.org/adobepremierepro/9999FF" },
    { name: "Next.js", icon: "https://cdn.simpleicons.org/nextdotjs/white" },
    { name: "Three.js", icon: "https://cdn.simpleicons.org/threedotjs/white" },
];

export default function TechStack() {
    return (
        <section id="tech" className="py-24 px-6 bg-black/50">
            <div className="max-w-5xl mx-auto text-center">
                <motion.h2
                    className="text-3xl md:text-5xl font-bold mb-16 tracking-tight"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    POWERED BY <span className="text-gray-500">MODERN TOOLS</span>
                </motion.h2>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
                    {techStack.map((tech, index) => (
                        <motion.div
                            key={tech.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -10 }}
                            className="flex flex-col items-center gap-4 p-6 glass rounded-2xl border border-white/5 hover:border-brand-cyan/30 transition-colors"
                        >
                            <img
                                src={tech.icon}
                                alt={tech.name}
                                className="w-12 h-12"
                            />
                            <span className="font-medium text-sm text-gray-400">{tech.name}</span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
