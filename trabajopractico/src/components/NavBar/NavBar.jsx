import './navbar.css'
import CartWidget from "../CartWidget/CartWidget";
import Logo from '../Logo/Logo';
import {Link} from 'react-router-dom'


function NavBar(props){
    return(
        <nav className='navbar'>
            <Link to="/">
            <Logo logo="imgs/movie-night.png"/> 
            </Link>


            <ul className="ul-navbar">
                
                <li className="ul-li">
                    <Link to="/" >Inicio</Link>
                </li>
                <li className="ul-li">
                    <Link to="/category/comedia" >Comedias</Link>
                </li>
                <li className="ul-li">
                    <Link to="/category/terror" >Terror</Link>
                </li>
                <li className="ul-li">
                    <Link to="/category/drama" >Drama</Link>
                </li>
                <li className="ul-li">
                    <Link to="/category/documental"  >Documentales</Link>
                </li>
                
            </ul>
            <Link to="Cart">
            <CartWidget img ="/imgs/carrito-neon.jpg"/>
            </Link>

        </nav>
    )


}




export default NavBar;