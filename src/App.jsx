
import './App.css';
import Navbar from './Componentes/navbar/navbar';

import Plataformas from './Componentes/plataforams/plataformas';

import React from 'react';

function App() {
  return (
    <body>
      <div>
        <header>
          <h1>¡Bienvenido a mi página de inicio!</h1>
          <nav>
            {<Navbar/>}
          </nav>
        </header>
        <main>
          <section>
            <h2>¡Bienvenido!</h2>
            <p>Esta es la sección principal de mi página.</p>
          </section>


          <section>
            <h2>{<Plataformas/>}</h2>
            <p>Aquí puedes encontrar información sobre nosotros.</p>
          </section>

          
          {/* Otras secciones de la página */}
        </main>
        <footer>
          <p>¡Gracias por visitarnos!</p>
        </footer>
      </div>
    </body>
  );
}

export default App;





/*Hace un Navbar primero, le da ciertos detalles
Despues hace un header con el titulo y una imagen.
Despues de eso lo que hace es un slider*/
