import logo from './logo.svg';
import './App.css';
import Greet from './Components/Greet'
import Welcome from './Components/Welcome';
import Hello from './Components/Hello';

function App() {
  return (
    <div className="App">
      <Greet name='Bruce' heroName = "Batman" overrideColor = 'Black'>
        <p>Child props</p>
      </Greet>
      <Greet name='Diana' heroName = "Wonder Woman" overrideColor = 'Yellow'>
        <button>Action</button>
      </Greet>
      <Greet name='Clark' heroName = "Superman"/>
      <Welcome name ='Hal' heroName = "Green Lantern"/>
      <Welcome name = 'Oliver' heroName = "Green Arrow"/>
      <Welcome name = 'Vic' heroName = "Cyborg"/>
    </div>
  );
}

export default App;
