import ItemCount from "../ItemCount/ItemCount"
import './ItemDetail.css'
const ItemDetail = ({id, name, img, price, category, description, stock}) => {
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
                <ItemCount onAdd={(count) => console.log('Agregaste' + count)} />
        </div></>
        
    )
}

export default ItemDetail