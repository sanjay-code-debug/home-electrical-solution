import React from "react";
import ACLogo from "../assets/ac.svg";
import Gryser from "../assets/geyser.webp";
import light from "../assets/light.webp";
import logo1 from "../assets/logo1.jpg";
import Electrical_Wiring_Logo from "../assets/home-and-wiring.svg";
import plumbing from "../assets/plumbing.webp";
import "./HomePage.css";
import OurServices from "./OurServices";

import { Link } from "react-router-dom";
import Navbar from "./navbar";

const HomePage = () => {
  return (
    // <>
        // <div className="continer">
        //     <div className="img_container">
        //         <img src= {logo} alt="electrician" />

        //     </div>
        //     <div className="heading_container">
        //         <div className="heading">
        //         <h1>Welcome To Electrical Service</h1>

        //         </div>
        //     </div>
        // </div>

    //     <div className="section1">
    //     <div className="services">
    //                 <div className="service">
    //                     <div className="service_img">
    //                     <img src={Electrical_Wiring_Logo} alt="home and wiring" />

    //                     </div>
    //                     <Link to="/Services">Electrical Wiring</Link>
    //                 </div>

    //                 <div className="service">
    //                 <div className="service_img">
    //                 <img src={ACLogo} alt="AC" />

    //                 </div>
    //                     <Link to="/Services">A/C Service</Link>
    //                 </div>

    //                 <div className="service">
    //                 <div className="service_img">
    //                 <img src={Gryser} alt="Gryser" />

    //                 </div>
    //                     <Link to="/Services">Geyser Service</Link>
    //                 </div>

    //                 <div className="service">
    //                     <div className="service_img">
    //                     <img src={plumbing} alt="home and wiring" />

    //                     </div>
    //                     <Link to="/Services">Plumbing Service</Link>
    //                 </div>

    //                 <div className="service">
    //                 <div className="service_img">
    //                 <img src={light} alt="light" />

    //                 </div>
    //                     <Link to="/Services">New Electrical light Design</Link>
    //                 </div>
    //             </div>
    //     </div>
    // </>

    // <>
    //   <div className="home_container">
         
    //   <div className="continer">
    //         <div className="img_container">
    //             <img src= {logo1} alt="electrician" />

    //         </div>
    //         <div className="heading_container">
    //             <div className="heading">
    //             <h1>Welcome To Home Electrical Soloution</h1>

    //             </div>
    //         </div>
    //     </div>
        

    //     <div className="about">
    //       <div className="about_heading">
    //         <h1>ABOUT US</h1>
    //         <div className="about_para">
    //           <p>
    //             "Welcome to <span id="light">Lokanath's Home Electrical Solutions!</span>  I am Lokanath,
    //             a seasoned electrician with a wealth of experience spanning <span id="light">six
    //             years</span>  in the field. With a deep-rooted passion for all things
    //             electrical, I've dedicated my career to providing top-notch
    //             solutions and ensuring the safe and efficient functioning of
    //             electrical systems.
    //           </p>

    //           <p>
    //             My electrician services are exclusively <span id="light">available in the vibrant city of Bangalore.</span> 
    //              Whether you're in need of emergency
    //             electrical assistance or require expertise in electrical wiring,
    //             AC and geyser installations, plumbing, or switchboard
    //             installation and repair, I am here to deliver reliable and
    //             efficient solutions.
    //           </p>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </>

    <>
   <Navbar/>
   <OurServices/>
   
    </>
  );
};

export default HomePage;
