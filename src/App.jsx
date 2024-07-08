import React from "react";

const App = () => {
  const names = [
    "Alice",
    "Bob",
    "Charlie",
    "Diana",
    "Evan",
    "Fiona",
    "George",
    "Hannah",
    "Ian",
    "Julia",
  ];

  function randomName() {
    let i = Math.floor(Math.random() * names.length);
    console.log(names[i]);
    return <h1>{names[i]}</h1>;
  }
  randomName();
  return <>{randomName()}</>;
};

export default App;
