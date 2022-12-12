import { Box } from '@mui/material';
import { createContext, useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from './NavBar';

export const AuthContext = createContext(null);

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
    <AuthContext.Provider value={profile}>
      <Box>
        <NavBar />
        <Outlet />
      </Box>
    </AuthContext.Provider>
  );
};

export default Portal;
