import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  GithubAuthProvider,
  onAuthStateChanged,
  signOut,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { useEffect, useState } from "react";
import initializeFirebase from "../Firebase/Firebase.init";
initializeFirebase();
const useFirebase = () => {
  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();
  const [user, setUser] = useState({});
  const [errors, setError] = useState("");

  //Sign In With  Google
  const signInGoogle = () => {
    signInWithPopup(auth, googleProvider).then((result) => {
      setUser(result.user);
    });
  };
  const githubLogin = () => {
    signInWithPopup(auth, githubProvider)
      .then((result) => {
        setUser(result.user);
        setError("");
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  //Update User
  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      }
    });

    return unsubscribed;
  }, [auth]);

  //Sign In With Email password
  const signInEmail = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  // Sing Up With Email and Password

  const signUp = (email, password) => {
    // setName(name);
    createUserWithEmailAndPassword(auth, email, password)
      .then((user) => {
        console.log(user);
      })
      .catch((error) => {
        setError("User already Exist");
      });
  };

  //LogOut User
  const LogOut = () => {
    signOut(auth).then(() => {
      setUser({});
    });
  };
  return {
    user,
    signInGoogle,
    githubLogin,
    LogOut,
    signInEmail,
    errors,
    signUp,
  };
};

export default useFirebase;
