import React, { useEffect, useState } from 'react';
import { getEquipoLocal, getEquipoVisitante } from '../services/Equipo';
import Equipo from '../components/Equipo';
import TopScore from '../components/TopScore';

export default function Marcador() {
    const logoNBA = 'https://i.ibb.co/k5yXNgy/nba.jpg';
    const [equipoLocal, setEquipoLocal] = useState({
        jugadores: []
    });
    const [equipoVisitante, setEquipoVisitante] = useState({
        jugadores: []
    });
    const [puntos, setPuntos] = useState({
        locales: 0,
        visitantes: 0,
    });

    useEffect(() => {
        setEquipoLocal(() => getEquipoLocal());
        setEquipoVisitante(() => getEquipoVisitante());
    }, []);

    const handleCanasta = canasta => {
        if (canasta.juego === 'local') {
            const newPuntos = puntos.locales += canasta.puntos;
            setPuntos(puntos => ({
                ...puntos,
                locales: newPuntos}))
            let newJugadores = equipoLocal.jugadores;
            newJugadores.forEach( jugador => {
                if (jugador.nombre === canasta.jugador) {
                    jugador.puntos += canasta.puntos;
                }
            })
            setEquipoLocal(equipo => ({
                ...equipo,
                jugadores: newJugadores,
            }))
        } else {
            const newPuntos = puntos.visitantes += canasta.puntos;
            setPuntos(puntos => ({
                ...puntos,
                visitantes: newPuntos}))
            let newJugadores = equipoVisitante.jugadores;
            newJugadores.forEach( jugador => {
                if (jugador.nombre === canasta.jugador) {
                    jugador.puntos += canasta.puntos;
                }
            })
            setEquipoVisitante(equipo => ({
                ...equipo,
                jugadores: newJugadores,
            }))
        }
    }

    return (
        <>
        <div className="marcador">
            <div className="logo">
                <img src={equipoLocal.logo} alt="Logo equipo local" />
            </div>
            <div className="puntos">
                <span>{puntos.locales}</span> 
                <img src={logoNBA} alt="Logo NBA" />
                <span>{puntos.visitantes}</span> 
            </div>
            <div className="logo">
                <img src={equipoVisitante.logo} alt="Logo equipo local" />
            </div>
        </div>
        <div>
            <Equipo equipo={equipoLocal}
                    handleCanasta={handleCanasta}/>
            <Equipo equipo={equipoVisitante}
                    handleCanasta={handleCanasta}/>
        </div>
        <TopScore equipoLocal={equipoLocal}
                  equipoVisitante={equipoVisitante}/>
        </>
    )
}
