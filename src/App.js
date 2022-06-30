import './App.css';
import Navbar from './components/Navbar/Navbar';
import { Routes, Route,Navigate} from "react-router-dom";
import Inicio from './pages/Inicio/Inicio'
import Formulario from './pages/formulario/Formulario';
import Footer from './components/Footer/Footer';
import Login from './pages/Login/Login';
import { PanelAdmin } from './pages/PanelAdmin/PanelAdmin';




function App() {
  return (
    <>
     
     
      <Routes>
      <Route path="/" element={<Inicio />} />
      <Route path="/formulario" element={<Formulario />} />
      <Route path="/login" element={<Login />} />
      <Route path="/paneladmin" element={<PanelAdmin />} />
      <Route path="*" element={<Navigate replace to="/"/>} />
      </Routes>
      <Footer/>






    </>

  );
}

export default App;
