import './Item.css'
import { Link } from "react-router-dom"

const Item = ({name, img, price, id}) => {
    return (
        <div className="cardItem">
            <div className='cardTittle'>
            <h5>{name}</h5>
            </div>
            <div>
            <img className='cardImg' src={img} alt={name}/>
            </div>
            <div className='cardPrice'>
            <p>$ {price}</p>
            </div>
            <div className='cardLink'>
            <Link className='cardLinkP' to={`/detail/${id}`}>Ver detalle</Link>
            </div>
            
        </div>
    )
}

export default Item