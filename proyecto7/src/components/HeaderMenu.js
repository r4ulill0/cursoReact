import React from 'react'
import { NavLink } from 'react-router-dom';

export default function HeaderMenu(props) {

    return (
        <>
        {props.usuario !== null ?
            <div>
                <button onClick={props.handleLogout}>Logout</button>
                {props.usuario.nombre}
            </div>
            :
            <button onClick={props.handleLogin}>Login</button>
        }
            <div>
                <NavLink to="/">
                    Inicio
                </NavLink>
                <NavLink to="/soporte">
                    Soporte
                </NavLink>
                {props.usuario?.rol === 'ventas' ?
                    <NavLink to="/ventas">
                        Ventas
                    </NavLink>
                    : null
                }
                {props.usuario?.rol === 'rrhh' ?
                    <NavLink to="/recursos-humanos">
                        Recursos-humanos
                    </NavLink>
                    : null
                }
            </div>

        </>
    )
}
