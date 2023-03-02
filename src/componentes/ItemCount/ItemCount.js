import { useState } from 'react'
import './ItemCount.css'

const ItemCount = ({stock = 0, initial = 1, onAdd}) => {

    const [quantity, setQuantity] = useState(initial)

   const increment = () => {
       if(quantity < stock) {
           setQuantity(prev => prev + 1)
       }
   }

   const decrement = () => {
       if(quantity > 1) {
           setQuantity(prev => prev - 1)
       }     
   }
    return (
        <><div className='itemMasMenos'>
            <button className='buttonMasMenos' onClick={decrement}>-</button>
            <h4 className='contador'>{quantity}</h4>
            <button className='buttonMasMenos' onClick={increment}>+</button>
        </div><div className='buttonDiv'>
                <button className='buttonAgregar' onClick={() => onAdd(quantity)}>Agregar al carrito</button>
            </div></>

        
    )
}
export default ItemCount