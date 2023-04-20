import React, { createContext } from 'react';



export const authContext = createContext(null)



const AuthProviders = ({children }) => {
  const user = {displayName: 'sagor nadi'}
  return (
    <authContext.Provider value ={user}>
      {children}
    </authContext.Provider>
  );
};

export default AuthProviders;