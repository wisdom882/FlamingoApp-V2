import { useState, createContext, useContext, useEffect } from "react";
import { signinUser, logOut, signupUser } from "./authentication.Utils.jsx";
import { fileUpload, addFootballItem } from "./footballItems.Utils.jsx";

//const APIURL = "https://restapi-flamingo-05051967.herokuapp.com/api"
const APIURL = "localhost:8080/api";
export const RestApiContext = createContext();

export default function RestApiProvider({ children }) {
  const [user, setUser] = useState(null);

  const loginUser = async (emailAddress, password) => {
    const returnedUser = await signinUser(emailAddress, password);
    if (returnedUser === null) return;
    const { firstName, lastName, email, token, isAdmin } = returnedUser;
    setUser({ firstName, lastName, email, token, isAdmin });
    console.log("restApi", user);
    return returnedUser;
  };

  const signOut = logOut;

  return (
    <RestApiContext.Provider
      value={{
        loginUser,
        setUser,
        signOut,
        signupUser,
        fileUpload,
        addFootballItem,
        user,
      }}
    >
      {children}
    </RestApiContext.Provider>
  );
}

export const useRestApi = () => useContext(RestApiContext);
