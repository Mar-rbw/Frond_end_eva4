import React, { useEffect, useState } from "react";
import { obtenerFormularios } from "../Firebase/Promesas";
import { Formulario } from "../Interface/IFormulario";
import { Link } from "react-router-dom";

export const Registros = () => {
  const [formularios, setFormularios] = useState<Formulario[]>([]);

  useEffect(() => {
    obtenerFormularios().then((list) => {
      console.log("Ya estoy listo");
      console.log(list);
      setFormularios(list);
    });
  }, []);

  const renderizarDatos = () => {
    return formularios.map((f) => (
      <tr >
        <td>{f.nombre}</td>
        <td>{f.apellido}</td>
        <td>{f.genero}</td>
        <td>{f.direccion}</td>
        <td>{f.numero}</td>
        <td>{f.region}</td>
        <td>{f.comuna}</td>
        <td>{f.correo}</td>
        <td>{f.telefono}</td>
        <td>{f.asunto}</td>
        <td>{f.contenido}</td>
        <td>
          <Link to={`/actualizar`}>Actualizar</Link>
        </td>
        <td>
          <Link to={`/eliminar`}>Eliminar</Link>
        </td>
      </tr>
    ));
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Apellido</th>
          <th>Género</th>
          <th>Dirección</th>
          <th>Número</th>
          <th>Región</th>
          <th>Comuna</th>
          <th>Correo</th>
          <th>Teléfono</th>
          <th>Asunto</th>
          <th>Contenido</th>
          <th>Editar</th>
          <th>Eliminar</th>
        </tr>
      </thead>
      <tbody>{renderizarDatos()}</tbody>
    </table>
  );
};
