import { useState } from "react";
import "../styles/interfaces_navbar/home.css";

function Home() {
  /*
    Por ahora las canciones son datos visuales.
    Más adelante este arreglo puede reemplazarse
    fácilmente por datos provenientes del backend.
  */
  const [songs] = useState([
    // TRAP LATINO
    {
      id: 1,
      title: "OLIMPO",
      artist: "MILO J",
      genre: "Trap Latino"
    },
    {
      id: 2,
      title: "La canción",
      artist: "Oasis",
      genre: "Trap Latino"
    },
    {
      id: 3,
      title: "Goteo",
      artist: "Duki",
      genre: "Trap Latino"
    },
    {
      id: 4,
      title: "She Don't Give a Fo",
      artist: "Duki",
      genre: "Trap Latino"
    },
    {
      id: 5,
      title: "Givenchy",
      artist: "Duki",
      genre: "Trap Latino"
    },

    // REGGAETÓN
    {
      id: 6,
      title: "Diles",
      artist: "Farruko",
      genre: "Reggaetón"
    },
    {
      id: 7,
      title: "Hay Algo En Ti",
      artist: "Zion y Lennox",
      genre: "Reggaetón"
    },
    {
      id: 8,
      title: "X",
      artist: "Nicky Jam",
      genre: "Reggaetón"
    },
    {
      id: 9,
      title: "China",
      artist: "Anuel AA",
      genre: "Reggaetón"
    },
    {
      id: 10,
      title: "Yonaguni",
      artist: "Bad Bunny",
      genre: "Reggaetón"
    },

    // ELECTRÓNICA
    {
      id: 11,
      title: "In My Mind",
      artist: "Dynoro",
      genre: "Electrónica"
    },
    {
      id: 12,
      title: "Faded",
      artist: "Alan Walker",
      genre: "Electrónica"
    },
    {
      id: 13,
      title: "The Spectre",
      artist: "Alan Walker",
      genre: "Electrónica"
    },
    {
      id: 14,
      title: "Animals",
      artist: "Martin Garrix",
      genre: "Electrónica"
    },
    {
      id: 15,
      title: "Alone",
      artist: "Marshmello",
      genre: "Electrónica"
    },

    // ROCK
    {
      id: 16,
      title: "Oye Mi Amor",
      artist: "Maná",
      genre: "Rock"
    },
    {
      id: 17,
      title: "Molinos de Viento",
      artist: "Mägo de Oz",
      genre: "Rock"
    },
    {
      id: 18,
      title: "Smells Like Teen Spirit",
      artist: "Nirvana",
      genre: "Rock"
    },
    {
      id: 19,
      title: "Believer",
      artist: "Imagine Dragons",
      genre: "Rock"
    },

    // POP
    {
      id: 20,
      title: "Billie Jean",
      artist: "Michael Jackson",
      genre: "Pop"
    },
    {
      id: 21,
      title: "Thriller",
      artist: "Michael Jackson",
      genre: "Pop"
    },
    {
      id: 22,
      title: "Blinding Lights",
      artist: "The Weeknd",
      genre: "Pop"
    },
    {
      id: 23,
      title: "As It Was",
      artist: "Harry Styles",
      genre: "Pop"
    },

    // SALSA
    {
      id: 24,
      title: "Pedro Navaja",
      artist: "Rubén Blades",
      genre: "Salsa"
    },
    {
      id: 25,
      title: "Periódico de Ayer",
      artist: "Héctor Lavoe",
      genre: "Salsa"
    },
    {
      id: 26,
      title: "Llorarás",
      artist: "Oscar D'León",
      genre: "Salsa"
    },
    {
      id: 27,
      title: "Vivir Mi Vida",
      artist: "Marc Anthony",
      genre: "Salsa"
    },

    // HIP-HOP
    {
      id: 28,
      title: "Lose Yourself",
      artist: "Eminem",
      genre: "Hip-Hop"
    },
    {
      id: 29,
      title: "HUMBLE.",
      artist: "Kendrick Lamar",
      genre: "Hip-Hop"
    },
    {
      id: 30,
      title: "God's Plan",
      artist: "Drake",
      genre: "Hip-Hop"
    },
    {
      id: 31,
      title: "SICKO MODE",
      artist: "Travis Scott",
      genre: "Hip-Hop"
    },

    // DANCE
    {
      id: 32,
      title: "One More Time",
      artist: "Daft Punk",
      genre: "Dance"
    },
    {
      id: 33,
      title: "Levels",
      artist: "Avicii",
      genre: "Dance"
    },

    // HOUSE
    {
      id: 34,
      title: "Don't You Worry Child",
      artist: "Swedish House Mafia",
      genre: "House"
    }
  ]);

  const [selectedSong, setSelectedSong] = useState(songs[0]);

  /*
    Preparado para que posteriormente el backend
    pueda entregar las canciones desde FastAPI.
  */
  const genres = [
    ...new Set(
      songs.map((song) => song.genre)
    )
  ];

  const handleSongClick = (song) => {
    setSelectedSong(song);
  };

  return (
    <div className="home-container">

      {/* =====================================
          SIDEBAR DE MÚSICA
          ===================================== */}

      <aside className="playlist-side">

        <div className="playlist-background-glow"></div>

        <div className="playlist-content">

          <div className="playlist-header">

            <div>
              <span className="playlist-subtitle">
                AETHEL MUSIC
              </span>

              <h1>MÚSICA</h1>
            </div>

            <span className="sort-text">
              Orden ↕
            </span>

          </div>


          <div className="music-scroll">

            {genres.map((genre) => (

              <section
                className="category"
                key={genre}
              >

                <h2 className="category-title">
                  {genre}
                </h2>


                {songs
                  .filter(
                    (song) =>
                      song.genre === genre
                  )
                  .map((song) => (

                    <button
                      key={song.id}
                      className={
                        selectedSong.id === song.id
                          ? "song active"
                          : "song"
                      }
                      onClick={() =>
                        handleSongClick(song)
                      }
                    >

                      <span className="play-icon">
                        ▶
                      </span>


                      <span className="song-info">

                        <span className="song-title">
                          {song.title}
                        </span>

                        <span className="song-artist">
                          {song.artist}
                        </span>

                      </span>


                      {selectedSong.id === song.id && (

                        <span className="equalizer">

                          <span></span>
                          <span></span>
                          <span></span>
                          <span></span>

                        </span>

                      )}

                    </button>

                  ))}

              </section>

            ))}

          </div>

        </div>

      </aside>


      {/* =====================================
          REPRODUCTOR
          ===================================== */}

      <main className="player-side">

        <div className="player-background"></div>


        <div className="player-content">

          {/* LOGO / PORTADA */}

          <div className="album-art">

            <div className="album-glow"></div>

            <img
              src="/img/Logotri.png"
              alt="Aethel Music"
              className="logo-player"
            />

          </div>


          {/* INFORMACIÓN DE CANCIÓN */}

          <div className="now-playing">

            <span className="playing-label">
              REPRODUCIENDO
            </span>

            <h2>
              {selectedSong.title}
            </h2>

            <p>
              {selectedSong.artist}
            </p>

          </div>


          {/* BARRA DE PROGRESO */}

          <div className="time-controls">

            <span>
              00:00
            </span>

            <div className="progress-bar">

              <div className="progress-fill"></div>

              <div className="progress-dot"></div>

            </div>

            <span>
              02:49
            </span>

          </div>


          {/* CONTROLES PRINCIPALES */}

          <div className="player-controls">

            <button
              type="button"
              title="Anterior"
            >
              ⏮
            </button>

            <button
              type="button"
              className="play-button"
              title="Reproducir"
            >
              ▶
            </button>

            <button
              type="button"
              title="Siguiente"
            >
              ⏭
            </button>

          </div>


          {/* CONTROLES SECUNDARIOS */}

          <div className="secondary-controls">

            <button
              type="button"
              title="Repetir"
            >
              ↻
            </button>

            <button
              type="button"
              title="Aleatorio"
            >
              🔀
            </button>

            <button
              type="button"
              title="Favorito"
            >
              ♡
            </button>

          </div>

        </div>

      </main>

    </div>
  );
}

export default Home;