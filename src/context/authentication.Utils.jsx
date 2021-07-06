
const APIURL = "https://restapi-flamingo-05051967.herokuapp.com/api"


export const signinUser = async(emailAddress, password) => {
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
      return retrievedUser;
      } catch (error) {
        console.log(error);
        return null;
      }
    };

export const logOut = async () => {
        try{
            const rawResponse = await fetch(`${APIURL}/users/signOutUser`,{
                method:"POST",
                headers:{
                    'Accept':'application/json',
                    'Content-Type':'application/json'
                },
            })
            const signedOut = await rawResponse.json()
            return signedOut
        } catch(error){
            console.log(error)
            return null
    }
}