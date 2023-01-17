import './Navbar.css'
import CartWidget from '../CartWidget/CartWidget'
import { Link } from 'react-router-dom'
const Navbar = () => {
    return (
        <nav className='navbar'>
            <div className='headnav'>
                <Link to='/'>
                    <h1>FLOW - Tienda de Ropa</h1>
                </Link>
                <CartWidget/> 
            </div>       
            <div className='divul'>
                <ul className='ulnav'>
                    <Link to={`/category/shirts`} className='linav'>Camisetas</Link>
                    <Link to={`/category/cap`} className='linav'>Gorras</Link>
                    <Link to={`/category/pants`} className='linav'>Pantalones</Link>
                </ul>
            </div>
         
           
        </nav>
    )
}
export default Navbar