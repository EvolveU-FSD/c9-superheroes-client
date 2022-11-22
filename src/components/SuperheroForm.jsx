import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';

const SuperheroForm = () => {
  const [name, setName] = useState('');
  const [alterEgo, setAlterEgo] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const superhero = {
      name,
      alterEgo
    };
    const response = await fetch('/api/superhero', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(superhero)
    });
    const newSuperhero = await response.json();
    console.log(newSuperhero);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'flex-start',
          padding: 2,
          gap: 2
        }}
      >
        <TextField
          id="outlined-basic"
          label="Name"
          variant="outlined"
          onChange={(event) => setName(event.target.value)}
          value={name}
        />
        <TextField
          id="outlined-basic"
          label="Alter Ego"
          variant="outlined"
          onChange={(event) => setAlterEgo(event.target.value)}
          value={alterEgo}
        />
        <Button type="submit" variant="contained" size="large">
          Add Superhero
        </Button>
      </Box>
    </form>
  );
};

export default SuperheroForm;
