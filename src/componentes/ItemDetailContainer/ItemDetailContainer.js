import { useEffect, useState } from "react"
import ItemDetail from "../ItemDetail/ItemDetail"
import { getProductsById } from "../../AsyncMock"

import { useParams } from "react-router-dom"

const ItemDetailContainer = () => {
    
    const [product, setProducts] = useState()
    const [loading, setLoading] = useState(true)
    const {productId} = useParams()

    useEffect(()=> {
        getProductsById(productId).then(response => {
            setProducts(response)
        }).finally(() => {
            setLoading(false)
        })
    }, [productId])

    if(loading) {
        return <h1>Cargando...</h1>
    }
    return (
        <div>
            <h3>Detalle {product.name}</h3>
            <ItemDetail {...product} />
        </div>
    )
}

export default ItemDetailContainer