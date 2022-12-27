import './navbar.css'
import CartWidget from '../cartWidget/cartWidget'
import Saludo from '../itemListContainer/itemListContainer'
const Navbar = () => {
    return (
        <nav className='navbar'>
            <div className='headnav'>
                <h1>FLOW - Tienda de Ropa</h1>
                <CartWidget/> 
            </div>
            <Saludo color='aqua'/>         
            <div className='divul'>
                <ul className='ulnav'>
                    <li className='linav'>Zapatillas</li>
                    <li className='linav'>Camisetas</li>
                    <li className='linav'>Tangas</li>
                    <li className='linav'>Gorras</li>
                    <li className='linav'>Calzones</li>
                </ul>
            </div>
         
           
        </nav>
    )
}
export default Navbar