import '../App.css'

//Import's
import DesarrolloIng from '../assets/Imagenes/desarrolloIng.jpg' 
import ProyectosIng from '../assets/Imagenes/proyectosIng.webp' 

function tablePanel() {
    return (
        <>
            <section className='whitheSection flex justify-center items-center'>
                <div className="container p-4 sm:p-10 py-8 w-full">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="bg-white rounded-lg p-4 sm:p-8 h-full shadow-2xl">
                            <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-gray-800">Video de nuestras Instalaciones</h2>
                            <div className="video-container">
                                <iframe
                                    src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                                    title="YouTube video player"
                                    className="w-full h-48 sm:h-72"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                ></iframe>
                            </div>
                        </div>

                        <div className="bg-white rounded-lg p-4 sm:p-8 h-full shadow-2xl">
                            <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-gray-800">El mejor desarrollo</h2>
                            <img src={ProyectosIng} alt="Descripción de la imagen" className="w-full h-48 sm:h-72 object-cover" />
                        </div>
                        <div className="bg-white rounded-lg p-4 sm:p-8 h-full shadow-2xl">
                            <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-gray-800">Imagenes Proyectos</h2>
                            <img src={DesarrolloIng} alt="Descripción de la imagen" className="w-full h-48 sm:h-72 object-cover" />
                        </div>
                        <div className="bg-white rounded-lg p-4 sm:p-8 h-full shadow-2xl">
                            <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-gray-800">Video de nuestros proyectos</h2>
                            <div className="video-container">
                                <iframe
                                    src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                                    title="YouTube video player"
                                    className="w-full h-48 sm:h-72"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                ></iframe>
                            </div>
                        </div>

                        
                    </div>
                </div>
            </section>
        </>
    );
}

export default tablePanel;
