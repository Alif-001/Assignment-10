import FirebaseInit from "./../Firebase/Firebase.init";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  GithubAuthProvider,
  onAuthStateChanged,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

import { useEffect, useState } from "react";
import { useHistory } from "react-router";

FirebaseInit();

const useFirebase = () => {
  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();
  const history = useHistory();
  const redirectURL = "/home";

  const [user, setUser] = useState({});
  const [error] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const handleGoogleLogin = () => {
    setIsLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  const handleGithubLogin = () => {
    return signInWithPopup(auth, githubProvider);
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      }
      setIsLoading(false);
    });
  }, [auth]);

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        setUser({});
        history.push(redirectURL);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => setIsLoading(false));
  };

  const handleUserRegister = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const handleUserLogin = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  return {
    handleGoogleLogin,
    user,
    error,
    isLoading,
    handleGithubLogin,
    handleLogout,
    handleUserRegister,
    handleUserLogin,
  };
};

export default useFirebase;
