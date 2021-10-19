import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
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
  const [user, setUser] = useState({});
  const [errors, setError] = useState("");

  // const [name, setName] = useState("");
  //Sign In With  Google
  const signInGoogle = () => {
    signInWithPopup(auth, googleProvider).then((result) => {
      setUser(result.user);
    });
  };

  //Update User
  useEffect(() => {
    const unsubscriber = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      }
    });

    return unsubscriber;
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
  return { user, signInGoogle, LogOut, signInEmail, errors, signUp };
};

export default useFirebase;
