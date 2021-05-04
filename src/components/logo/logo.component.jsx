import React from 'react'

import './logo.styles.css'

import  {ReactComponent as SvgLogo}  from '../../assets/logo.svg'





const Logo = ({width = '70', height = '70', logoType, imageUrl}) => {

return(
    <div className='Logo'>
        {
            logoType !== "svg" ? (
                <div>
                    <img src={imageUrl} alt="" style={{width:`${width}px`, height:`${height}px`}}></img>
                </div>
            ) : (
                <SvgLogo style={{width:`${width}px`, height:`${height}px`}}/>
            )
        }
    </div>
)
}

export default Logo
