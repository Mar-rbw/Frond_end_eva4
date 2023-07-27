import React from "react";


export const Contactanos = () => {
    return(
        <section >
        <div >
            <div >
                <div ></div>
                <div >
                    <h2>Contactanos</h2>
                    <p>Puede contactar con Fitbro por medio del formulario de contacto para unirte a nosotros, hacer preguntas, dar comentarios o sugerencias, o simplemente para obtener más información sobre los servicios que se ofrecen</p><br />
                    <form>
                            <div >
                                <label >Nombre</label><br />
                                <input type="text"  placeholder="Ingresa tu nombre"/>
                            </div><br />
                            <div >
                                <label >Apellido</label><br />
                                <input type="text"  placeholder="Ingresa tu apellido"/>
                            </div><br />
                            <div>
                                <div ></div>
                                <div >
                                    <h2 >Género</h2>
                                    <div >
                                        <input type="radio" />
                                        <label  >Hombre</label>
                                    </div>
                                    <div >
                                        <input type="radio" />
                                        <label >Mujer</label>
                                    </div>
                                    <div >
                                        <input type="radio" />
                                        <label >Otro</label>
                                    </div>
                                </div><br />
                                <div ></div>
                            </div>
                            <div >
                                <div>
                                    <label>Dirección</label><br />
                                    <input type="text"  placeholder="El Cid"/>
                                </div><br />
                                <div >
                                    <label >Número</label><br />
                                    <input type="number"placeholder="666"/>
                                </div>
                            </div><br />
                            <div >
                                <div >
                                    <select >
                                        <option selected>Región</option>
                                        <option value="1">Tarapaca</option>
                                        <option value="2">Antofagasta</option>
                                        <option value="3">Atacama</option>
                                        <option value="4">Otros</option>
                                    </select>                                  
                                </div><br />
                                <div >
                                    <select >
                                        <option selected>Comuna</option>
                                        <option value="1">Copiapo</option>
                                        <option value="2">Caldera</option>
                                        <option value="3">Tierra Amarilla</option>
                                        <option value="4">Otros</option>
                                    </select>                                  
                                </div>
                            </div><br />
                            <div >
                                <label>Correo</label><br />
                                <input type="email"  placeholder="name@example.com"/>
                            </div><br />
                            <div >
                                <label >Teléfono</label><br />
                                <input type="phone" placeholder="+56912345678"/>
                            </div><br />
                            <select className="bt">
                                <option selected>Asunto</option>
                                <option value="1">Copiapo</option>
                                <option value="2">Caldera</option>
                                <option value="3">Tierra Amarilla</option>
                                <option value="4">Otros</option>
                            </select><br />      
                            <div >
                                <label >Contenido</label><br />
                                <textarea name="contenido" id="si" cols={30} rows={10} className="bt"></textarea>
                            </div>
                            <button type="submit"  >Enviar</button>
                    </form>
                </div>
                <div ></div>
            </div>
        </div>
    </section>
    )
}