import  React from 'react'

import FormInput from '../../components/form-input/form-input.component'

import './SignIn.styles.css'

import CustomButton from '../../components/custom-button/custom-button.component'

import { useFirebase } from '../../context/firebaseContext'

const SignIn = () => {
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')

    const { auth,googleProvider } = useFirebase()

    const handleChange = (event) => {
        const {name, value} = event.target
        name === 'email' ? setEmail(value) : setPassword(value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        setEmail('')
        setPassword('')
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
                
                <div>
                    <CustomButton type="submit" 
                    value='submit'>
                            SIGN IN
                    </CustomButton>
                </div>

                <div>
                    <CustomButton onClick={() => auth.signInWithPopup(googleProvider) }>
                        SIGN IN WITH GOOGLE
                    </CustomButton>
                </div>
            </form>
        </div>
    );
};

export default SignIn