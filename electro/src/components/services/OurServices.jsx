// OurServices.js

import React from 'react';
import './OurServices.css';
import logo from '../../assets/logo1.jpg';
import { Link } from 'react-router-dom';

const OurServices = () => {

    const accordionData = [
        {
          title: "Electrical Wiring",
          points: [
            " New Home Interior Electrical",
            " Light Wiring",
            " New Light Installation",
          ],
        },
        {
          title: "A/C Service",
          points: [
            " All A/C Services",
            " Regular inspection and cleaning of AC components.",
          ],
        },
        {
          title: "Geyser Service",
          points: [
            " Coil Service",
            " Geyser Service",
            " Cleaning Service",
          ],
        },
        {
          title: "Plumbing Service",
          points: [
            " Burst pipes, Water leaks, Clogged drains, and etc",
            " Installation",
            " Routine plumbing inspections",
          ],
        }
      ];

  return (
    <div className="our_services">
      <div className="our_services_heading">
      <h2>Our Services</h2>
      </div>
      <div className="service_container">

        <div className="service_row1">
        <div className="service_item">
          <img src={logo} alt="Service 1" />
          <p>Service 1 Description</p>
        </div>
        <div className="service_item">
          <img src={logo} alt="Service 2" />
          <p>Service 2 Description</p>
        </div>
        <div className="service_item">
          <img src={logo} alt="Service 3" />
          <p>Service 3 Description</p>
        </div>
        </div>


        <div className="service_row2">
        <div className="service_item">
          <img src={logo} alt="Service 4" />
          <p>Service 4 Description</p>
        </div>
        <div className="service_item">
          <img src={logo} alt="Service 5" />
          <p>Service 5 Description</p>
        </div>
        <div className="service_item">
          <img src={logo} alt="Service 6" />
          <p>Service 6 Description</p>
        </div>
        </div>

      </div>
    </div>
  );
}

export default OurServices;
