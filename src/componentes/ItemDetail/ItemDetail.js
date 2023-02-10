import ItemCount from "../ItemCount/ItemCount"
import './ItemDetail.css'
import { useState, useContext } from "react"
import { Link } from 'react-router-dom'
import { CartContext } from "../../context/CartContext"


const ItemDetail = ({id, name, img, price, category, description, stock}) => {

    const [quantity, setQuantity] = useState(0)

    const {addItem, isInCart} = useContext(CartContext)

    const handleOnAdd = (quantity) => {
        console.log('agregue al carrito: ', quantity)

        setQuantity(parseInt(quantity))

        addItem({id, name, price, quantity})
    }
    return (
        <><div className="itemDetail">
            <div><h4 className="itemDetailTittle"> Detalle {name}</h4></div>
            <div><img className="itemDetailImg" src={img} alt={name} /></div>
            <div className="itemDiv">
                <p className="itemDetailprice">$ {price}</p>
                <p className="itemDetailDes">{description}</p>
            </div>
        </div>
        <div className="itemCount">
        {
                    isInCart(id) ? (
                        <Link to='/cart'>Terminar compra</Link>
                    ) : (
                        <ItemCount stock={stock} onAdd={handleOnAdd} />
                    )
                }
        </div></>
        
    )
}

export default ItemDetail