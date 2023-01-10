
import './App.css';
import Navbar from './componentes/Navbar/Navbar';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import ItemCount from './componentes/ItemCount/ItemCount';
function App() {
  return (
    <div className="App">
        <Navbar/>
        <ItemListContainer color='aqua' greeting='Bienvenidos a la mejor pagina de ropa !!!'/>
        <ItemCount onAdd={(count) => console.log('Agregaste' + count)}/>
    </div>
  );
}

export default App;
