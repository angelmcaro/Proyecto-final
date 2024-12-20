import React from "react";
import { Link } from "react-router-dom";
function Menu() {
  return (
    <nav>
      <ul style={styles.menu}>
        <li><Link to="/" style={styles.link}>Inicio</Link></li>
        <li><Link to="/servicios" style={styles.link}>Catalogo</Link></li>
        <li><Link to="/contacto" style={styles.link}>Contacto</Link></li>
      </ul>
    </nav>
  );
}
const styles = {
  menu: {
    listStyle: "none",
    display: "flex",
    justifyContent: "center",
    padding: 0,
    margin: 0,
    backgroundColor: "#282c34",
  },
  link: {
    color: "white",
    textDecoration: "none",
    margin: "0 15px",
    fontSize: "18px",
  },
};
export default Menu;
