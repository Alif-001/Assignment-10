import React from "react";
import Banner from "../../Banner/Banner";
import HomeDetails from "../../HomeDetails/HomeDetails";
import About from "./../../Pages/About/About";
import "./Home.css";

const Home = () => {
  return (
    <div id="home">
      <Banner></Banner>
      <HomeDetails></HomeDetails>
      <About></About>
    </div>
  );
};

export default Home;
