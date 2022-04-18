import React, {useState} from 'react';
import { Link, useNavigate} from  'react-router-dom';
import { crearCliente} from '../services/Clientes';

export default function CrearCliente() {

  const [values, setValues] = useState({
    nombre: '',
    cif: '',
    localidad: '',
  })

  const navigate = useNavigate();
  const handleOnChange = e => {
    setValues({
      ...values,
      [e.target.name]: e.target.value
    })
  }

  const handleOnSubmit = e => {
    e.preventDefault();
    crearCliente(values);
    navigate("/ventas/dashboard-clientes");
  }

  return (
    <div>
      <div className="row">
        <div className="col-100">
          <h1> Crear cliente </h1>
            <form onSubmit={handleOnSubmit}>
              <div>
                <div>
                  <label> Nombre </label>
                  <input type="text"
                  value={values.nombre}
                  name="nombre"
                  onChange={handleOnChange}/>
                </div>
              </div>
              <div>
                <div>
                  <label> Cif </label>
                  <input type="text"
                  value={values.cif}
                  name="cif"
                  onChange={handleOnChange}/>
                </div>
              </div>
              <div>
                <div>
                  <label>Localidad</label>
                  <input type="text"
                  value={values.localidad}
                  name="localidad"
                  onChange={handleOnChange}/>
                </div>
              </div>
              <div className="row end">
                <Link to="/ventas/dashboard-clientes">
                  <button type="button" className="outline">Enviar</button>
                </Link>
              </div>
              <button type="submit">Añadir</button>
            </form>
        </div>
      </div>
    </div>
  )
}
