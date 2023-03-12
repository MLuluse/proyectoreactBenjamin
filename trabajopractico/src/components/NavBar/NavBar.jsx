import './navbar.css'
import CartWidget from "../CartWidget/CartWidget";
import Logo from '../Logo/Logo';


function NavBar(props){
    return(
        <nav className='navbar'>

            <Logo logo="imgs/movie-night.png"/>

            <ul className="ul-navbar">
                
                <li className="ul-li">
                    <a className="ul-li-a" href="Inicio">Inicio</a>
                </li>
                <li className="ul-li">
                    <a className="ul-li-a" href="Comedias">Comedias</a>
                </li>
                <li className="ul-li">
                    <a className="ul-li-a" href="Terror">Terror</a>
                </li>
                <li className="ul-li">
                    <a className="ul-li-a" href="Drama">Drama</a>
                </li>
                <li className="ul-li">
                    <a className="ul-li-a" href="Documentales">Documentales</a>
                </li>
                
            </ul>

            <CartWidget img ="/imgs/carrito-neon.jpg"/>

        </nav>
    )


}




export default NavBar;