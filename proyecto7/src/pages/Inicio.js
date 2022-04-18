import React from 'react';
import { Link } from 'react-router-dom';

export default function Inicio() {

  return (
    <>
    <div className='container'>
      <h1> Bienvenido </h1>
      <Link to="/soporte">
    <button> Ayuda </button>
    </Link>
    </div>
    </>
  )
}
