import { createContext, useState } from "react"

export const CartContext = createContext()

export const CartProvider = ({children}) => {
   const [cart, setCart] = useState([])
   
    const addItem = (productToAdd) => {
        if(!isInCart(productToAdd.id)) {
          setCart(prev => {
            console.log(prev)
            return [...prev, productToAdd]
          })
        }
      }
    const isInCart = (id) => cart.some(prod => id === prod.id)
    
    const getTotalQuantity = () => {
        let accu = 0
        cart.forEach(prod => {
            accu += prod.quantity
        })
        return accu
    }
    const totalQuantity = getTotalQuantity()
    
    //Eliminar
    const removeFromCart = (id) => {
      const newCart = cart.filter((carItem) => carItem.id !== id);
      setCart(newCart)
    }
    
    //Vaciar el carrito
    const deleteAll = () => {
      setCart([])
    }
    
    //Precio Total
    const totalPrice = () => {
      return cart.reduce((acumuladorPrice, actualPrice) => acumuladorPrice + actualPrice.quantity * actualPrice.price,0)
    }
    
    return (
        <CartContext.Provider value={{addItem, isInCart, totalQuantity, totalPrice, deleteAll, removeFromCart, cart}}>
            {children}
        </CartContext.Provider>
    )
}
