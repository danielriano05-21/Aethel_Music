import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";

import "./styles/App.css";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";


function Inicio() {

  const navigate = useNavigate();


  // =========================================
  // IMPORTAR ARCHIVO
  // =========================================

  const handleArchivo = (e) => {

    const archivo = e.target.files[0];

    // Si el usuario cancela el selector
    if (!archivo) return;

    /*
      POR AHORA:
      El archivo no se guarda ni se reproduce.
      Únicamente mandamos al usuario a Home.
    */

    navigate("/home");

  };


  return (

    <main className="inicio">

      <div className="contenedor">


        {/* =====================================
            LOGO TRIANGULAR
            ===================================== */}

        <div className="logo-area">

          <img
            src="/img/Logotri.png"
            className="logo-tri"
            alt="Aethel Music"
          />

        </div>


        {/* =====================================
            PARTE DERECHA
            ===================================== */}

        <div className="contenido-inicio">


          {/* LOGO DE TEXTO */}

          <div className="logo-text-area">

            <img
              src="/img/Logotext.png"
              className="logo-text"
              alt="Aethel Music"
            />

          </div>


          {/* =====================================
              BOTÓN ABRIR ARCHIVOS
              ===================================== */}

          <div className="archivo-area">

            <input
              type="file"
              id="archivo"
              hidden
              accept="audio/*"
              onChange={handleArchivo}
            />


            <a
              href="#"
              className="boton-archivo"
              onClick={(e) => {

                e.preventDefault();

                document
                  .getElementById("archivo")
                  .click();

              }}
            >


              <span className="icono-archivo">

                <img
                  src="/img/carp.png"
                  alt=""
                />

              </span>


              <span className="texto-archivo">
                ABRIR ARCHIVOS
              </span>


              <span className="brillo-boton"></span>


            </a>

          </div>


        </div>

      </div>

    </main>

  );

}


function App() {

  return (

    <BrowserRouter>

      <div className="app-layout">


        {/* =====================================
            NAVBAR
            ===================================== */}

        <Navbar />


        {/* =====================================
            CONTENIDO DE LAS INTERFACES
            ===================================== */}

        <div className="page-content">

          <Routes>


            {/* =================================
                MENÚ INICIAL
                ================================= */}

            <Route
              path="/"
              element={<Inicio />}
            />


            {/* =================================
                HOME
                ================================= */}

            <Route
              path="/home"
              element={<Home />}
            />


          </Routes>

        </div>


      </div>

    </BrowserRouter>

  );

}


export default App;