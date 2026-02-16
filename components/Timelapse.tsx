'use client';

export default function Timelapse() {
    return (
        <section className="w-full py-24 bg-zinc-950 relative overflow-hidden" id="proceso">
            {/* Background decoration - reduced blue saturation */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-zinc-800/20 rounded-full blur-3xl opacity-50" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-zinc-800/20 rounded-full blur-3xl opacity-50" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="mb-12 text-center">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-b from-white to-zinc-500">
                        El Proceso en Acción
                    </h2>
                    <p className="text-zinc-400 max-w-2xl mx-auto">
                        Observa cómo las capas cobran vida. Tecnología FDM trabajando para crear piezas únicas.
                    </p>
                </div>

                {/* Video Container */}
                <div className="relative w-full max-w-5xl mx-auto aspect-video rounded-2xl overflow-hidden bg-zinc-900 border border-zinc-800 shadow-2xl group cursor-pointer">
                    <video
                        src="/portfolio/timelapse.mp4"
                        className="w-full h-full object-cover"
                        controls
                        muted
                        playsInline
                    >
                        Your browser does not support the video tag.
                    </video>
                </div>
            </div>
        </section>
    );
}
