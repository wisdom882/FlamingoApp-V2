import React from 'react'

import './unauthenticatedhome.styles.css'

import HeroBanner from '../../components/herobanner/herobanner.component'

const UnAuthenticatedHome = () => {
    return(
        <div>
             <div className="text">
                <h1 data-text="Football in glance.">
                    Football in a glance
                </h1>
            </div>
        <div className="unAuthHome" >
            <HeroBanner imageUrl="Games.jpg"  text='Football Anatomy' textPosition='flex-end' gridNumber='1' path='/footballanatomy'/>
            <HeroBanner imageUrl="shop.jpg"  text='Shop' textPosition='flex-start'gridNumber='2/3'/>  
        </div>
        </div>
       
    )

}

export default UnAuthenticatedHome