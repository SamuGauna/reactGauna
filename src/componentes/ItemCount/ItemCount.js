import { useState } from 'react'
import './ItemCount.css'
const ItemCount = ({onAdd, stock}) => {

    const [count, setCount] = useState(1)
    const decrement =()=>{
        if (count>1){
            setCount(count - 1)
        }
        
    }
    const increment =()=>{
        setCount(count + 1)
    }

    return (
        <><div className='itemMasMenos'>
            <button className='buttonMasMenos' onClick={decrement}>-</button>
            <h4 className='contador'>{count}</h4>
            <button className='buttonMasMenos' onClick={increment}>+</button>
        </div><div className='buttonDiv'>
                <button className='buttonAgregar' onClick={() => onAdd(count)}>Agregar al carrito</button>
            </div></>

        
    )
}
export default ItemCount