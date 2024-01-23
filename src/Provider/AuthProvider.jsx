import React, { createContext } from "react";
import { app } from "../Firebase/Firebase.config";
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const createAccount = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const updateName = (name) => {
    return updateProfile(auth.currentUser, {
        displayName: name
    })
  }

  // Auth Info
  const authInfo = {
    createAccount,
    updateName,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
