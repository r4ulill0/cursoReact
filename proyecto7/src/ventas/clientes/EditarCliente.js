import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getClienteByCif } from '../services/Clientes';

export default function EditarCliente() {

  const params = useParams();
  const [cliente, setCliente] = useState({});

  useEffect(() => {
    setCliente(getClienteByCif(params.cif));
  }, [cliente, params.cif])

  return (
    <div>
    <p>Nombre: {cliente.nombre}</p>
    <p>Cif: {cliente.cif}</p>
    <p>Localidad: {cliente.localidad}</p>
    </div>
  )
}
