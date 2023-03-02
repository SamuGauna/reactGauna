import './ItemListContainer.css'
import ItemList from '../ItemList/ItemList'
import { getDocs, collection, query, where } from 'firebase/firestore'
import { useEffect, useState } from 'react'
import { db } from '../../services/firebase/firebaseConfig'

import { useParams } from 'react-router-dom'

const ItemListContainer = ({greeting}) => {

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    const {categoryId} = useParams()

    useEffect(()=>{
            setLoading(true)
            const collectionRef = categoryId
            ? query(collection(db, 'products'), where('category', '==', categoryId))
            : collection(db, 'products')
            getDocs(collectionRef).then(resp => {
                const productAdapted = resp.docs.map(doc => {
                    const data = doc.data()
                    return {id: doc.id, ...data}
                })
                setProducts(productAdapted)
            }).catch(error => {
                console.log(error)
            }).finally(()=>{
                setLoading(false)
            })
            
       
    }, [categoryId])
   
    if(loading) {
        return <h1>Cargando..</h1>
    }
    
    return (
        <div className='itemListContainer'>
            <div className='tituloDiv'>
            <h1 className="tituloh1">{greeting}</h1>
            </div>
            <div className='itemLis'>
            <ItemList products={products}/>
            </div>
        </div>
    )
}
export default ItemListContainer