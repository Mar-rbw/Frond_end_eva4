'use client'
import React from "react"
import { Routes,Route } from "react-router"
import { Presentacion } from "../Componentes/Section1"

export const AppRouter = () => {
    return (
        <Routes>
            <Route path='/*' element={<Presentacion/>}/>
        </Routes>
      )
    }