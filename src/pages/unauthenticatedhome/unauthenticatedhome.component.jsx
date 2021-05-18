import React from 'react'

import './unauthenticatedhome.styles.css'

import HeroBanner from '../../components/herobanner/herobanner.component'

const UnAuthenticatedHome = () => {
    return(
        <div>
             <div className="text">
                <h1 data-text="This is a football website that briefly
                    talks about the way football is being played,
                    organised and coached.">
                    This is a football website that briefly
                    talks about the way football is being played,
                    organised and coached.
                </h1>
            </div>
        <div className="unAuthHome">
            <HeroBanner imageUrl="Games.jpg"  text='Football Anatomy' textPosition='flex-end' gridNumber='1'/>
            <HeroBanner imageUrl="shop.jpg"  text='Shop' textPosition='flex-start'gridNumber='2/3'/>  
        </div>
        </div>
       
    )

}

export default UnAuthenticatedHome