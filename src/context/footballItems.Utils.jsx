import React from "react";
import { useRestApi } from "./restApiContext";

const APIURL = "http://localhost:8080/api";

export const fileUpload = async (formData) => {
  try {
    const rawResponse = await fetch(`${APIURL}/fileUpload`, {
      method: "POST",
      body: formData,
    });
    console.log(rawResponse);
    const retrievedUpload = await rawResponse.json();
    console.log(retrievedUpload);
    return retrievedUpload;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const addFootballItem = async (title, description, publicUrl, token) => {
  //const { user } = useRestApi();

  try {
    const rawResponse = await fetch(
      `${APIURL}/footballanatomy/addFootballItem`,
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          title: title,
          description: description,
          imageUrl: publicUrl,
          itemType: "formation",
        }),
      }
    );
    console.log(rawResponse);
    const retrievedUpload = await rawResponse.json();
    console.log(retrievedUpload);
    return retrievedUpload;
  } catch (error) {
    console.log(error);
    return null;
  }
};
