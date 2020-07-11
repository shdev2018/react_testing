import React from 'react';
import ToDoList from './Components/ToDoList';
import NavBar from './Components/NavBar';
import './App.css';

function App() {
  return (
    <div>
      <NavBar />
      <ToDoList />
    </div>
  )
}

export default App;