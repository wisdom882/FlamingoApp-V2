import { useState, createContext, useContext, useEffect } from 'react'
import {signinUser, logOut} from './authentication.Utils.jsx'

const APIURL = "https://restapi-flamingo-05051967.herokuapp.com/api"
export const RestApiContext = createContext()

export default function RestApiProvider({children}){
    const [user, setUser] = useState(null)

    const loginUser = async(emailAddress, password) => {
        const returnedUser = await signinUser(emailAddress,password);
        if(returnedUser === null) return;
        const {firstName,lastName,email,token} = returnedUser
        setUser({firstName,lastName,email,token})
        console.log("restApi",user)
    };
    const signOut = logOut;
   
    return(
            <RestApiContext.Provider value={{
                loginUser,
                signOut,
                user
            }}>
                {children}
            </RestApiContext.Provider>
        )
}

export const useRestApi = () => useContext(RestApiContext)

