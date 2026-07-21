import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const NotFound = () => {
    const canvasRef = useRef(null);

    // Efecto de lluvia "Matrix" en el Canvas
    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        
        let width = canvas.width = window.innerWidth;
        let height = canvas.height = window.innerHeight;

        // Caracteres estilo Tech / Código
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()_+-=<>?'.split('');
        
        const fontSize = 14;
        let columns = width / fontSize;
        let drops = [];

        for (let x = 0; x < columns; x++) {
            drops[x] = 1;
        }

        const draw = () => {
            // Fondo semi-transparente para crear el efecto de desvanecimiento de las letras
            ctx.fillStyle = 'rgba(15, 23, 42, 0.05)';
            ctx.fillRect(0, 0, width, height);

            // Color del texto (Azul metálico sutilmente opaco)
            ctx.fillStyle = 'rgba(96, 165, 250, 0.35)'; 
            ctx.font = `${fontSize}px monospace`;

            for (let i = 0; i < drops.length; i++) {
                const text = characters[Math.floor(Math.random() * characters.length)];
                ctx.fillText(text, i * fontSize, drops[i] * fontSize);

                if (drops[i] * fontSize > height && Math.random() > 0.975) {
                    drops[i] = 0;
                }
                drops[i]++;
            }
        };

        let animationFrameId;

        const renderFrame = () => {
            draw();
            animationFrameId = requestAnimationFrame(renderFrame);
        };

        renderFrame();

        const handleResize = () => {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
            columns = width / fontSize;
            drops = [];
            for (let x = 0; x < columns; x++) {
                drops[x] = 1;
            }
        };

        window.addEventListener('resize', handleResize);

        return () => {
            cancelAnimationFrame(animationFrameId);
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className="min-h-screen bg-[#0f172a] flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden relative">
            
            {/* Canvas Background */}
            <canvas 
                ref={canvasRef} 
                className="absolute inset-0 z-0 pointer-events-none"
            />

            {/* Overlay para oscurecer un poco más el centro y dar legibilidad */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#0f172a]/60 via-[#0f172a]/80 to-[#0f172a] z-0 pointer-events-none"></div>

            {/* Contenido Principal */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="text-center z-10 max-w-2xl relative"
            >
                <motion.h1
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                    className="text-[8rem] sm:text-[14rem] font-black text-white leading-none tracking-tighter"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                >
                    404
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="mt-2 sm:mt-6 text-xl sm:text-2xl text-[#ADB3B2] font-medium tracking-wide"
                >
                    Parece que te has perdido.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.7 }}
                    className="mt-12"
                >
                    <Link
                        to="/"
                        className="inline-flex items-center justify-center px-8 py-3.5 border border-transparent text-base font-semibold rounded-md text-slate-900 bg-[#60A5FA] hover:bg-white transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#0f172a] focus:ring-[#60A5FA] shadow-[0_0_20px_rgba(96,165,250,0.3)] hover:shadow-[0_0_25px_rgba(255,255,255,0.4)]"
                    >
                        Regresar al inicio
                    </Link>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default NotFound;
