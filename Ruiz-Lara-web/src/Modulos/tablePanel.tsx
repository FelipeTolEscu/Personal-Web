//CSS Import
import '../App.css'

//Import's
import DesarrolloIng from '../assets/Imagenes/desarrolloIng.jpg'
import ProyectosIng from '../assets/Imagenes/proyectosIng.webp'
import HouseIcon from '../assets/Imagenes/houseIcon.png'

function tablePanel() {

    //Video's
    const youtubeVideoUrl = "https://www.youtube.com/embed/dQw4w9WgXcQ"

    const ButtonComponent = () => (
        <div className="flex justify-center items-center p-4">
            <button
                className="overflow-hidden w-auto p-2 h-12 bg-black text-white border-none rounded-md text-xl font-bold cursor-pointer relative z-10 group"
            >
                Nuestros Proyectos !
                <span
                    className="absolute w-60 h-32 -top-8 -left-2 bg-green-200 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-500 duration-1000 origin-bottom"
                ></span>
                <span
                    className="absolute w-56 h-32 -top-8 -left-2 bg-green-400 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-700 duration-700 origin-bottom"
                ></span>
                <span
                    className="absolute w-52 h-32 -top-8 -left-2 bg-green-600 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-1000 duration-500 origin-bottom"
                ></span>
                <span
                    className="group-hover:opacity-100 group-hover:duration-1000 duration-100 opacity-0 absolute top-2.5 left-6 z-10"
                >
                    Justo Aquí !
                </span>
            </button>
        </div>
    );

    const VideoComponent = () => (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pb-8">
            <div className="bg-white rounded-lg p-4 sm:p-8 h-full shadow-2xl">
                <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-gray-800">Video de nuestras Instalaciones</h2>
                <div className="video-container">
                    <iframe
                        src={youtubeVideoUrl}
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
                        src={youtubeVideoUrl}
                        title="YouTube video player"
                        className="w-full h-48 sm:h-72"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    ></iframe>
                </div>
            </div>
        </div>
    );

    const GreenPanel = () => (
        <div className="p-4 text-center">
            <div>
                <h1 className="text-5xl text-white">Nuestros Servicios</h1>
            </div>
            <div className="flex flex-wrap">
                {/* Columna izquierda */}
                <div className="w-full md:w-1/2 lg:w-2/3 flex justify-start items-center p-8 text-white">
                    <div className="flex items-center space-x-2">
                        <img src={HouseIcon} alt="House" className="h-20" />
                        <h2 className="text-3xl">Servicios de ingeniería de instalaciones</h2>
                    </div>
                </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-2/3 flex justify-start items-center p-8 text-white">
                <div className="flex items-center space-x-2">
                    <img src={HouseIcon} alt="House" className="h-20" />
                    <h2 className="text-3xl">Servicios de ingeniería de instalaciones</h2>
                </div>
                
            </div>
             {/* Columna derecha */}
                <div className="w-full md:w-1/2 lg:w-1/3 flex justify-start items-center p-8 text-white">
                    <h2 className="text-3xl">Los desafíos técnicos se afrontan con ayuda profesional
                        Expertos altamente cualificados y con años de experiencia, ponen toda la atención para que tu proyecto cumpla con los objetivos que esperas.</h2>
                </div>
            <div className="w-full md:w-1/2 lg:w-2/3 flex justify-start items-center p-8 text-white">
                <div className="flex items-center space-x-2">
                    <img src={HouseIcon} alt="House" className="h-20" />
                    <h2 className="text-3xl">Servicios de ingeniería de instalaciones</h2>
                </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-2/3 flex justify-start items-center p-8 text-white">
                <div className="flex items-center space-x-2">
                    <img src={HouseIcon} alt="House" className="h-20" />
                    <h2 className="text-3xl">Servicios de ingeniería de instalaciones</h2>
                </div>
            </div>
        </div>
    );



    return (
        <>
            <section className='whitheSection flex justify-center items-center'>
                <div className="container p-4 sm:p-10 py-8 w-full">
                    <VideoComponent />
                    <ButtonComponent />
                </div>
            </section>
            <section className='greenSection flex justify-center items-center'>
                <div className="container p-4 sm:p-10 py-8 w-full">
                    <GreenPanel />
                </div>
            </section>
        </>
    );
}

export default tablePanel;