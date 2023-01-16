
import './App.css';
import Navbar from './componentes/Navbar/Navbar';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<ItemListContainer color='aqua' greeting='Bienvenidos a la mejor pagina de ropa !!!'/>} />
          <Route path='/detail/:productId' element={<ItemDetailContainer />} />
          
       </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
