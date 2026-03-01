'use client';

import { Canvas } from '@react-three/fiber';
import { Suspense, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Scene from './Scene';
import { ArrowRight } from 'lucide-react';

const cursorVariants = {
    blinking: {
        opacity: [0, 0, 1, 1],
        transition: {
            duration: 1,
            repeat: Infinity,
            repeatDelay: 0,
            times: [0, 0.5, 0.5, 1]
        }
    }
};

const TypingEffect = ({ text, delay = 0, showCursor = true }: { text: string, delay?: number, showCursor?: boolean }) => {
    const [isDone, setIsDone] = useState(false);

    useEffect(() => {
        if (!showCursor) return;
        const totalTime = (delay + text.length * 0.1) * 1000;
        const timer = setTimeout(() => setIsDone(true), totalTime);
        return () => clearTimeout(timer);
    }, [delay, text, showCursor]);

    return (
        <span className="inline-block">
            {text.split("").map((char, index) => (
                <motion.span
                    key={index}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                        duration: 0.1,
                        delay: delay + index * 0.1,
                        ease: "easeInOut"
                    }}
                >
                    {char}
                </motion.span>
            ))}
            {showCursor && isDone && (
                <motion.span
                    variants={cursorVariants}
                    animate="blinking"
                    className="inline-block w-3 h-8 md:h-12 bg-blue-500 ml-1 align-bottom"
                />
            )}
        </span>
    );
};

export default function Hero() {
    return (
        <section className="relative w-full min-h-screen flex flex-col md:flex-row items-center justify-center overflow-hidden bg-zinc-950 pt-20 md:pt-0">

            {/* Text Content - Order 2 on mobile (bottom), Order 1 on desktop (left) */}
            <div className="z-10 w-full md:w-1/2 px-8 md:px-20 py-10 md:py-0 flex flex-col items-center md:items-start text-center md:text-left">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="mb-6 font-pixel text-4xl md:text-6xl font-bold tracking-tight">
                        <TypingEffect text="Impresión 3D" showCursor={false} />
                        <br />
                        <span className="text-blue-400">
                            <TypingEffect text="Hecha Realidad." delay={1.5} />
                        </span>
                    </div>
                    <p className="text-zinc-400 text-lg md:text-xl max-w-lg mb-8 leading-relaxed">
                        Transformá tus ideas en objetos tangibles con precisión y materiales de alta calidad.
                    </p>

                    <a
                        href="https://wa.me/5493813279702"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-full font-medium transition-all hover:bg-blue-500 shadow-lg shadow-blue-900/20 mx-auto md:mx-0"
                    >
                        Cotizá tu proyecto
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </a>
                </motion.div>
            </div>

            {/* 3D Scene - Order 1 on mobile (top), Order 2 on desktop (right) */}
            <div className="w-full h-[40vh] md:h-full md:w-1/2 relative md:absolute md:right-0 md:top-0">
                <Canvas className="w-full h-full">
                    <Suspense fallback={null}>
                        <Scene />
                    </Suspense>
                </Canvas>
                {/* Soft gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-l from-zinc-950 via-transparent to-transparent pointer-events-none" />
            </div>

        </section>
    );
}
