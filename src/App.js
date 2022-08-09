import './App.css';
import Greet from './components/Greet';
import Hello from './components/Hello';
import Message from './components/Message';
import Welcome from './components/Welcome';

function App() {
  return (
    <div className="App">
      <Greet name="Bruce" heroName="Batman">
        <p>This is children prop</p>
      </Greet>
      <Greet name="Clark" heroName="Superman">
        <button>ACTION</button>
      </Greet>
      <Welcome name="Diana" heroName="Wonder Woman"/>
      <Welcome name="Lee" heroName="Spiderman"/>
      <Hello />
      <Message/>
    </div>
  );
}

export default App;
