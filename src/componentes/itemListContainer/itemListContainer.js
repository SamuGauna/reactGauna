import './ItemListContainer.css'
import ItemList from '../ItemList/ItemList'
import { getProducts } from '../../AsyncMock'
import { useEffect, useState } from 'react'
const ItemListContainer = ({color, greeting}) => {
    
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
        getProducts().then(productsFromApi =>{
            setProducts(productsFromApi)
        }).catch(error => {
            console.log(error)
        }).finally(()=> {
            setLoading(false)
        })
    }, [])
   
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