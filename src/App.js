import Title from './components/Title';
import Footer from './components/Footer';
import { Route, Routes } from 'react-router';
import './App.css';
import Inicio from './pages/Inicio';
import Servicios from './pages/Servicios';
import Contacto from './pages/Contacto';
import './hojas-de-estilo/Title.css';
import Aileen from './pages/Aileen';
import Dayana from './pages/Dayana';
import Danna from './pages/Danna';
import Jeremy from './pages/Jeremy';
import Adolfo from './pages/Adolfo';

function App() {
  return (
    <>
<div className='App'>
<Title/>
<Routes className="contenedor-rutas">
  <Route className="contenedor-rutas" path='/' element={<Inicio/>}/>;
  <Route path='Servicios' element={<Servicios/>}/>;
  <Route path='Contacto' element= {<Contacto/>}/>;
  <Route path='Aileen' element={<Aileen/>}/>;
  <Route path='Dayana' element={<Dayana/>}/>;
  <Route path='Danna' element={<Danna/>}/>;
  <Route path='Jeremy' element={<Jeremy/>}/>;
  <Route path='Adolfo' element={<Adolfo/>}/>;
</Routes>

  </div>
  <Footer/>
  </>
  );
}

export default App;
