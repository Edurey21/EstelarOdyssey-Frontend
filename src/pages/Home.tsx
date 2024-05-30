import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Home.css';
import logo from '../img/logo.png';
import image1 from '../img/image1.png'; // Asegúrate de agregar imágenes adicionales aquí
import image2 from '../img/image2.png';

const Home: React.FC = () => (
  <div className="home-container">
    <header className="home-header">
      <img src={logo} alt="Logo" className="home-logo" />
      <h1>Bienvenido a Estelar Odyssey: Explorando lo Inexplorado</h1>
      <h2>
        <p>Embárcate en una Odisea Estelar</p>
      </h2>   
      <p>
        Explora lo inexplorado, descubre nuevos mundos y civilizaciones, y lidera tu propia tripulación en Estelar Odyssey, el juego de simulación de exploración espacial más inmersivo. Aventuras intergalácticas te esperan.
      </p>
      <img src={image1} alt="Exploración Espacial" className="home-image" />
    </header>
    <section className="home-services">
      <h2>Servicios que ofrecemos</h2>
      <div className="service">
        <h3>Exploración Espacial Inmersiva</h3>
        <p>
          Desde descubrir nuevas galaxias hasta interactuar con mundos alienígenas, nuestra experiencia de exploración espacial inmersiva te llevará a descubrir lo desconocido de manera emocionante y cautivadora.
        </p>
      </div>
      <div className="service">
        <h3>Gestión Estratégica</h3>
        <p>
          En Estelar Odyssey: Explorando lo Inexplorado, el éxito de tu viaje espacial depende de tu habilidad para gestionar recursos, tripulación y nave espacial. La gestión estratégica es clave para el éxito de tu viaje.
        </p>
      </div>
      <div className="service">
        <h3>Interacción Social y Cooperativa</h3>
        <p>
          En Estelar Odyssey: Explorando lo Inexplorado, la interacción social y cooperativa es esencial para el éxito del viaje. Únete a equipos espaciales, forma alianzas y explora lo desconocido juntos.
        </p>
      </div>
      <div className="service">
        <h3>Personalización de la Nave Espacial</h3>
        <p>
          En Estelar Odyssey: Explorando lo Inexplorado, la personalización de la nave espacial es una parte esencial de la experiencia de juego. Personaliza tu nave espacial para adaptarla a tus necesidades y estilo de juego.
        </p>
      </div>
    </section>
    <section className="home-discover">
      <h2>Descubriendo Nuevos Mundos: El Éxito de la Misión Estelar</h2>
      <p>
        Acompáñanos en un viaje hacia lo desconocido y descubre cómo Estelar Odyssey permitió a los jugadores explorar nuevos mundos, gestionar recursos y tripulación, y forjar relaciones intergalácticas, todo mientras disfrutan de una experiencia de juego inmersiva.
      </p>
      <ul>
        <li>Exploración de mundos desconocidos</li>
        <li>Gestión de recursos y tripulación</li>
      </ul>
      <img src={image2} alt="Descubriendo Nuevos Mundos" className="home-image" />
    </section>
    <footer className="home-footer">
      <Link to="/add-suggestion">Dar una Sugerencia</Link>
      <Link to="/view-suggestions">Ver Sugerencias</Link>
    </footer>
  </div>
);

export default Home;
