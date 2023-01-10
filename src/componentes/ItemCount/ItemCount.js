import { useState } from 'react'
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
        <div>
        <button onClick={decrement}>-</button>
        <h4>{count}</h4>
        <button onClick={increment}>+</button>
        <button onClick={() => onAdd(count) }>Agregar al carrito</button>
        </div>

        
    )
}
export default ItemCount