import React from 'react'

import './herobanner.styles.css'



const HeroBanner = ({imageUrl,text,textPosition, gridNumber}) => {
    return(
        <div className="heroBanner" style={{backgroundImage:`url(${imageUrl})`, gridColumn:gridNumber}} >
            <h1 >{text}</h1>
        </div>

    )

}

export default HeroBanner