'use client';

import Image from 'next/image';
import { Mail, Instagram, Twitter, Phone } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="w-full bg-zinc-950 border-t border-zinc-900 pt-16 pb-8" id="contacto">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    <div className="col-span-1 md:col-span-2">
                        <div className="flex items-center gap-0 mb-4 -ml-4 md:ml-0">
                            <div className="w-[85px] h-[85px] relative -mr-3">
                                <Image
                                    src="/logo.svg"
                                    alt="CUBO Logo"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                            <span className="text-2xl font-bold font-pixel text-white">CUBO</span>
                        </div>
                        <p className="text-zinc-500 max-w-sm -ml-4 md:ml-0">
                            Calidad, precisión y rapidez para todos tus proyectos.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-white font-semibold font-pixel mb-4">Servicios</h4>
                        <ul className="space-y-2 text-zinc-500 text-sm">
                            <li className="hover:text-white cursor-pointer transition-colors">Prototipado Rápido</li>
                            <li className="hover:text-white cursor-pointer transition-colors">Impresión 3D FDM</li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-semibold font-pixel mb-4">Contacto</h4>
                        <ul className="space-y-4 text-zinc-500 text-sm">
                            <li className="flex items-center gap-2">
                                <Mail className="w-4 h-4" />
                                <a href="mailto:hola@cube.live" className="hover:text-white transition-colors select-text">
                                    hola@cubo.live
                                </a>
                            </li>
                            <li className="flex items-center gap-2">
                                <Instagram className="w-4 h-4" />
                                <a href="https://instagram.com/cube.live" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors select-text">
                                    @cubo.live
                                </a>
                            </li>
                            <li className="flex items-center gap-2">
                                <Phone className="w-4 h-4" />
                                <a href="https://wa.me/5493813279702?text=Hola,%20me%20gustaría%20consultar%20para%20un%20proyecto,%20¿están%20disponibles?" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors select-text">
                                    +54 9 381 327-9702
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-zinc-900 pt-8 flex flex-col md:flex-row justify-between items-center text-zinc-600 text-sm">
                    <p>&copy; 2026 CUBO. Todos los derechos reservados.</p>
                </div>
            </div>
        </footer>
    );
}
