import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import SuperheroForm from './SuperheroForm';

function EditSuperheroPage() {
  const navigate = useNavigate();
  const [superhero, setSuperhero] = useState();
  const params = useParams();
  const id = params.id;
  console.log('the id from props is', id);
  useEffect(() => {
    const getSuperhero = async () => {
      const response = await fetch(`/api/superhero/${id}`);
      const data = await response.json();
      setSuperhero(data);
      console.log(data);
    };
    getSuperhero();
  }, [id]);

  const handleSubmit = async (superhero) => {
    const response = await fetch(`/api/superhero/${id}`, {
      method: 'PUT',
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
    <SuperheroForm
      superhero={superhero}
      buttonText="Edit Superhero"
      handleSubmit={handleSubmit}
    />
  );
}

export default EditSuperheroPage;
