import React from 'react'

import './football-anatomy.styles.css'

import HeroBanner from '../../components/herobanner/herobanner.component'

const footballAnatomy = () => {
    return(
       
        <div className="footballanatomy">
            <div className="formation">
                <HeroBanner imageUrl="formation.jpg"  text='Formation' textPosition='flex-end' gridNumber='1/6'/>
            </div>
            <div className='position'>
                <HeroBanner imageUrl="positions.png"  text='Positions' textPosition='flex-start'gridNumber='2/6'/>
            </div>
            <div className='tactics'>
                <HeroBanner imageUrl="Tactics.jpg"  text='Tactics' textPosition='flex-start'gridNumber='6/6'/>
            </div>   
        </div>
       
    )

}

export default footballAnatomy