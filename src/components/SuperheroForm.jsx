import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';

const SuperheroForm = (props) => {
  const { superhero, buttonText, handleSubmit } = props;
  const [name, setName] = useState('');
  const [alterEgo, setAlterEgo] = useState('');
  useEffect(() => {
    if (superhero) {
      setAlterEgo(superhero.alterEgo);
      setName(superhero.name);
    }
  }, [superhero]);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        const superheroValues = {
          alterEgo,
          name
        };
        handleSubmit(superheroValues);
      }}
    >
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
          {buttonText}
        </Button>
      </Box>
    </form>
  );
};

export default SuperheroForm;
