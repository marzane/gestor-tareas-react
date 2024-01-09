import './App.css';
import logoFreeCodeCamp from "./img/freeCodeCamp.svg";

function App() {

  return (
    <div className="App">
      <div className='logo-freecodecamp-contenedor'>
        <img
          className='logo-freecodecamp'
          src={logoFreeCodeCamp}
          alt='logo-freecodecamp' />
      </div>

    </div>
  );
}

export default App;
