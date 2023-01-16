import { Link } from "react-router-dom"

const Item = ({name, img, price, id}) => {
    return (
        <div>
            <h5>{name}</h5>
            <img src={img} alt={name} style={{width: 100 }}/>
            <p>$ {price}</p>
            <Link to={`/detail/${id}`}>Ver detalle</Link>

        </div>
    )
}

export default Item