import React from "react";
//import axios from "axios";

import "./footyItem.styles.css";

const addFootballItem = () => {
  const handleSubmit = () => {};

  const handleFile = (e) => {
    console.log(e.target.files[0]);
  };

  const handleUpload = () => {};
  return (
    <div className="footballItemForm">
      <form onSubmit={handleSubmit}>
        <h2>Add Football Item</h2>
        <div className="inputBox">
          <input type="text" name="" required="required" />
          <span>Title</span>
        </div>

        <div className="inputBox">
          <input type="text" name="" required="required" />
          <span>Description</span>
        </div>

        {/* <div className="inputBox">
                <input type="text" name='' required='required' />
                <span>Image Url</span>
            </div> */}
        <input type="file" onChange={handleFile} />
        <button onClick={handleUpload}>Upload file</button>
        <div className="inputBox">
          <input type="submit" name="" value="Add" />
        </div>
      </form>
    </div>
  );
};

export default addFootballItem;
