import logo from './logo.svg';
import './App.css';
import Navbar from './componentes/navbar/navbar';
function App() {
  return (
    <div className="App">
        <Navbar/>
        <img src={logo} className="App-logo" alt="carrito" />
    </div>
  );
}

export default App;
