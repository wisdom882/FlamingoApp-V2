import React from "react";
import { useState } from "react";
import { useRestApi } from "../../context/restApiContext";
//import axios from "axios";

import "./footyItem.styles.css";

const AddFootballItem = () => {
  const [fileToUpload, setFileToUpload] = useState(null);
  const [publicUrl, setPublicUrl] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [response, setResponse] = useState("");

  const { fileUpload, addFootballItem, user } = useRestApi();

  const handleChange = (event) => {
    const { name, value } = event.target;
    name === "Title" ? setTitle(value) : setDescription(value);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();

    console.log(user);
    try {
      const newFootballItem = await addFootballItem(
        title,
        description,
        publicUrl,
        user.token
      );

      setResponse(
        newFootballItem
          ? "Football item succesfully added"
          : "Football item could not be added"
      );
    } catch (error) {
      setResponse(error.message);
      console.log(error);
    }
  };

  const handleFile = (e) => {
    setFileToUpload(e.target.files[0]);
    console.log(e.target.files[0]);
  };

  const handleUpload = async () => {
    let formData = new FormData();
    formData.append("file", fileToUpload);
    const filePath = await fileUpload(formData);
    setPublicUrl(filePath);
    console.log(filePath);
  };
  return (
    <div>
      <div className="container">
        <div className="footballItemForm">
          <form onSubmit={handleSubmit}>
            <h2>Add Football Item</h2>
            <div className="inputBox">
              <input
                type="text"
                name="Title"
                required="required"
                onChange={handleChange}
              />
              <span>Title</span>
            </div>

            <div className="description">
              <span>Description</span>
              <textarea
                type="text"
                name="Description"
                required="required"
                onChange={handleChange}
                className="textArea"
              ></textarea>
            </div>

            {/* <div className="inputBox">
                <input type="text" name='' required='required' />
                <span>Image Url</span>
            </div> */}
            <div className="chooseAndUploadFile">
              <input type="file" onChange={handleFile} />
              <button onClick={handleUpload} type="button" className="upload">
                Upload file
              </button>
              <div>
                <p className="publicUrl">
                  {publicUrl ? publicUrl : "No file uploaded"}
                </p>
              </div>
            </div>
            <div className="inputBox">
              <input type="submit" name="Submit" value="Add" />
            </div>
          </form>
          <div>
            <span>{response}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddFootballItem;
