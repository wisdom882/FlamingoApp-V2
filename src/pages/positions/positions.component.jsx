import React from 'react'

import './positions.styles.css'

import HeroBanner from '../../components/herobanner/herobanner.component'

const positions = () => {
    return(
       
        <div className="footballanatomy">
             <div className="positions">
                <HeroBanner imageUrl="goalie.jpg"  text='GoalKeepers' textPosition='flex-end'/>
                <HeroBanner imageUrl="positions.jpg"  text='Defenders' textPosition='flex-end'/>
                <HeroBanner imageUrl="positions.jpg"  text='Midfielders' textPosition='flex-end'/>
                <HeroBanner imageUrl="positions.jpg"  text='Strikers' textPosition='flex-end'/>
            </div> 
        </div>
       
    )

}

export default positions