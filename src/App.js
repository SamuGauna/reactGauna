import logo from './logo.svg';
import './App.css';
import Navbar from './componentes/Navbar/Navbar';
import Saludo from './componentes/ItemListContainer/ItemListContainer';
function App() {
  return (
    <div className="App">
        <Navbar/>
        <img src={logo} className="App-logo" alt="carrito" />
        <Saludo color='aqua' greeting='Bienvenidos a la mejor pagina de ropa !!!'/>
    </div>
  );
}

export default App;
