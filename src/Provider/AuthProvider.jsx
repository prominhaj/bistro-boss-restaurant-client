import React, { createContext, useEffect, useState } from "react";
import { app } from "../Firebase/Firebase.config";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";

export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createAccount = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  // Google Login
  const googleProvider = new GoogleAuthProvider();
  const googleLogin = () => {
    return signInWithPopup(auth, googleProvider)
  }

  const logOut = () => {
    return signOut(auth);
  };

  const updateName = (name) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
    });
  };

  useEffect(() => {
    const disConnect = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => disConnect()
  }, []);

  // Auth Info
  const authInfo = {
    createAccount,
    updateName,
    login,
    googleLogin,
    logOut,
    user,
    loading
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
