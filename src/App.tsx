import React from 'react';
import './App.css';

function App() {
  const names = ["Roma", "Sasha", "Dima", "Sergey"]
  const users = [{name:"Roma"}, {name:"Sasha"}, {name:"Dima"}, {name:"Sergey"}]

  // const liElements = names.map(n => <li>{n}</li>)
  const liElements = users.map((u, index) => <li key={index}>{u.name}</li>)

  return (
    <div className="App">

    </div>
  );
}

export default App;
