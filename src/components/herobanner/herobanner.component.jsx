import React from 'react'
import {Link} from 'react-router-dom'
import './herobanner.styles.css'
import {useHistory} from 'react-router-dom'


const HeroBanner = ({imageUrl,text,textPosition, gridNumber,path}) => {

    //handleclick
    //take in path
    const history = useHistory();
    const handleClick = (path) => {
        console.log("clicks")
        console.log(path)
        history.push(path)
    }
    return(
        <div onClick={() => handleClick(path)} className="heroBanner" style={{backgroundImage:`url(${imageUrl})`, gridColumn:gridNumber}} >
            <h1 >{text}</h1>
        </div>
       

    )

}

export default HeroBanner