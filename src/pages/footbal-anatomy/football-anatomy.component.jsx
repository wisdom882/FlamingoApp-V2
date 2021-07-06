import React from 'react'

import './football-anatomy.styles.css'

import HeroBanner from '../../components/herobanner/herobanner.component'

const footballAnatomy = () => {
    return(
       
        <div className="footballanatomy">
            <div className='position'>
                <HeroBanner imageUrl="positions.png"  text='Positions' textPosition='flex-start'gridNumber='1/4'
                path='positions'/>
            </div>
            <div className="formation">
                <HeroBanner imageUrl="formation.jpg"  text='Formations' textPosition='flex-end' gridNumber='2/4'
                path='/formations'/>
            </div>
            <div className='tactics'>
                <HeroBanner imageUrl="Tactics.jpg"  text='Tactics' textPosition='flex-start'gridNumber='4/4'
                path='/tactics'/>
            </div>
            <div className='footballForm'>
                <HeroBanner imageUrl="addfootball.jpg"  text='Add Football Item' textPosition='flex-start'gridNumber='3/4'
                path='/footballForm'/>
            </div>   
        </div>
       
    )

}

export default footballAnatomy