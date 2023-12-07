import './App.css';
import person from './personne'
import Card from './Cards';

function App() {
  
  return (
    <>
    <Card person={person[0]} />
    <Card person={person[1]} />
    <Card person={person[2]} />
    <Card person={person[3]} />
    <Card person={person[4]} />
    </>
  );
}

export default App;
