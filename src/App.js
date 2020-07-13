import React from 'react';
import ToDoList from './Components/ToDoList';
import NavBar from './Components/NavBar';
import './App.css';

function App() {
  const fName = "Shaun"
  const lName = "Hall"

  return (
    <div>
      <h1>Hello {fName + " " + lName}</h1>
      <NavBar />
      <ToDoList />
    </div>
  )
}

export default App;