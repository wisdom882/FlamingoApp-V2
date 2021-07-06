import  React from 'react'

import FormInput from '../../components/form-input/form-input.component'
import './SignIn.styles.css'
import CustomButton from '../../components/custom-button/custom-button.component'

import { useRestApi } from '../../context/restApiContext'


const SignIn = ({history}) => {
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')

    const {loginUser, user, signOut } = useRestApi()
    //const {auth, googleProvider} = useFirebase()

    const handleChange = (event) => {
        const {name, value} = event.target
        name === 'email' ? setEmail(value) : setPassword(value)
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        await loginUser(email, password)
        console.log('user Signed in',user)
        if(user !== null)
        {
            history.replace("/userhome");
        }
        setEmail("");
        setPassword("");
        } 
      

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
                    <CustomButton  isGoogleSignIn>
                        SIGN IN WITH GOOGLE
                    </CustomButton>
                </div>

                {/* <div className="small-gap">
                    <input type='submit' onClick={() => auth.signOut()} value="SIGN OUT"/>
                </div> */}
            </form>
        </div>
    );
};

export default SignIn