import React from 'react'

import './formation.styles.css'

import FormationButton from '../../components/formationButton/formationButton.component'

const formations = () => {
    return(
       
        <div className="footballanatomy">
             {/* <div className="formation">
                <HeroBanner imageUrl="formation.jpg"  text='Formation' textPosition='flex-end' 
                gridNumber='1/6' />
            </div>  */}
            <h1>What is a formation?</h1>
            <h3>
                This is how the players in a team generally position themselves on the pitch.
            </h3>
            <h2>Types of formations</h2>
            <div>
                <FormationButton text="4-3-3" />
            </div>
            
            {/* <button>3-4-3</button>
            <button>3-5-2</button>
            <button>4-3-3</button>
            <button>4-3-2-1</button>
            <button>4-3-1-2</button>
            <button>4-1-4-1</button>
            <button>4-4-2</button>
            <button>4-4-2 diamond</button>
            <button>4-5-1</button>
            <button>4-4-1-1</button>
            <button>5-4-1</button>
            <button>5-3-2</button> */}
           
        </div>
       
    )

}

export default formations