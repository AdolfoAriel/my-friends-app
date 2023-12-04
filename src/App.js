import Title from './components/Title';
import Footer from './components/Footer';
import { Route, Routes } from 'react-router';
import './App.css';
import Inicio from './pages/Inicio';
import Servicios from './pages/Servicios';
import Contacto from './pages/Contacto';


function App() {
  return (
    <>
<div className='App'>
<Title/>
<Routes>
  <Route path='/' element={<Inicio/>}/>;
  <Route path='Servicios' element={<Servicios/>}/>;
  <Route path='Contacto' element= {<Contacto/>}/>;
</Routes>

  </div>
  <Footer/>
  </>
  );
}

export default App;
