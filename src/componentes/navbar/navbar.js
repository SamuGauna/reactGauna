import './Navbar.css'
import CartWidget from '../CartWidget/CartWidget'
const Navbar = () => {
    return (
        <nav className='navbar'>
            <div className='headnav'>
                <h1>FLOW - Tienda de Ropa</h1>
                <CartWidget/> 
            </div>       
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