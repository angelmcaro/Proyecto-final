import React from "react";
function Seccion({ titulo, contenido }) {
  return (
    <section>
      <h2>{titulo}</h2>
      <p>{contenido}</p>
      {/* el formulario se muestra solo en la seccion de contacto*/}
      {titulo === "Contacto" && (
        <form>
          <label>
            Nombre:
            <input type="text" name="nombre" placeholder="Nombre" />
          </label>
          <br />
          <label>
            Correo:
            <input type="email" name="correo" placeholder="Correo" />
          </label>
          <br />
          <label>
            Mensaje:
            <textarea name="mensaje" placeholder="Escribe tu mensaje aqui" />
          </label>
          <br />
          <button type="submit">Enviar</button>
        </form>
      )}
    </section>
  );
}
export default Seccion;
