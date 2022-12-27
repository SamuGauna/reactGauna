import './itemListContainer.css'
const Saludo = ({color}) => {
    return (
        <div className='divSaludo' style={{backgroundColor: color}}>
        <h1 className="saludo">Bienvenido a la mejor tienda de ropa del País !!!</h1>
        </div>
    )
}
export default Saludo