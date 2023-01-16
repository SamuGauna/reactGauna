import ItemCount from "../ItemCount/ItemCount"

const ItemDetail = ({id, name, img, price, category, description, stock}) => {
    return (
        <>
        <h4>{name}</h4>
        <p>{category}</p>
        <img src={img} alt={name}/>
        <p>$ {price}</p>
        <p>Descripcion: {description}</p>
        <ItemCount onAdd={(count) => console.log('Agregaste' + count)}/>

        </>
    )
}

export default ItemDetail