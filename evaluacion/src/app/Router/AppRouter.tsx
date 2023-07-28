'use client'
import React from "react"
import { Routes,Route } from "react-router"
import { Presentacion } from "../Componentes/Section0"
import { Nosotros } from "../Componentes/Section2"
import { Ubicacion } from "../Componentes/Section3"
import { Colaboradores } from "../Componentes/Section4"
import { Faq } from "../Componentes/Section5"
import { Contactanos } from "../Componentes/Section6"
import { Recuerda } from "../Componentes/Section7"
import { Servicios } from "../Componentes/Section1"

export const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<Presentacion/>}/>
            <Route path="/Servicios" element={<Servicios/>}/>
            <Route path="/Nosotros" element={<Nosotros/>}/>
            <Route path="/Ubicacion" element={<Ubicacion/>}/>
            <Route path="/Colaboradores" element={<Colaboradores/>}/>
            <Route path="/Preguntas frecuentes" element={<Faq/>}/>
            <Route path="/Contactanos" element={<Contactanos/>}/>
            <Route path="/Recuerda" element={<Recuerda/>}/>
        </Routes>
      )
    }