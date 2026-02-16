'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, ExternalLink, X } from 'lucide-react';

const items = [
    {
        id: 1,
        title: 'Hogar y Deco',
        category: 'Decoración',
        color: 'bg-zinc-800',
        desc: 'Objetos únicos para personalizar tus espacios.',
        gallery: [
            '/portfolio/hogar_y_deco/174077132978980600-67c21001c0d3_thumbnail.webp',
            '/portfolio/hogar_y_deco/174077132979675200-67c21001c285_thumbnail.webp',
            '/portfolio/hogar_y_deco/174077284231672100-67c215ea4d53_thumbnail.webp',
            '/portfolio/hogar_y_deco/174077284258322400-67c215ea8e63_thumbnail.webp',
            '/portfolio/hogar_y_deco/174077284294755300-67c215eae756_thumbnail.webp',
            '/portfolio/hogar_y_deco/174077284358964300-67c215eb8ff5_thumbnail.webp',
            '/portfolio/hogar_y_deco/174077684033164500-67c2258850f8_thumbnail.webp',
            '/portfolio/hogar_y_deco/174077684065914200-67c22588a0ec_thumbnail.webp',
            '/portfolio/hogar_y_deco/174077925475994400-67c22ef6b988_thumbnail.webp',
            '/portfolio/hogar_y_deco/174077925481015400-67c22ef6c5cb_thumbnail.webp',
            '/portfolio/hogar_y_deco/174077925483966500-67c22ef6ccff_thumbnail.webp'
        ]
    },
    {
        id: 2,
        title: 'Llaveros y Escudos',
        category: 'Personalizados',
        color: 'bg-zinc-700',
        desc: 'Detalles a medida para llevarlos a todos lados.',
        gallery: [
            '/portfolio/llaveros_y_escudos/2024-03-27_25fecea9bb86d.webp',
            '/portfolio/llaveros_y_escudos/2025-12-16_6bdecacd49156.webp',
            '/portfolio/llaveros_y_escudos/2025-12-30_768abee536ca98.webp'
        ]
    },
    {
        id: 3,
        title: 'Articulados',
        category: 'Juguetes',
        color: 'bg-zinc-800',
        desc: 'Figuras móviles y divertidas impresas en una sola pieza.',
        gallery: [
            '/portfolio/articulados/173393646040587400-6759c54c6317_thumbnail.webp',
            '/portfolio/articulados/176738150670815700-69581a02ace4.webp'
        ]
    },
    {
        id: 4,
        title: 'Figuras',
        category: 'Coleccionables',
        color: 'bg-zinc-700',
        desc: 'Personajes y estatuillas con alto nivel de detalle.',
        gallery: [
            '/portfolio/figuras/175088436979759800-685c6011c2ba_thumbnail.webp',
            '/portfolio/figuras/175088436987541900-685c6011d5ba_thumbnail.webp',
            '/portfolio/figuras/175088437001745100-685c60120443_thumbnail.webp',
            '/portfolio/figuras/175088437001849100-685c60120484_thumbnail.webp'
        ]
    },
    {
        id: 5,
        title: 'Gadgets',
        category: 'Tecnología',
        color: 'bg-zinc-800',
        desc: 'Accesorios funcionales e innovadores para tu día a día.',
        gallery: [
            '/portfolio/gadgets/171683355228344200-6654cd104533_thumbnail.webp',
            '/portfolio/gadgets/171683355233630700-6654cd10521b_thumbnail.webp'
        ]
    },
    {
        id: 6,
        title: 'Herramientas y Accesorios',
        category: 'Herramientas',
        color: 'bg-zinc-700',
        desc: 'Soluciones prácticas y resistentes para el taller o el hogar.',
        gallery: [
            '/portfolio/herramientas_y_accesorios/1.webp'
        ]
    }
];

export default function Portfolio() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0);
    const [selectedItem, setSelectedItem] = useState<(typeof items)[0] | null>(null);

    const paginate = useCallback((newDirection: number) => {
        setDirection(newDirection);
        setCurrentIndex((prevIndex) => {
            let nextIndex = prevIndex + newDirection;
            if (nextIndex < 0) nextIndex = items.length - 1;
            if (nextIndex >= items.length) nextIndex = 0;
            return nextIndex;
        });
    }, []);

    useEffect(() => {
        if (selectedItem) return; // Pause auto-slide when modal is open
        const timer = setInterval(() => {
            paginate(1);
        }, 5000);
        return () => clearInterval(timer);
    }, [paginate, selectedItem]);

    const variants = {
        enter: (direction: number) => ({
            x: direction > 0 ? 1000 : -1000,
            opacity: 0
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1
        },
        exit: (direction: number) => ({
            zIndex: 0,
            x: direction < 0 ? 1000 : -1000,
            opacity: 0
        })
    };

    const currentItem = items[currentIndex];

    // Modal Gallery State
    const [modalImageIndex, setModalImageIndex] = useState(0);
    const [modalDirection, setModalDirection] = useState(0);

    useEffect(() => {
        if (selectedItem) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
            setModalDirection(0);
        }
    }, [selectedItem]);

    const paginateModal = (newDirection: number) => {
        if (!selectedItem) return;
        setModalDirection(newDirection);
        setModalImageIndex((prevIndex) => {
            let nextIndex = prevIndex + newDirection;
            if (nextIndex < 0) nextIndex = selectedItem.gallery.length - 1;
            if (nextIndex >= selectedItem.gallery.length) nextIndex = 0;
            return nextIndex;
        });
    };

    const nextModalImage = (e: React.MouseEvent) => {
        e.stopPropagation();
        paginateModal(1);
    };

    const prevModalImage = (e: React.MouseEvent) => {
        e.stopPropagation();
        paginateModal(-1);
    };

    return (
        <section className="w-full py-24 bg-black text-white overflow-hidden" id="trabajos">
            <div className="container mx-auto px-6">
                <div className="mb-16 text-center">
                    <h2 className="text-3xl md:text-5xl font-bold font-pixel bg-clip-text text-transparent bg-gradient-to-r from-white to-zinc-500">
                        Nuestros Trabajos
                    </h2>
                    <p className="mt-4 text-zinc-400 max-w-xl mx-auto">
                        Explorá nuestra galería de proyectos donde la precisión y la creatividad se encuentran.
                    </p>
                </div>

                <div className="relative w-full max-w-5xl mx-auto h-[600px] md:h-[500px] bg-zinc-900/50 border border-zinc-800 rounded-3xl overflow-hidden shadow-2xl backdrop-blur-sm">
                    {/* Navigation Buttons for Main Slider */}
                    <AnimatePresence initial={false} custom={direction}>
                        <motion.div
                            key={currentIndex}
                            custom={direction}
                            variants={variants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            transition={{
                                x: { type: "spring", stiffness: 300, damping: 30 },
                                opacity: { duration: 0.2 }
                            }}
                            drag="x"
                            dragConstraints={{ left: 0, right: 0 }}
                            dragElastic={1}
                            onDragEnd={(e, { offset, velocity }) => {
                                const swipe = Math.abs(offset.x) * velocity.x;
                                const swipeConfidenceThreshold = 10000;
                                if (swipe < -swipeConfidenceThreshold) {
                                    paginate(1);
                                } else if (swipe > swipeConfidenceThreshold) {
                                    paginate(-1);
                                }
                            }}
                            className="absolute inset-0 flex flex-col md:flex-row h-full w-full cursor-grab active:cursor-grabbing"
                        >
                            {/* Image Section */}
                            <div className={`w-full md:w-1/2 h-1/2 md:h-full relative overflow-hidden ${currentItem.color}`}>
                                <Image
                                    src={currentItem.gallery[0]}
                                    alt={currentItem.title}
                                    fill
                                    className="object-cover pointer-events-none"
                                    priority
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:to-black/80" />
                            </div>

                            {/* Content Section */}
                            <div className="w-full md:w-1/2 h-1/2 md:h-full p-8 pb-16 md:p-12 flex flex-col justify-center bg-zinc-900 pointer-events-none md:pointer-events-auto">
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.2 }}
                                    className="pointer-events-auto"
                                >
                                    <span className="inline-block px-3 py-1 mb-4 text-xs font-bold tracking-widest text-blue-400 uppercase bg-blue-400/10 rounded-full">
                                        {currentItem.category}
                                    </span>
                                    <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
                                        {currentItem.title}
                                    </h3>
                                    <p className="text-zinc-400 text-lg leading-relaxed mb-8">
                                        {currentItem.desc}
                                    </p>

                                    <button
                                        onClick={() => {
                                            setSelectedItem(currentItem);
                                            setModalImageIndex(0);
                                            setModalDirection(0);
                                            document.body.style.overflow = 'hidden';
                                        }}
                                        className="inline-flex items-center gap-2 text-white border-b border-white/30 pb-1 hover:border-white transition-colors group z-30 relative"
                                    >
                                        Ver más detalles
                                        <ExternalLink className="w-4 h-4 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                                    </button>
                                </motion.div>
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    {/* Progress Indicators */}
                    <div className="absolute bottom-4 left-0 right-0 z-20 flex justify-center gap-2 pointer-events-none">
                        {items.map((_, idx) => (
                            <button
                                key={idx}
                                onClick={() => {
                                    setDirection(idx > currentIndex ? 1 : -1);
                                    setCurrentIndex(idx);
                                }}
                                className={`h-1.5 rounded-full transition-all duration-300 pointer-events-auto ${idx === currentIndex ? 'w-8 bg-blue-500' : 'w-2 bg-zinc-700 hover:bg-zinc-600'
                                    }`}
                            />
                        ))}
                    </div>
                </div>
            </div>

            {/* Project Properties Modal - Full Screen Mobile, Large Desktop */}
            <AnimatePresence>
                {selectedItem && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md p-0 md:p-8"
                        onClick={() => setSelectedItem(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.95, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.95, opacity: 0 }}
                            className="bg-zinc-900 w-full h-full md:max-w-7xl md:h-[90vh] md:rounded-3xl overflow-hidden shadow-2xl relative flex flex-col md:flex-row"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                className="absolute top-4 right-4 p-3 bg-black/40 hover:bg-black/80 rounded-full text-white transition-colors z-30 backdrop-blur-sm"
                                onClick={() => setSelectedItem(null)}
                            >
                                <X className="w-6 h-6" />
                            </button>

                            {/* Modal Image Gallery - Full height on desktop, 50% on mobile */}
                            <div className="w-full h-[50vh] md:w-2/3 md:h-full relative bg-black flex items-center justify-center overflow-hidden">
                                <AnimatePresence initial={false} custom={modalDirection}>
                                    <motion.div
                                        key={modalImageIndex}
                                        custom={modalDirection}
                                        variants={variants}
                                        initial="enter"
                                        animate="center"
                                        exit="exit"
                                        transition={{
                                            x: { type: "spring", stiffness: 300, damping: 30 },
                                            opacity: { duration: 0.2 }
                                        }}
                                        drag="x"
                                        dragConstraints={{ left: 0, right: 0 }}
                                        dragElastic={1}
                                        onDragEnd={(e, { offset, velocity }) => {
                                            const swipe = Math.abs(offset.x) * velocity.x;
                                            const swipeConfidenceThreshold = 10000;
                                            if (swipe < -swipeConfidenceThreshold) {
                                                paginateModal(1);
                                            } else if (swipe > swipeConfidenceThreshold) {
                                                paginateModal(-1);
                                            }
                                        }}
                                        className="absolute inset-0 w-full h-full cursor-grab active:cursor-grabbing"
                                    >
                                        {selectedItem.gallery[modalImageIndex] ? (
                                            <Image
                                                src={selectedItem.gallery[modalImageIndex]}
                                                alt={selectedItem.title}
                                                fill
                                                className="object-contain pointer-events-none"
                                                priority
                                            />
                                        ) : null}
                                    </motion.div>
                                </AnimatePresence>

                                {/* Gallery Controls */}
                                {selectedItem.gallery.length > 1 && (
                                    <>
                                        <button
                                            onClick={prevModalImage}
                                            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-black/30 hover:bg-black/60 rounded-full text-white transition-colors backdrop-blur-sm"
                                        >
                                            <ChevronLeft className="w-6 h-6" />
                                        </button>
                                        <button
                                            onClick={nextModalImage}
                                            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-black/30 hover:bg-black/60 rounded-full text-white transition-colors backdrop-blur-sm"
                                        >
                                            <ChevronRight className="w-6 h-6" />
                                        </button>

                                        {/* Dots Indicator */}
                                        <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-3">
                                            {selectedItem.gallery.map((_, idx) => (
                                                <button
                                                    key={idx}
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        setModalImageIndex(idx);
                                                    }}
                                                    className={`w-2.5 h-2.5 rounded-full transition-all ${idx === modalImageIndex ? 'bg-white scale-110' : 'bg-white/30 hover:bg-white/50'
                                                        }`}
                                                />
                                            ))}
                                        </div>
                                    </>
                                )}
                            </div>

                            <div className="w-full h-[50vh] md:w-1/3 md:h-full overflow-y-auto bg-zinc-900 p-6 md:p-10 flex flex-col justify-center">
                                <div>
                                    <span className="text-blue-500 text-xs font-bold tracking-widest uppercase mb-3 block">
                                        {selectedItem.category}
                                    </span>
                                    <h3 className="text-2xl md:text-4xl font-bold text-white mb-6 leading-tight">
                                        {selectedItem.title}
                                    </h3>
                                    <p className="text-zinc-300 leading-relaxed text-base md:text-lg">
                                        {selectedItem.desc}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
