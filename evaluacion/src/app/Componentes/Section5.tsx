import React from "react";

/* Acronimo de Preguntas más frecuentes */
export const Faq = () => {
    return(
        <section>
            <h2>Preguntas frecuentes</h2>
            <p>Aquí esta nuestra sección de preguntas frecuentes: </p><br />
            {/* Este apartado pertene al accodion de Bootstrap */}
            <div>
                <div>
                  <h2>
                    <button type="button" >
                        ¿Cómo puedo reservar una sesión de entrenamiento en solitario con Fitbros?
                    </button>
                  </h2>
                  <div >
                    <div>
                      <p>Puedes reservar una sesión de entrenamiento en solitario por medio de nuestras redes sociales o contactandonos con el formulario . También puedes hacerlo en persona en cualquiera de nuestros centros de entrenamiento.</p>
                    </div>
                  </div>
                </div>
                <div>
                  <h2>
                    <button >
                        ¿Qué tipo de programas de entrenamiento ofrecen en Fitbros?
                    </button>
                  </h2>
                  <div >
                    <div >
                      <p>Ofrecemos una amplia variedad de programas de entrenamiento que se adaptan a las necesidades y objetivos de cada uno de nuestros clientes. Algunos de nuestros programas incluyen entrenamiento de fuerza, entrenamiento de resistencia, entrenamiento de flexibilidad, entrenamiento funcional y mucho más.</p>
                    </div>
                  </div>
                </div>
                <div>
                  <h2 >
                    <button >
                        ¿Cómo puedo convertirme en un Fitbro y conocer a mi compañero de ejercicio ideal?
                    </button>
                  </h2>
                  <div >
                    <div >
                      <p>Para convertirte en un Fitbro y conocer a tu compañero de ejercicio ideal, debes inscribirte en nuestra subcripción que le llegara por email, después de rellenar el formulario. Luego, debes completar un cuestionario sobre tus objetivos de entrenamiento, nivel de experiencia y preferencias de entrenamiento. Con esta información, nuestro sistema te emparejará con un compañero de ejercicio que tenga objetivos y preferencias similares a las tuyas.</p>
                    </div>
                  </div>
                </div>
            </div>
        </section>
    )
}