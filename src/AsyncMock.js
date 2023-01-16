const products = [
    {
        id: '1',
        name: 'remera',
        price: 1000,
        category: 'shirts',
        img: 'https://http2.mlstatic.com/D_NQ_NP_841441-MLA49327853671_032022-O.jpg',
        stock: 10,
        description: 'remera Hasbulla talle M'
    },
    { id: '2',
    name: 'pantalon',
    price: 1500,
    category: 'pants',
    img: 'https://http2.mlstatic.com/D_NQ_NP_865200-MLA49336739312_032022-W.jpg',
    stock: 15,
    description: 'pantalon talle L'},
    {
        id: '3',
        name: 'gorra',
        price: 1000,
        category: 'cap',
        img: 'https://http2.mlstatic.com/D_NQ_NP_820539-MLA47729179408_102021-V.jpg',
        stock: 5,
        description: 'gorra baseball'
    }
]

export const getProducts = () => {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve(products)
        }, 3000)
    })
   
}

export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve(products.filter(prod => prod.category === categoryId))
        }, 500)
    })
}

export const getProductsById = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve(products.find(prod=> prod.id === id))
        }, 500)
    })
}