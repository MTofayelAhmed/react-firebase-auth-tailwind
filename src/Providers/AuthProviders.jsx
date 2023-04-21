import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../fireBase/firebase.config';


export const authContext = createContext(null)

const auth = getAuth(app);

const AuthProviders = ({children }) => {
const [user, setUser]= useState(null)

const createUser = (email, password)=>{
  return createUserWithEmailAndPassword(auth, email, password)
}

const signIn = (email, password)=>{
  return signInWithEmailAndPassword(auth, email, password)
}
useEffect(()=>{
 const unsubscribe=  onAuthStateChanged(auth, currentUser =>{
console.log('auth state change', currentUser)
setUser(currentUser)
  });

return ()=>{
  unsubscribe()
}

},[] )

const logOut = ()=>{
  return signOut(auth)
}
const authInfo = {
  createUser,
  signIn, 
  user,
  logOut
}

  return (
    <authContext.Provider value ={authInfo}>
      {children}
    </authContext.Provider>
  );
};

export default AuthProviders;