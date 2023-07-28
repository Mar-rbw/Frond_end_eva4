import React, {useState,useEffect} from "react";
import { Formulario } from "../Interface/IFormulario";
import { registrarFormulario } from "../Firebase/Promesas";

export const StFormulario = () => {
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

    const registrar = () => {
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
    return(
        <form>
            <label>Nombre: </label><br/>
            <input type="text" 
              onChange={(e)=>setNombre(e.target.value)}
              value={nombre}
              /><br/>
            <label>Apellido: </label><br/>
            <input type="text"
              onChange={(e)=>setApellido(e.target.value)}
              value={apellido}
              /><br/>
            <label>Género: </label><br/>
{/*             <input type="number"
              onChange={(e)=>setGenero(e.target.value)}
              value={genero} */}
            <div>
              <input
                type="radio"
                value="Hombre"
                checked={genero === "Hombre"}
                onChange={(e) => setGenero(e.target.value)}
              />
              <label>Hombre</label>
            </div>
            <div>
              <input
                type="radio"
                value="Mujer"
                checked={genero === "Mujer"}
                onChange={(e) => setGenero(e.target.value)}
              />
              <label>Mujer</label>
            </div>
            <div>
              <input
                type="radio"
                value="Otro"
                checked={genero === "Otro"}
                onChange={(e) => setGenero(e.target.value)}
              />
              <label>Otro</label>
            </div>
            <label>Dirección: </label><br/>
            <input type="text"
              onChange={(e)=>setDireccion(e.target.value)}
              value={direccion}
              /><br/>
            <label>Número: </label><br/>
            <input type="number"
              onChange={(e)=>setNumero(e.target.value)}
              value={numero}
              /><br/>
            <label>Region: </label><br/>
            <div>
              <select
                onChange={(e) => setRegion(e.target.value)}
                value={region}
              >
                <option value="" disabled selected>
                  Región
                </option>
                <option value="Tarapaca">Tarapaca</option>
                <option value="Antofagasta">Antofagasta</option>
                <option value="Atacama">Atacama</option>
                <option value="Otros">Otros</option>
              </select>
            </div>
            <br/>
            <label>Comuna: </label><br/>
            <div>
              <select
                onChange={(e) => setComuna(e.target.value)}
                value={comuna}
              >
                <option value="" disabled selected>
                  Comuna
                </option>
                <option value="Copiapo">Copiapo</option>
                <option value="Caldera">Caldera</option>
                <option value="Tierra Amarilla">Tierra Amarilla</option>
                <option value="Otros">Otros</option>
              </select>
            </div>
            <br/>
            <label>Correo: </label><br/>
            <input type="email"
              onChange={(e)=>setCorreo(e.target.value)}
              value={correo}
              /><br/>
            <label>Teléfono: </label><br/>
            <input type="tel"
              onChange={(e)=>setTelefono(e.target.value)}
              value={telefono}
              /><br/>
            <label>Asunto: </label><br/>
            <div>
              <select
                onChange={(e) => setAsunto(e.target.value)}
                value={asunto}
              >
                <option value="" disabled selected>
                  Asunto
                </option>
                <option value="Comentario">Comentario</option>
                <option value="Reportar error">Reportar error</option>
                <option value="Reclamo">Reclamo</option>
                <option value="Otros">Otros</option>
              </select>
            </div>
            <br/>
            <label>Contenido: </label><br/>
            <textarea
              rows={5}
              cols={30}
              onChange={(e) => setContenido(e.target.value)}
              value={contenido}
              /><br/>

            <button type='button' onClick={registrar}>Registrar</button>
        </form>
    )
}

