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
    const googleProvider = new firebase.auth.GoogleAuthProvider()
    googleProvider.setCustomParameters({prompt:"select_account"});
    setGoogleProvider(googleProvider)

    const unSubscribeFromAuth= firebase.auth().onAuthStateChanged(async (user) => {
      try {
        if (user) {
          const { uid, displayName, email } = user;
          setUser({ uid, displayName, email });
          setLoadingUser(true);
          createUserProfileDocument(user);

        
        } else {
          setUser(null);
        }
      } catch (error) {
        console.error(error);
      }
    });

    return unSubscribeFromAuth;
  }, [firebaseApp]);

  const createUserProfileDocument = async (userAuth, additionalData) => {

    if(!userAuth) return;
    const userRef = db.doc(`users/${userAuth.uid}`)
    const snapshot = await userRef.get()

    if(!snapshot.exists){
      const {displayName,email} = userAuth;
      const createdAt =  new Date()
      additionalData = additionalData? {displayName,...additionalData} : {displayName}
      try{
        await userRef.set({
          email,
          createdAt,
          ...additionalData,
        });
      }catch(error){
        console.log("Error creating user", error.message)
      }
    }

    return userRef
  };

  return (
    <FirebaseContext.Provider
      value={{ 
        firebaseApp, 
        db, 
        auth, 
        user, 
        setUser, 
        loadingUser,
        createUserProfileDocument, 
        googleProvider }}
    >
      {children}
    </FirebaseContext.Provider>
  );
}

export const useFirebase = () => useContext(FirebaseContext)
