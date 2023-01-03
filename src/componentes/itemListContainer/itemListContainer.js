import './ItemListContainer.css'
const Saludo = ({color, greeting}) => {
    return (
        <div className='divSaludo' style={{backgroundColor: color}}>
        <h1 className="saludo">{greeting}</h1>
        </div>
    )
}
export default Saludo