import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                'space-black': '#0a0a0a',
                'neon-cyan': '#00f2fe',
                'electric-purple': '#7000ff',
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },
            animation: {
                'float': 'float 6s ease-in-out infinite',
                'glow': 'glow 2s ease-in-out infinite alternate',
                'slide-up': 'slide-up 0.6s ease-out',
                'slide-down': 'slide-down 0.6s ease-out',
                'fade-in': 'fade-in 0.6s ease-out',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0px) rotateX(0deg) rotateY(0deg)' },
                    '50%': { transform: 'translateY(-20px) rotateX(10deg) rotateY(10deg)' },
                },
                glow: {
                    '0%': { boxShadow: '0 0 20px rgba(0, 242, 254, 0.5), 0 0 40px rgba(112, 0, 255, 0.3)' },
                    '100%': { boxShadow: '0 0 40px rgba(0, 242, 254, 0.8), 0 0 80px rgba(112, 0, 255, 0.5)' },
                },
                'slide-up': {
                    '0%': { transform: 'translateY(100px)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' },
                },
                'slide-down': {
                    '0%': { transform: 'translateY(-100px)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' },
                },
                'fade-in': {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
            },
        },
    },
    plugins: [],
};
export default config;
