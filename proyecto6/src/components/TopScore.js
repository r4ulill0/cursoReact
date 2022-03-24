import React, { useEffect, useState } from 'react'

export default function TopScore(props) {

    const [jugadores, setJugadores] = useState({})

    useEffect(() => {

            const newJugadores = [...props?.equipoLocal?.jugadores, ...props?.equipoVisitante?.jugadores]

            newJugadores.sort((a,b) => {
                return b.puntos-a.puntos
            })

            setJugadores(newJugadores)
    }, [props.equipoLocal, props.equipoVisitante])


    return (
        <>
            <h1>Top Score</h1>
            <table className="top-score">
            <tbody>
                {jugadores?.map( jugador => {
                    return (
                        <tr key={jugador.id}>
                            <td>
                                <img scr={jugador.imagen} alt="Imagen del jugador"/>
                                {jugador.nombre}
                            </td>
                            <td>
                                {jugador.puntos}
                            </td>
                        </tr>
                    )
                })}
            </tbody>
            </table>
        </>
    )
}
