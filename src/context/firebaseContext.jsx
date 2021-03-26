import { useState, createContext, useContext, useEffect } from "react";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";
import "firebase/analytics";

//client credentials
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDR0sI5luNYpQiHGV7G4CC0rvtxVWsrArs",
  authDomain: "flamingoproject-69d59.firebaseapp.com",
  projectId: "flamingoproject-69d59",
  storageBucket: "flamingoproject-69d59.appspot.com",
  messagingSenderId: "13584757515",
  appId: "1:13584757515:web:7fea351b74010133ef280e",
  measurementId: "G-RQV10PXGST"
};

export const FirebaseContext = createContext();

export default function FirebaseProvider({ children }) {
  //whole app
  const [firebaseApp, setFirebaseApp] = useState();
  //the DB
  const [db, setDb] = useState();
  //authentication
  
  const [auth, setAuth] = useState();
  //load current user
  const [user, setUser] = useState(null);
  const [loadingUser, setLoadingUser] = useState(true);
  const [googleProvider, setGoogleProvider] = useState(null)

  
  useEffect(() => {
    //check if app is already running
    if (!firebaseApp && !firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    }
    //check if analytics is up
    if ("measurementId" in firebaseConfig) {
      firebase.analytics();
    }
    setFirebaseApp(firebase);
    setDb(firebase.firestore());
    setAuth(firebase.auth());
    setGoogleProvider(new firebase.auth.GoogleAuthProvider())

    firebase.auth().onAuthStateChanged(async (user) => {
      try {
        if (user) {
          const { uid, displayName, email } = user;
          setUser({ uid, displayName, email });
          setLoadingUser(true);
        } else {
          setUser(null);
        }
      } catch (error) {
        console.error(error);
      }
    });
  }, [firebaseApp]);

  return (
    <FirebaseContext.Provider
      value={{ 
        firebaseApp, 
        db, 
        auth, 
        user, 
        setUser, 
        loadingUser, 
        googleProvider }}
    >
      {children}
    </FirebaseContext.Provider>
  );
}

export const useFirebase = () => useContext(FirebaseContext)
