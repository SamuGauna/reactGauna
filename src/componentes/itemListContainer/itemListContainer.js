import './ItemListContainer.css'
import ItemList from '../ItemList/ItemList'
import { getProducts, getProductsByCategory } from '../../AsyncMock'
import { useEffect, useState } from 'react'

import { useParams } from 'react-router-dom'

const ItemListContainer = ({color, greeting}) => {

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    const {categoryId} = useParams()

    useEffect(()=>{
            setLoading(true)

            const funcionCambio = categoryId ? getProductsByCategory : getProducts
            
            funcionCambio(categoryId).then(productsFromApi =>{
                setProducts(productsFromApi)
            }).catch(error => {
                console.log(error)
            }).finally(()=> {
                setLoading(false)
            })
       
    }, [categoryId])
   
    if(loading) {
        return <h1>Cargando..</h1>
    }
    
    return (
        <div className='divSaludo' style={{backgroundColor: color}}>
        <h1 className="saludo">{greeting}</h1>
        <ItemList products={products}/>
        </div>
    )
}
export default ItemListContainer