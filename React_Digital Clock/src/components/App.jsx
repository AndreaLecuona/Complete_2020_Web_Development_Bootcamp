import React from "react";

function App() {
  // setInterval(updateHours, 1000);

  const time = new Date().toLocaleTimeString();

  const [hours, setHours] = React.useState(time);

  function updateHours() {
    const newTime = new Date().toLocaleTimeString();
    //Si no lo pongo en otra variable y lo pongo directamente
    // en el paréntesis de setHours, entonces el interval crashea
    setHours(newTime);
  }

  return (
    <div className="container">
      <h1>{hours}</h1>
      <button onClick={updateHours}>Get Time</button>
    </div>
  );
}

export default App;
