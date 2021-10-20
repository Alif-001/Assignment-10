import React from "react";
import Appointment from "../../Appointment/Appointment";
import Banner from "../../Banner/Banner";
import Emergency from "../../Emergency/Emergency";
import HomeDetails from "../../HomeDetails/HomeDetails";
import About from "./../../Pages/About/About";
import "./Home.css";

const Home = () => {
  return (
    <div id="home">
      <Banner></Banner>
      <HomeDetails></HomeDetails>
      <Appointment></Appointment>
      <Emergency></Emergency>
      <About></About>
    </div>
  );
};

export default Home;
