import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import { getClientes } from '../services/Clientes';

export default function DashboardClientes() {
  const [clientes, setClientes] = useState([]);

  useEffect(() => {
    setClientes(getClientes());
    console.log(clientes);
    console.log('hola');
  }, [clientes])

  return(
    <>
    <h1>Clientes</h1>
    <Link to="/ventas/crear-cliente">
    <button>Crear cliente</button>
    </Link>
    <table>
    <thead>
      <tr>
        <th>Nombre</th>
        <th>Cif</th>
        <th>NIF</th>
      </tr>
    </thead>
    <tbody>
    {clientes.map(cliente => {
      return (
        <tr key={cliente.cif}>
          <td>{cliente.nombre}</td>
          <td>
            <Link to={`/ventas/editar-cliente/${cliente.cif}`}>
              <button> Visualizar </button>
            </Link>
          </td>
        </tr>
      )})}
    </tbody>
    </table>
    </>
  )
}
