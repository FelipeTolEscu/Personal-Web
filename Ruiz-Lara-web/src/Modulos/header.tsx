import '../App.css';
import imgPersonal from '../assets/personal-photo.jpg';
import videoHeader from '../assets/Video/VideoPortafolio.mp4';

function Header() {
    return (
        <>
            <div className="navbar bg-transparent absolute w-full z-50">
                <div className="navbar-start">
                    <img src={imgPersonal} alt="Logo" className="w-16 sm:w-20 md:w-24 lg:w-32 xl:w-40 rounded-full p-4" />
                </div>
                <div className="navbar-end">
                    <div className="dropdown dropdown-end shadow-black shadow-sm rounded-full bg-slate-400 dark:bg-slate-400">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-12 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 md:flex md:flex-row">
                            <li><a>Inicio</a></li>
                            <li><a>Proyectos</a></li>
                            <li><a>Contacto</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <header className="relative flex flex-col items-center justify-center h-screen mb-12 overflow-hidden">
                <div className="relative z-30 pr-40 pl-40 text-center text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-white dark:text-white bg-opacity-50 rounded-xl align-middle">
                    <h2 className='drop-shadow-xl shadow-black'>Felipe Toledano Escudero</h2>
                </div>

                <div className="relative z-30 pr-10 pl-10 text-center text-sm sm:text-xl md:text-lg lg:text-xl xl:text-3xl text-white bg-opacity-50 rounded-xl">
                    Junior front end developer
                </div>
                <video
                    autoPlay
                    loop
                    muted
                    className="absolute z-10 w-auto min-w-full min-h-full max-w-none opacity-40"
                >
                    <source
                        src={videoHeader}
                        type="video/mp4"
                    />
                    Your browser does not support the video tag.
                </video>
            </header>
        </>
    )
}

export default Header;
