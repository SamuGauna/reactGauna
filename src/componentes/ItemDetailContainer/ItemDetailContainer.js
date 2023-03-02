import { useEffect, useState } from "react"
import ItemDetail from "../ItemDetail/ItemDetail"
import './ItemDetailContainer.css'
import { useParams } from "react-router-dom"
import { getDoc, doc } from 'firebase/firestore'
import { db } from "../../services/firebase/firebaseConfig"

const ItemDetailContainer = () => {
    
    const [product, setProducts] = useState()
    const [loading, setLoading] = useState(true)
    const {productId} = useParams()

    useEffect(()=> {
        const docRef = doc(db, 'products', productId)
        getDoc(docRef).then(resp => {
            const data = resp.data()
            const productAdapted = {id: resp.id, ...data}
            setProducts(productAdapted)
        }).catch(error => {
            console.log(error);
        }).finally(()=> {
            setLoading(false)
        })
    }, [productId])

    if(loading) {
        return <h1>Cargando...</h1>
    }
    return (
        <div className="itemDetailContainer">
            <ItemDetail {...product} />
        </div>
    )
}

export default ItemDetailContainer