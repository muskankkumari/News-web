import React from "react";
import axios from "axios";

const Practice = () => {

  const request = () => {
      console.log('Namaste')
    const promiseObj = axios({method: 'get',
    url: 'file.txt'},);
    promiseObj.then = (res) => {
    console.log(res);
    alert("good")
    };
  };

  return (
    <>
      <button id="btn" onClick={request}>
        Button
      </button>
    </>
  );
};

export default Practice;
