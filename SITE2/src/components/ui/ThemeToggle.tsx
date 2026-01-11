"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ThemeToggle() {
    const { theme, toggleTheme } = useTheme();
    const [isAnimating, setIsAnimating] = useState(false);

    // We'll use a separate overlay for the animation to avoid z-index wars with the button itself
    const [clipPath, setClipPath] = useState("circle(0% at 0 0)");
    const [clickPos, setClickPos] = useState({ x: 0, y: 0 });

    const handleToggle = (e: React.MouseEvent) => {
        if (isAnimating) return;

        const rect = (e.target as HTMLElement).closest("button")?.getBoundingClientRect();
        const x = e.clientX;
        const y = e.clientY;

        setClickPos({ x, y });
        setIsAnimating(true);

        // Start animation
        // We want the new theme to "grow" from the cursor.
        // Because we are changing global state, the whole app re-renders. 
        // To make it smooth, we can:
        // 1. Take a screenshot? (Too complex for simple react)
        // 2. Use `document.startViewTransition` if available (Native, but might not be supported everywhere yet).
        // 3. Fallback: Simple circle expansion overlay.

        if (document.startViewTransition) {
            document.startViewTransition(() => {
                toggleTheme();
            });
            setIsAnimating(false);
            return;
        }

        // Fallback or "Liquid" implementation if viewTransition API isn't desired default (User asked for Liquid Transition specifically).
        // ViewTransition API is the standard for "Liquid" / "Clip" transitions now.
        // Let's try to simulate liquid if we can, or use viewTransition.
        // Given the prompt "Liquid Transition Animation", standard CSS clip-path animation is best.

        toggleTheme();
    };

    // Specialized Liquid Effect using View Transitions API (Chrome 111+) because it is the most performant "Liquid" effect.
    // If we want a manual one, we need to duplicate the DOM or use a full-screen overlay that fades out.
    // Re-reading: "use a smooth liquid transition animation". 

    useEffect(() => {
        if (!document.startViewTransition) return;
        // Add css for view transition
        const style = document.createElement('style');
        style.innerHTML = `
       ::view-transition-old(root),
       ::view-transition-new(root) {
         animation: none;
         mix-blend-mode: normal;
       }
       ::view-transition-group(root) {
         animation-duration: 1s;
       }
       .dark::view-transition-old(root) {
         z-index: 1;
       }
       .dark::view-transition-new(root) {
         z-index: 999;
       }
       ::view-transition-old(root) {
         z-index: 999;
       }
       ::view-transition-new(root) {
         z-index: 1;
       }
     `;
        document.head.appendChild(style);
        return () => {
            document.head.removeChild(style);
        };
    }, []);

    return (
        <button
            onClick={(e) => {
                // Custom liquid implementation logic using View Transitions
                if (!document.startViewTransition) {
                    toggleTheme();
                    return;
                }

                const x = e.clientX;
                const y = e.clientY;

                const endRadius = Math.hypot(
                    Math.max(x, innerWidth - x),
                    Math.max(y, innerHeight - y)
                );

                const transition = document.startViewTransition(() => {
                    toggleTheme();
                });

                transition.ready.then(() => {
                    const clipPath = [
                        `circle(0px at ${x}px ${y}px)`,
                        `circle(${endRadius}px at ${x}px ${y}px)`,
                    ];

                    document.documentElement.animate(
                        {
                            clipPath: theme === 'dark' ? clipPath.reverse() : clipPath,
                        },
                        {
                            duration: 500,
                            easing: "ease-in-out",
                            pseudoElement: theme === 'dark' ? "::view-transition-old(root)" : "::view-transition-new(root)",
                        }
                    );
                });
            }}
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors relative overflow-hidden"
            aria-label="Toggle Theme"
        >
            <AnimatePresence mode="wait" initial={false}>
                <motion.div
                    key={theme}
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 20, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                >
                    {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
                </motion.div>
            </AnimatePresence>
        </button>
    );
}
