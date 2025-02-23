import './App.css';
import Greet from './Components/Greet'
import Message from './Components/Message';
import Counter from './Components/Counter'
import Welcome from './Components/Welcome';
import FuncClick from './Components/FuncClick';
import ClassClick from './Components/ClassClick';
import EventBind from './Components/EventBind';
import ParentComponent from './Components/ParentComponent';
import UserGreeting from './Components/UserGreeting';

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
      <FuncClick/>
      <ClassClick/>
      <EventBind/>
      <ParentComponent/>
      <UserGreeting/>
    </div>
  );
}

export default App;
