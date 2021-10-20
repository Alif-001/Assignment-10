import React from "react";
import helpImg from "./../../images/help-call/help-img.jpg";
import phone from "./../../images/help-call/phone.png";

const Emergency = () => {
  return (
    <div className="container ">
      <div className="row m-5">
        <div className="col p-0">
          <img className="p-0 img-fluid" src={helpImg} alt="" width="365px" />
        </div>
        <div className="col ">
          <img src={phone} alt="" />
        </div>
        <div className="col  pt-5 mt-4">
          <h3>Emergency Cases</h3>
          <p className="p-font">
            Please feel welcome to contact our friendly reception staff with any
            general or medical enquiry, you can call us at +002 01061245741
          </p>
        </div>
      </div>
    </div>
  );
};

export default Emergency;
