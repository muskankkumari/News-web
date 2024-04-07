import React from "react";
import "./Footer.css";
import { LuInstagram } from "react-icons/lu";
import { FaXTwitter, FaFacebook, FaLinkedinIn } from "react-icons/fa6";

const Footer = () => {
  return (
    <>
      <footer>
        <div class="col">
          <h1>Breaking-News</h1>
          <p>
            "Stay Informed, Stay Empowered: Your Ultimate Source for Timely and
            Trustworthy News. Uncover the Latest Headlines, In-Depth Analysis,
            and Breaking Stories – Your Gateway to a World of Information."
          </p>
        </div>
        <div class="col">
          <h1>Links</h1>
          <a href="#">Home</a>
          <a href="#">Services</a>
          <a href="#">Bookmark</a>
          <a href="#">Share</a>
        </div>
        <div class="col">
          <h1>Follow Us:</h1>
          <a href="#">
            <LuInstagram /> <i>Breaking_News564</i>
          </a>
          <a href="#">
            <FaXTwitter /> <i> Breaking_News</i>
          </a>
          <a href="#">
            <FaFacebook /> <i>News-Hub-Latest</i>
          </a>
          <a href="#">
            <FaLinkedinIn /> <i>Latest-Khabre</i>
          </a>
        </div>
      </footer>
    </>
  );
};

export default Footer;
