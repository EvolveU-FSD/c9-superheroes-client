import React, { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Link, useParams } from 'react-router-dom';
import { Button } from '@mui/material';

const SuperheroDetail = () => {
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
  // const superhero = {
  //   name: 'Superman',
  //   alterEgo: 'Clark Kent',
  //   powers: ['Flying', 'Super Strength'],
  //   weaknesses: [],
  //   sidekicks: [{ _id: 'jfdkaergveio43tfvea', name: 'Bob', alterEgo: 'Jim' }]
  // };
  if (!superhero) {
    return <div>Loading</div>;
  }
  return (
    <div>
      <Card variant="outlined" sx={{ minWidth: 275, maxWidth: 400 }}>
        <CardContent sx={{ textAlign: 'left' }}>
          <Typography variant="h2" color="text.secondary" gutterBottom>
            {superhero.name}
          </Typography>

          <Typography variant="h5" component="div">
            {superhero.alterEgo}
          </Typography>

          <br />
          <div>
            Powers:
            <ul>
              {superhero.powers.map((power) => {
                return <li key={power}>{power}</li>;
              })}
            </ul>
          </div>
          <br />
          <div>
            Weaknesses:
            <ul>
              {superhero.weaknesses.map((weakness) => {
                return <li key={weakness}>{weakness}</li>;
              })}
            </ul>
          </div>
          <br />
          <div>
            Sidekicks:
            <ul>
              {superhero.sidekicks.map((sidekick) => {
                return (
                  <li key={sidekick._id}>
                    {sidekick.name}({sidekick.alterEgo})
                  </li>
                );
              })}
            </ul>
          </div>
          <Link to={`/edit/${id}`}>
            <Button variant="outlined" size="large">
              Edit {superhero.name}
            </Button>
          </Link>
        </CardContent>
      </Card>
    </div>
  );
};

export default SuperheroDetail;
