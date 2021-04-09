import  React from 'react'

import FormInput from '../../components/form-input/form-input.component'

import './SignIn.styles.css'

import CustomButton from '../../components/custom-button/custom-button.component'

import { useFirebase } from '../../context/firebaseContext'


const SignIn = ({history}) => {
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')

    const { auth,googleProvider } = useFirebase()
    

    const handleChange = (event) => {
        const {name, value} = event.target
        name === 'email' ? setEmail(value) : setPassword(value)
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
    
        try {
          const {user} = await auth.signInWithEmailAndPassword(email, password);
          if(user !== null)
          {
            history.replace("/userhome");
          }
          setEmail("");
          setPassword("");
        } catch (error) {
          console.log(error);
        }
      };

    return (
        <div className='sign-in'>
            <h2>I have already an account</h2>
            <span>-Sign in with your email and password</span>

            <form onSubmit={handleSubmit}>
                <div>
                    <FormInput name='email' 
                    type="email" 
                    value={email} 
                    label="email" 
                    handleChange={handleChange} required/>
                </div>
                <div>
                    <FormInput name='password' 
                    type="password" 
                    value={password} 
                    label="password" 
                    handleChange={handleChange} required/>
                </div>
                
                
                

                <div className="buttons">
                    <CustomButton type="submit" 
                    value='submit'>
                            SIGN IN
                    </CustomButton>
                    <CustomButton onClick={() => auth.signInWithPopup(googleProvider) } isGoogleSignIn>
                        SIGN IN WITH GOOGLE
                    </CustomButton>
                </div>

                <div className="small-gap">
                    <input type='submit' onClick={() => auth.signOut()} value="SIGN OUT"/>
                </div>
            </form>
        </div>
    );
};

export default SignIn