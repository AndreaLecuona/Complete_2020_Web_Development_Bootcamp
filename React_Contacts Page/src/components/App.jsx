import React from "react";
import Card from "./Card";
import contacts from "../contacts";

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <Card
        nombre={contacts[0].name}
        foto={contacts[0].imgURL}
        telefono={contacts[0].phone}
        email={contacts[0].email}
      />
      <Card
        nombre={contacts[1].name}
        foto={contacts[1].imgURL}
        telefono={contacts[1].phone}
        email={contacts[1].email}
      />
      <Card
        nombre={contacts[2].name}
        foto={contacts[2].imgURL}
        telefono={contacts[2].phone}
        email={contacts[2].email}
      />
    </div>
  );
}

export default App;
