import {Navigate} from 'react-router-dom';

export default function ProtectVentasRoute({usuario, children}) {

  if (usuario?.rol !== 'ventas') {
    return <Navigate to="/" replace/>
  }

  return children;
}
