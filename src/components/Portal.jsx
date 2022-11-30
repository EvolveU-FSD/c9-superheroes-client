import { Box } from '@mui/material';
import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from './NavBar';

const Portal = () => {
  const [profile, setProfile] = useState();

  useEffect(() => {
    async function fetchProfile() {
      const response = await fetch('/api/profile');

      if (!response.ok) {
        return;
      }

      const profile = await response.json();

      setProfile(profile);
    }

    fetchProfile();
  }, []);

  return (
    <Box>
      <NavBar profile={profile} />
      <Outlet />
    </Box>
  );
};

export default Portal;
