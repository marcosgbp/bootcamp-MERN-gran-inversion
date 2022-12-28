import logo from './logo.svg';
import './App.css';
import { PersonCard } from './components/PersonCard';

function App() {
  return (
    <div className="App">
      <PersonCard nombre="Marcos" apellido="Benítez" edad="26" hairColor="Blue"/>
      <PersonCard nombre="Maria" apellido="Cabrera" edad="27" hairColor="Pink"/>
      <PersonCard nombre="Marcelo" apellido="Benítez" edad="41" hairColor="Black"/>
      <PersonCard nombre="Blas" apellido="Benítez" edad="66" hairColor="Blue"/>
      <PersonCard nombre="Maria" apellido="Paredes" edad="66" hairColor="Red"/>
    </div>
  );
}

export default App;
