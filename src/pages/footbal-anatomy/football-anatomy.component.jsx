import React from 'react'

import './football-anatomy.styles.css'

import HeroBanner from '../../components/herobanner/herobanner.component'

const footballAnatomy = () => {
    return(
       
        <div className="footballanatomy">
            <div className='position'>
                <HeroBanner imageUrl="positions.png"  text='Positions' textPosition='flex-start'gridNumber='1/6'
                path='positions'/>
            </div>
            <div className="formation">
                <HeroBanner imageUrl="formation.jpg"  text='Formations' textPosition='flex-end' gridNumber='2/6'
                path='/formations'/>
            </div>
            <div className='tactics'>
                <HeroBanner imageUrl="Tactics.jpg"  text='Tactics' textPosition='flex-start'gridNumber='6/6'
                path='/tactics'/>
            </div>   
        </div>
       
    )

}

export default footballAnatomy