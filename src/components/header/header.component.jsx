import React from 'react'

import './header.styles.css'

import Logo from '../logo/logo.component'

import {Link} from 'react-router-dom'

import HeroBanner from '../../components/herobanner/herobanner.component'

const Header = () => {

return (


    <div className="header">
        <Logo />
        <div className="menu">

            <Link to="/userhome" className='menuList'>
                Shop
            </Link>
            <Link to="/userhome" className='menuList'>
                Search
            </Link>
            <Link to="/userhome" className='menuList'>
                SignUp
            </Link>
        </div>
    </div>
    )
}

export default Header
