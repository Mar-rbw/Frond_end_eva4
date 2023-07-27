'use client'
import React from 'react'
import { Link } from 'react-router-dom'

export const Header = () => {
    return (
        <nav>
            <Link to={"/"}>Home</Link>
            <Link to={"/Servicios"}>Servicios</Link>
            <Link to={"/Nosotros"}>Nosotros</Link>
            <Link to={"/Ubicacion"}>Ubicacion</Link>
            <Link to={"/Colaboradores"}>Colaboradores</Link>
            <Link to={"/Preguntas frecuentes"}>Faq</Link>
            <Link to={"/Contactanos"}>Contactanos</Link>
            <Link to={"/Recuerda"}>Recuerda</Link>
        </nav>
    )
}