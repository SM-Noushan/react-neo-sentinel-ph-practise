import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
  GoogleAuthProvider,
  FacebookAuthProvider,
  signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  updateProfile,
} from "firebase/auth";
import auth from "../firebase/firebase.config";

export const AuthContext = createContext("");

const AuthProvider = ({ children }) => {
  const facebookProvider = new FacebookAuthProvider();
  const googleProvider = new GoogleAuthProvider();
  facebookProvider.setCustomParameters({
    display: "popup",
  });
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log(currentUser);
      setUser(currentUser);
      setLoading(false);
    });
    return () => unSubscribe();
  }, []);
  const createUserWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };
  const createUserWithFacebook = () => {
    setLoading(true);
    return signInWithPopup(auth, facebookProvider);
  };
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const logIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };
  const updateProfileInfo = (name, url) => {
    setLoading(true);
    updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: url,
    });
  };

  const authInfo = {
    user,
    loading,
    createUser,
    createUserWithGoogle,
    createUserWithFacebook,
    logOut,
    logIn,
    updateProfileInfo,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};
AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
export default AuthProvider;
