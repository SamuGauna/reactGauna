import './Cartwidget.css'
import { Link } from 'react-router-dom'
const CartWidget = ({totalQuantity}) => {
    return (
        <Link to={'/cart'}>
        <div className='cart'>
         <img className='cartImg' src='./images/cart.svg' alt='carrito' />
         {totalQuantity}
        </div>
        </Link>
        
    )    
}
export default CartWidget