import Item from "../Item/Item"
import './ItemList.css'
const ItemList = ({products}) => {
    
    return (
        <div className="itemList">
        <ul className="itemul">
            {products.map(prod => <Item key={prod.id} {...prod} />)}
        </ul>
        </div>
        
        
    )
}
export default ItemList