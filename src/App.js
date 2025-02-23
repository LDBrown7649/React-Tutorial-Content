import './App.css';
import Greet from './Components/Greet'
import Message from './Components/Message';
import Counter from './Components/Counter'

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
      <Message/>
      <Counter addValue={3}/>
    </div>
  );
}

export default App;
