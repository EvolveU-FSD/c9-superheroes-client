import { Box, Button, Typography } from '@mui/material';

const Home = () => {
  return (
    <Box
      sx={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'primary.main'
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          gap: 4,
          padding: 10,
          borderRadius: 5,
          boxShadow: '0px 0px 50px 5px rgba(0,0,0,0.3)',
          backgroundColor: '#ffffff'
        }}
      >
        <Typography variant="h2">Superhero Database</Typography>
        <Typography variant="body1">
          Please login to see the superheroes!
        </Typography>
        <Button href="/api/login" variant="contained" size="large">
          Login
        </Button>
      </Box>
    </Box>
  );
};

export default Home;
