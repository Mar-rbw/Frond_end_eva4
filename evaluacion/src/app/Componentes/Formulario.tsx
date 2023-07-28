import React, {useState,useEffect} from "react";
import { Formulario } from "../Interface/IFormulario";
import { registrarFormulario } from "../Firebase/Promesas";

export const stFormulario = () => {
    const [nombre, setNombre] = useState("")
    const [apellido, setApellido] = useState("")
    const [genero, setGenero] = useState("")
    const [direccion, setDireccion] = useState("")
    const [numero, setNumero] = useState("")
    const [region, setRegion] = useState("")
    const [comuna, setComuna] = useState("")
    const [correo, setCorreo] = useState("")
    const [telefono, setTelefono] = useState("")
    const [asunto, setAsunto] = useState("")
    const [contenido, setContenido] = useState("")

    const f:Formulario ={
        nombre,
        apellido,
        genero,
        direccion,
        numero:parseInt(numero),
        region,
        comuna,
        correo,
        telefono:parseInt(telefono),
        asunto,
        contenido
    }

    registrarFormulario(f)
    alert(nombre+" "+apellido+" "+"tu formulario a sido enviado con exito!!")
}
