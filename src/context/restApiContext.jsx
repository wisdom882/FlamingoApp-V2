import { useState, createContext, useContext, useEffect } from 'react'

const APIURL = "https://restapi-flamingo-05051967.herokuapp.com/api"
export const RestApiContext = createContext()

export default function RestApiProvider({children}){
    const [user, setUser] = useState(null)

    const loginUser = async(emailAddress, password) => {
        try {
            const rawResponse = await fetch(`${APIURL}/users/login`,{
                method:"POST",
                headers:{
                    'Accept':'application/json',
                    'Content-Type':'application/json'
                },
                body: JSON.stringify({
                  email:emailAddress,
                  password:password
                })
            })
           
          const retrievedUser = await rawResponse.json()
          console.log(retrievedUser)
          const {firstName,lastName,email,token} = retrievedUser
          setUser({firstName,lastName,email,token})
          console.log(user)
          } catch (error) {
            console.log(error);
          }
        };
    const signOut = async(user) => {
        try{
            const rawResponse = await fetch(`${APIURL}/users/signOutUser`,{
                method:"POST",
                headers:{
                    'Accept':'application/json',
                    'Content-Type':'application/json'
                },
            })
            const signedOut = await rawResponse.json()
            console.log(signedOut)
        } catch(error){
            console.log(error)
        }
    }
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

