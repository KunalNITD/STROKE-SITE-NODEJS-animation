"use client";

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface BentoGridProps {
    children: ReactNode;
    className?: string;
}

interface BentoItemProps {
    children: ReactNode;
    className?: string;
    size?: 'small' | 'medium' | 'large';
}

export function BentoGrid({ children, className = '' }: BentoGridProps) {
    return (
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ${className}`}>
            {children}
        </div>
    );
}

export function BentoItem({ children, className = '', size = 'medium' }: BentoItemProps) {
    const sizeClasses = {
        small: 'col-span-1',
        medium: 'md:col-span-1',
        large: 'md:col-span-2',
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className={`glass-card p-6 ${sizeClasses[size]} ${className}`}
        >
            {children}
        </motion.div>
    );
}
