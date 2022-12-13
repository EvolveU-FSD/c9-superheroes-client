import { Box } from '@mui/material';
import { Outlet } from 'react-router-dom';
import AuthProvider from './AuthProvider';
import NavBar from './NavBar';

const Portal = () => {
  return (
    <AuthProvider>
      <Box>
        <NavBar />
        <Outlet />
      </Box>
    </AuthProvider>
  );
};

export default Portal;
