//  api : https://newsapi.org/v2/top-headlines?country=in&category=general&apiKey=f64189f87f2441f0b47bc580aa45e44d
//         source : News API

import {React, useState,useEffect } from 'react';
import axios from 'axios';
import "./category.css"
import img from "../img.jpeg"

const Category = (props) => {
  const [data,setData] = useState("");
  const newsData = async () => {
    await axios
      .get(props.name ? `https://newsapi.org/v2/top-headlines?country=in&category=${props.name}&apiKey=f64189f87f2441f0b47bc580aa45e44d`:
        "https://newsapi.org/v2/top-headlines?country=in&apiKey=f64189f87f2441f0b47bc580aa45e44d"
      )
      .then((res) => setData(res.data.articles));
  };
  useEffect(() => {
    newsData();
  }, [props.name]);
  return (
    <>
     
      <div className="home-container">
        <h3>
          <u className='cat'>{props.name}</u>
        </h3>
        <div className=" dg">{data? data.map((item,index)=><>
        <div className='boxes-home'>
          <h4><strong>{item.title}</strong></h4>
          {
            (item.urlToImage) !== null ?  <img src={item.urlToImage} className="img-fluid home-img" alt="Image not found..." /> : <img src={img} className='className="img-fluid home-img default-img'/>
          }
          <p>{item.content} </p><span><a href={item.url} target="blank">View More...</a></span>
         </div>
          </>) :"Loading..."}</div>
      </div>
    </>
  );
};


export default Category
