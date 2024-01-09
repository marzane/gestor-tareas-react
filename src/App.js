import './App.css';
import logoFreeCodeCamp from "./img/freeCodeCamp.svg";
import GestorTareas from "./components/GestorTareas";

function App() {

  return (
    <div className="App">
      <div className='logo-freecodecamp-contenedor'>
        <img
          className='logo-freecodecamp'
          src={logoFreeCodeCamp}
          alt='logo-freecodecamp' />
      </div>
      <GestorTareas />
    </div>
  );
}

export default App;
