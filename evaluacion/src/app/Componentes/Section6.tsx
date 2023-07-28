import React from "react";
import { StFormulario } from "./StFormulario";
import { Registros } from "./Registrar"; 

export const Contactanos = () => {
    return(
        <section >
        <div >
            <div >
                <div ></div>
                <div >
                    <h2>Contactanos</h2>
                    <p>Puede contactar con Fitbro por medio del formulario de contacto para unirte a nosotros, hacer preguntas, dar comentarios o sugerencias, o simplemente para obtener más información sobre los servicios que se ofrecen</p><br />
                    <StFormulario/>
                    <Registros />
                </div>
                <div ></div>
            </div>
        </div>
    </section>
    )
}