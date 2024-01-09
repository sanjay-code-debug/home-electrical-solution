// OurServices.js

import React, { useState } from "react";
import "./OurServices.css";
import logo from "../../assets/logo1.jpg";
import { Link } from "react-router-dom";
import x from "../../assets/x.svg";

const OurServices = () => {
  const modalData = [
    {
      title: "Modal 1",
      content: "This is the first paragraph of modal content.",
      additionalContent: "This is the second paragraph of modal content.",
    },
    // Add more modal data as needed
  ];

  const [popUp, setPopUp] = useState(false);
  console.log(popUp)

  // Function to open modal with specific content
  const openPopUp = () => {
    
    setPopUp(!popUp);
    console.log(popUp);
  };

  // Function to close modal
  const closePopUp = () => {
    setPopUp(!popUp);
    console.log(popUp);
  };

  return (
    <div className="our_services">
      <div className="our_services_heading">
        <h1>Our Services</h1>
      </div>
      <div className="service_container">
        <div className="service_row1">
          <div className="service_item" onClick={() => openPopUp()}>
            <img src={logo} alt="Service 1" />
            <p>Service 1 Description</p>
          </div>
          <div className="service_item" onClick={() => openPopUp()}>
            <img src={logo} alt="Service 2" />
            <p>Service 2 Description</p>
          </div>
          <div className="service_item" onClick={() => openPopUp()}>
            <img src={logo} alt="Service 3" />
            <p>Service 3 Description</p>
          </div>
        </div>

        <div className="service_row2">
          <div className="service_item" onClick={() => openPopUp()}>
            <img src={logo} alt="Service 4" />
            <p>Service 4 Description</p>
          </div>
          <div className="service_item" onClick={() => openPopUp()}>
            <img src={logo} alt="Service 5" />
            <p>Service 5 Description</p>
          </div>
          <div className="service_item" onClick={() => openPopUp()}>
            <img src={logo} alt="Service 6" />
            <p>Service 6 Description</p>
          </div>
        </div>
      </div>
      {/* render modal if it is open */}
      {/* <div className={`modal ${popUp ? "open" : ""}`}> */}
      <div className={` popUp ${popUp ? "modal1" : "close_pop"}`}>
        <div className="modal-content">
          <img src={openPopUp ? x : " "} alt="" onClick={closePopUp} />
          <span className="close" onClick={closePopUp}>
            &times;
          </span>
          <h1>hdfhjfdbhsbs</h1>
        </div>
        <div className="blob"></div>
      </div>
    </div>
  );
};

export default OurServices;
//<div className={`nav-menu ${isMobileMenuOpen ? "open" : ""}`}>
