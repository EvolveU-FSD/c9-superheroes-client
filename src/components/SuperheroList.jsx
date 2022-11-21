import React, { useEffect, useState } from "react";

import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

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
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Alter Ego</TableCell>
              <TableCell>Powers</TableCell>
              <TableCell>Weaknesses</TableCell>
              <TableCell>Sidekicks</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {superheroes.map((superhero) => (
              <TableRow
                key={superhero.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {superhero.name}
                </TableCell>
                <TableCell>{superhero.alterEgo}</TableCell>
                <TableCell>
                  <ul>
                    {superhero.powers.map((power) => {
                      return <li key={power}>{power}</li>;
                    })}
                  </ul>
                </TableCell>
                <TableCell>
                  <ul>
                    {superhero.weaknesses.map((weakness) => {
                      return <li key={weakness}>{weakness}</li>;
                    })}
                  </ul>
                </TableCell>
                <TableCell>
                  <ul>
                    {superhero.sidekicks.map((sidekick) => {
                      return <li key={sidekick.name}>{sidekick.name} ({sidekick.alterEgo})</li>;
                    })}
                  </ul>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default SuperheroList;
