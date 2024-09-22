import React, { useEffect, useState } from 'react';
import '../App.css'; 
import imgSaray1 from '../assets/Imagenes/imgSaray1.jpg';
import imgSaray2 from '../assets/Imagenes/imgSaray2.jpg';
import imgSaray3 from '../assets/Imagenes/imgSaray3.jpg';

const images = [imgSaray1, imgSaray2, imgSaray3];

function Header() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3500);
        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <header className="relative flex flex-col items-center justify-center h-screen mb-12 overflow-hidden">
                {/* Título principal */}
                <div className="relative z-30 text-center text-white bg-opacity-50 p-4 rounded-xl">
                    <h2 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold drop-shadow-xl font-serif'>
                        Boda de los Reyes Católicos
                    </h2>
                </div>

                {/* Subtítulo */}
                <div className="relative z-30 text-center text-white bg-opacity-50 p-2 mt-4 rounded-xl">
                    <p className='text-sm sm:text-xl md:text-lg lg:text-xl xl:text-3xl font-serif'>
                        ¡Estás invitado a celebrar el matrimonio de Isabel y Fernando!
                    </p>
                </div>

                {/* Imagen de fondo con cambio automático */}
                <img
                    src={images[currentImageIndex]}
                    alt="Fondo de la boda"
                    className="absolute z-10 w-auto min-w-full min-h-full max-w-none object-cover brightness-75 transition-opacity duration-500 ease-in-out"
                />
            </header>
        </>
    );
}

export default Header;
