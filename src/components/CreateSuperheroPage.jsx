import React from 'react';
import { useNavigate } from 'react-router-dom';
import SuperheroForm from './SuperheroForm';

function CreateSuperheroPage() {
  const navigate = useNavigate();
  const handleSubmit = async (superhero) => {
    const response = await fetch('/api/superhero', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(superhero)
    });
    const newSuperhero = await response.json();
    console.log(newSuperhero);
    navigate(-1);
  };
  return (
    <SuperheroForm handleSubmit={handleSubmit} buttonText="Add Superhero" />
  );
}

export default CreateSuperheroPage;
