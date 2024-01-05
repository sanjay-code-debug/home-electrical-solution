import React from "react";
import { useState } from "react";
import "./Services.css";
import Contacts from "./Contacts";
import Feedback from "./Feedback";

const Services = () => {
  const [activeSection, setActiveSection] = useState(null);

  // Data for accordion sections
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

  // Function to toggle active accordion section
  const toggleSection = (index) => {
    setActiveSection(activeSection === index ? null : index);
  };
  return (
    <>
    <div className="Service_Container">
      
    <div className="heading">
      <marquee id="movingHeading" behavior="" direction="left">All Services Are Only Aveliable In Bangalore</marquee>
    </div>
      <div className="container">
      <div>
        {accordionData.map((section, index) => (
          <div key={index} className="accordion-section">
            <div
              className={`accordion-header ${
                activeSection === index ? "active" : ""
              }`}
              onClick={() => toggleSection(index)}
            >
              {section.title}
            </div>
            {activeSection === index && (
              <div className="accordion-content">
                <ul>
                  {section.points.map((point, pointIndex) => (
                    <li key={pointIndex}><span className="dot">.</span>{point}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
      </div>

      <Contacts/>
      <Feedback/>
    </div>
    </>
  );
};

export default Services;
