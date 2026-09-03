import "../styles/Navbar.css";

import { useNavigate } from "react-router-dom";

import configIcon from "../assets/img/navbar/config.png";
import musicIcon from "../assets/img/navbar/consol.png";
import homeIcon from "../assets/img/navbar/home.png";
import filesIcon from "../assets/img/navbar/carp.png";
import userIcon from "../assets/img/navbar/usuario.png";

import LogoEz from "../assets/img/navbar/logoblanc.png";


function Navbar() {

  const navigate = useNavigate();

  return (

    <nav className="navbar">

      {/* LOGO */}
      <div className="navbar-logo">

        <img
          src={LogoEz}
          alt="Aethel Music"
          className="logo-navbar"
        />

      </div>


      {/* BOTONES */}
      <div className="navbar-buttons">

        {/* USUARIO */}
        <button
          className="nav-button"
          title="Usuario"
          onClick={() => navigate("/usuario")}
        >
          <img
            src={userIcon}
            alt="Usuario"
          />
        </button>


        {/* CONSOLA */}
        <button
          className="nav-button"
          title="Música"
          onClick={() => navigate("/consol")}
        >
          <img
            src={musicIcon}
            alt="Consola"
          />
        </button>


        {/* INICIO / HOME */}
        <button
          className="nav-button"
          title="Música"
          onClick={() => navigate("/home")}
        >
          <img
            src={homeIcon}
            alt="Inicio"
          />
        </button>


        {/* ÁLBUMES */}
        <button
          className="nav-button"
          title="Álbumes"
          onClick={() => navigate("/albumes")}
        >
          <img
            src={filesIcon}
            alt="Álbumes"
          />
        </button>


        {/* CONFIGURACIÓN */}
        <button
          className="nav-button"
          title="Configuración"
          onClick={() => navigate("/config")}
        >
          <img
            src={configIcon}
            alt="Configuración"
          />
        </button>

      </div>

    </nav>

  );
}

export default Navbar;