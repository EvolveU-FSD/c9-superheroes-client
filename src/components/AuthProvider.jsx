import { createContext, useContext, useEffect, useState } from 'react';

export const AuthContext = createContext(null);

export const useAuth = () => {
  return useContext(AuthContext);
};

const AuthProvider = ({ children }) => {
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

  const authContextValue = {
    profile
  };

  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
