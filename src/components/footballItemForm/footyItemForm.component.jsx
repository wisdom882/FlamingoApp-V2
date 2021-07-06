import React from 'react'

import './footyItem.styles.css'

const addFootballItem = () =>{
    return (

    <div className="footballItemForm">
        <form>
            <h2>Add Football Item</h2>
            <div className="inputBox">
                <input type="text" name='' required='required' />
                <span>Title</span>
            </div>

            <div className="inputBox">
                <input type="text" name='' required='required' />
                <span>Description</span>
            </div>

            <div className="inputBox">
                <input type="text" name='' required='required' />
                <span>Image Url</span>
            </div>
            <div className="inputBox">
                <input type="submit" name='' value='Add' />
            </div>
        </form>

    </div>
    )
}

export default addFootballItem;