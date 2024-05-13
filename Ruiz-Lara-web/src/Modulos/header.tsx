import '../App.css'
import imagenLogo from '../assets/Logo-1.png'
function Header() {
    return (
        <>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <img src={imagenLogo} className='max-w-20' alt="Logo Ruiz Lara" />
                </div>
                <div className="navbar-end">
                    <div className="dropdown">
                        
                        <ul tabIndex={0} className="menu menu-horizontal bg-transparent text-sm text-white mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-auto">
                            <li><a>Inicio</a></li>
                            <li><a>Nuestro Estudio</a></li>
                            <li><a>Proyectos</a></li>
                            <li><a>Blog</a></li>
                            <li><a>Contacto</a></li>
                            <li><a>¿Quiénes somos?</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <header className="relative flex items-center justify-center h-screen mb-12 overflow-hidden">
                <div
                    className="relative z-30 p-5 text-6xl text-white bg-opacity-50 rounded-xl"
                >
                    RUIZ LARA INGENIERÍA
                </div>
                <video
                    autoPlay
                    loop
                    muted
                    className="absolute z-10 w-auto min-w-full min-h-full max-w-none"
                >
                    <source
                        src="https://assets.mixkit.co/videos/preview/mixkit-set-of-plateaus-seen-from-the-heights-in-a-sunset-26070-large.mp4"
                        type="video/mp4"
                    />
                    Your browser does not support the video tag.
                </video>
            </header>
        </>
    )
}

export default Header;
