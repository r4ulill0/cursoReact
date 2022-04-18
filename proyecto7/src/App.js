import React, { useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Inicio from "./pages/Inicio.js";
import Soporte from "./pages/Soporte.js";
import HeaderMenu from "./components/HeaderMenu.js";
import ProtectVentasRoute from "./guards/ProtectVentasRoute";

const InicioVentas = React.lazy(() => import('./ventas/InicioVentas'))
const InicioRRHH = React.lazy(() => import('./rrhh/InicioRRHH'))

function App() {

  const [usuario, setUsuario] = useState(null);

  const navigate = useNavigate();

  const handleLogin = () => {
    setUsuario({nombre: 'Pilar López', rol: 'ventas'});
    navigate("/");
  }

  const handleLogout = () => {
    setUsuario(null);
    navigate("/");
  }


  return (
    <>
      <HeaderMenu usuario={usuario}
                  handleLogin={handleLogin}
                  handleLogout={handleLogout}/>
      <Routes>
        <Route path="/" element={<Inicio/>} />
        <Route path="soporte" element={<Soporte/>} />
        <Route path="ventas/*" element={
          <ProtectVentasRoute usuario={usuario}>
            <React.Suspense fallback={<p style={{textAlign: 'center'}} >Cargando...</p>}>
              <InicioVentas/>
            </React.Suspense>
          </ProtectVentasRoute>
        } />
        <Route path="recursos-humanos/*" element={
          <React.Suspense fallback={<p style={{textAlign: 'center'}} >Cargando...</p>}>
            <InicioRRHH/>
          </React.Suspense>
        } />
    <Route path="*/**" element={<div> No existe la ruta </div>} />
      </Routes>
    </>
  );
}

export default App;
