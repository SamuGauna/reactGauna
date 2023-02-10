import './Cartwidget.css'
const CartWidget = ({totalQuantity}) => {
    return (
        <div className='cart'>
         <img className='cartImg' src='./images/cart.svg' alt='carrito' />
         {totalQuantity}
        </div>
    )    
}
export default CartWidget