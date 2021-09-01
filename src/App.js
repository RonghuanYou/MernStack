import './App.css';
import React from 'react';
import PersonCard from './components/PersonCard';


function App() {
  const pCard1 = { firstName: "Jane", lastName: "Doe", age: 45, hairColor: "Black"}
  const pCard2 = { firstName: "John", lastName: "Smith", age: 88, hairColor: "Brown" }
  const pCard3 = { firstName: "Millard", lastName: "Fillmore", age: 50, hairColor: "Brown" }
  const pCard4 = { firstName: "Maria", lastName: "Smith", age: 62, hairColor: "Brown" }

  return (
    <div className="App">
      <PersonCard pCard={pCard1}/>
      <PersonCard pCard={pCard2}/>
      <PersonCard pCard={pCard3}/>
      <PersonCard pCard={pCard4}/>
    </div>
  );
}
export default App;
