import React from "react";

import { useFirebase } from "../context/firebaseContext";

export default function CheckIfUserIsLoggedIn() {
    const { user,
         loadingUser, 
         firebaseApp, 
         auth, 
         SignInWithGoogle, 
         signInWithEmailAndPassword 
        } = useFirebase();
    console.log(`User ${user}`, `Is loading User: ${loadingUser}`);

    

    return(
        <div>
            <button onClick = {() => SignOut(auth)}>SignOut</button>
            <button onClick = {SignInWithGoogle(() => firebaseApp,auth)}>SignIn with google</button>
        </div>
    )
}

