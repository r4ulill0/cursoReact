import React from 'react'

export default function Equipo(props) {
    return (
        <table className={props.equipo.nombre}>
            <tbody>
                {props?.equipo?.jugadores?.map(jugador => {
                    return (
                        <tr key={jugador.id}>
                            <td>{jugador.nombre}</td>
                            <td>{jugador.puntos}</td>
                            <td>
                                <button onClick={() => props.handleCanasta({
                                    juego: props.equipo.juego,
                                    puntos: 1,
                                    jugador: jugador.nombre,
                                })}>Libre</button>
                                <button onClick={() => props.handleCanasta({
                                    juego: props.equipo.juego,
                                    puntos: 2,
                                    jugador: jugador.nombre,
                                })}>Doble</button>
                                <button onClick={() => props.handleCanasta({
                                    juego: props.equipo.juego,
                                    puntos: 3,
                                    jugador: jugador.nombre,
                                })}>Triple</button>
                            </td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}
