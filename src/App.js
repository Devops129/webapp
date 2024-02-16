import React from 'react';
import TodoList from './components/TodoList.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Add your ToDo</h1>
      <TodoList />
    </div>
  );
}

export default App;
