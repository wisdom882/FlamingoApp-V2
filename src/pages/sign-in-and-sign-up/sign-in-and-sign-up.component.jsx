import React from 'react'

import './sign-in-and-sign-up.styles.css'

import SignIn from '../../components/SignIn/SignIn.component'
import SignUp from '../../components/sign-up/sign-up.component'

const SignInAndSignUpPage = ({history}) => (

    <div className='sign-in-and-sign-up'>
        <SignIn history={history}/>
        <SignUp />
    </div>
)

export default SignInAndSignUpPage