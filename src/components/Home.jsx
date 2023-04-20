import React, { useContext } from 'react';
import { authContext } from '../Providers/AuthProviders';

const Home = () => {
  const user = useContext(authContext)
  return (
    <div>
      {user && <span>{user.displayName}</span> }
    </div>
  );
};

export default Home;