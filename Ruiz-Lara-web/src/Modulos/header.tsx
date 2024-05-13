import '../App.css'
import imagenLogo from '../assets/Logo-1.png'
function Header() {
    return (
        <>
            <div className="navbar bg-base-100 border-b-2">
                <div className="navbar-start">
                    <img src={imagenLogo} className='max-w-20' alt="Logo Ruiz Lara" />
                </div>
                <div className="navbar-end">
                    <div className="dropdown">
                        
                        <ul tabIndex={0} className="menu menu-horizontal right-0 mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-auto">
                            <li><a>Inicio</a></li>
                            <li><a>Nuestro Estudio</a></li>
                            <li><a>Proyectos</a></li>
                            <li><a>Blog</a></li>
                            <li><a>Contacto</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header;
