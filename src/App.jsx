import logo from './logo.svg';
import './App.css';
import Navbar from './Componentes/navbar/navbar';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <header className="App-header">
       <main>
        <section className='Section1'>
        <img src={logo} className="App-logo" alt="logo" />
        </section>
        <section className='section2'>Esta es la seccion2</section>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        > </a>
          <section className='section3'> y esta es la seccion 3
          </section>
        
      
        </main>
      </header>
       
    </div>
  );
}

export default App;
