import React from 'react';
import { Routes, Route, Outlet, Link } from 'react-router-dom';
import DashboardClientes from './clientes/DashboardClientes'
import EditarCliente from './clientes/EditarCliente';
import CrearCliente from './clientes/CrearCliente';

export default function InicioVentas() {
  return(
    <>
    <Routes>
      <Route path="/" element={<Outlet />}>
        <Route index element={<InicioVentasLayout/>} />
        <Route path="dashboard-clientes" element={<DashboardClientes/>} />
        <Route path="crear-cliente" element={<CrearCliente/>} />
        <Route path="editar-cliente/:cif" element={<EditarCliente/>} />
      </Route>
    </Routes>
    </>
  )
}

function InicioVentasLayout() {
  return (
    <>
    <div> ventas </div>
    <Link to="/ventas/dashboard-clientes">
    <button> Clientes </button>
    </Link>
    </>
  )
}
