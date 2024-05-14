import '../App.css';

function tablePanel() {
    return (
        <>
            <section className='whitheSection flex justify-center items-center'>
                <div className="container p-10 py-8 w-auto">
                    <div className="grid grid-cols-2 gap-6">
                        <div className="bg-white rounded-lg p-6 h-auto shadow-2xl">
                            <h2 className="text-xl font-semibold mb-2">Video de nuestras Instalaciones</h2>
                            <div className="video-container">
                                <iframe 
                                    src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
                                    title="YouTube video player" 
                                 
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                ></iframe>
                            </div>
                        </div>

                        <div className="bg-white rounded-lg p-6 shadow-2xl">
                            <h2 className="text-xl font-semibold mb-2">El mejor desarrollo</h2>
                            <img src="ruta/de/la/imagen.jpg" alt="Descripción de la imagen" className="w-full"/>
                        </div>

                        <div className="bg-white rounded-lg h-auto p-6 shadow-2xl">
                            <h2 className="text-xl font-semibold mb-2">Video de nuestros proyectos</h2>
                            <div className="video-container">
                                <iframe 
                                    src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
                                    title="YouTube video player"  
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                ></iframe>
                            </div>
                        </div>

                        <div className="bg-white rounded-lg p-6 shadow-2xl">
                            <h2 className="text-xl font-semibold mb-2">Imagenes Proyectos</h2>
                            <img src="ruta/de/la/imagen.jpg" alt="Descripción de la imagen" className="w-full"/>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default tablePanel;
