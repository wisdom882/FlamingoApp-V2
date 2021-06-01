import React from 'react'

import './tactics.styles.css'

import HeroBanner from '../../components/herobanner/herobanner.component'

const tactics = () => {
    return(
       
        <div className="footballanatomy">
             <div className="tactics">
                <HeroBanner imageUrl="tactics.jpg"  text='Tactics' textPosition='flex-end' gridNumber='1/6' />
            </div> 
        </div>
       
    )

}

export default tactics