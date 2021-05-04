import React from 'react'

import './unauthenticatedhome.styles.css'

import HeroBanner from '../../components/herobanner/herobanner.component'

const UnAuthenticatedHome = () => {
    return(
        <div className="unAuthHome">
            <HeroBanner imageUrl="Games.jpg"  text='Games' textPosition='flex-end' gridNumber='1'/>
            <HeroBanner imageUrl="Ball.jpg"  text='News' textPosition='flex-start'gridNumber='2/3'/>
        </div>
    )

}

export default UnAuthenticatedHome