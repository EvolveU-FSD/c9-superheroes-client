import React, { useEffect, useState } from "react";
const SuperheroDetail = (props) => {
  const superhero = props.superhero;
  const { name, powers, weaknesses, location, alterEgo } = superhero;
  return (
    <div>
      <p>Name:</p>
      <p>{name}</p>
      <p>Alter Ego:</p>
      <p>{alterEgo}</p>
      <p>Powers:</p>
      <ul>
        {powers.map((power) => {
          return <li key={power}>{power}</li>;
        })}
      </ul>
      {weaknesses && weaknesses.length > 0 && (
        <>
          <p>Weaknesses:</p>
          <ul>
            {weaknesses.map((weakness) => {
              return <li key={weakness}>{weakness}</li>;
            })}
          </ul>
        </>
      )}
      <p>Location:</p>
      {!location ? (
        <p>Unknown</p>
      ) : (
        <div>
          <p>City:</p>
          <p>{location.city}</p>
          <p>Province:</p>
          <p>{location.province}</p>
          <p>Country:</p>
          <p>{location.country}</p>
        </div>
      )}
    </div>
  );
};

const SuperheroList = () => {
  const [superheroes, setSuperheroes] = useState([]);

  useEffect(() => {
    const getSuperheros = async () => {
      const response = await fetch("/api/superhero");
      const superheroesData = await response.json();
      setSuperheroes(superheroesData);
    };

    getSuperheros();
  }, []);

  return (
    <div>
      <h2>Superhero List</h2>
      {superheroes.length > 0
        ? superheroes.map((superhero) => {
            return <SuperheroDetail key={superhero._id} superhero={superhero} />;
          })
        : "No superheroes"}
    </div>
  );
};

export default SuperheroList;
