import React from 'react'

import './unauthenticatedhome.styles.css'

import HeroBanner from '../../components/herobanner/herobanner.component'

const UnAuthenticatedHome = () => {
    return(
        <div className="unAuthHome">
            <HeroBanner imageUrl="avocado.jpg"  text='Avocado' textPosition='flex-end' gridNumber='1'/>
            <HeroBanner imageUrl="Perfume.jpg"  text='Perfume' textPosition='flex-start'gridNumber='2/3'/>
            <HeroBanner imageUrl="streetPicture.jpg"  text='Streeet' textPosition='flex-end' gridNumber='1/2'/>
        </div>
    )

}

export default UnAuthenticatedHome