import './App.css';
import Greet from './Components/Greet'
import Message from './Components/Message';
import Counter from './Components/Counter'
import Welcome from './Components/Welcome';

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
      <Welcome name='Lachlan' heroName = 'Test User'/>
      <Message/>
      <Counter addValue={3}/>
    </div>
  );
}

export default App;
