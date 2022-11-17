import React, { useState } from "react";

const SuperheroForm = () => {
  const [name, setName] = useState("");
  const [alterEgo, setAlterEgo] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    const superhero = {
      name,
      alterEgo,
    };
    const response = await fetch("/api/superhero", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(superhero),
    });
    const newSuperhero = await response.json();
    console.log(newSuperhero);
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input onChange={(event) => setName(event.target.value)} value={name} />
      </label>
      <label>
        Alter Ego:
        <input
          onChange={(event) => setAlterEgo(event.target.value)}
          value={alterEgo}
        />
      </label>
      <button type="submit">Add Superhero</button>
    </form>
  );
};

export default SuperheroForm;
