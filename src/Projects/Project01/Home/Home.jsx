import React from "react";
import "./Home.css";
import Category from "../Category/Category";

const Home = () => {
 
  return (
    <>
      <div className="home-hero d-flex justify-content-center align-items-center flex-column">
        <h1>BREAKING-NEWS</h1>
        <h5 className="h5">
          Breaking News Today, Top Headlines, <br />
          Live Updates | Breaking-News
        </h5>
        <h6 className="h6">India,Delhi</h6>
      </div>
      {/* api : https://newsapi.org/v2/top-headlines?country=in&category=general&apiKey=f64189f87f2441f0b47bc580aa45e44d
        source : News API
     
     */}
      <div className="home"><Category/></div>
    </>
  );
};

export default Home;
