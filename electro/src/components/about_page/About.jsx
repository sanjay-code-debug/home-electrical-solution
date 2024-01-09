import React from 'react'
import "./About.css";
// import ImageSlider from '../Image_Slider/ImageSlider';
import Slideshow from '../Image_Slider/ImageSlider';

const About = () => {
  return (
    <>
    <div className="about">
          <div className="about_heading">
            <h1>ABOUT US</h1>
            <div className="about_para">
              <p>
                "Welcome to <span id="light">Lokanath's Home Electrical Solutions!</span>  I am Lokanath,
                a seasoned electrician with a wealth of experience spanning <span id="light">six
                years</span>  in the field. With a deep-rooted passion for all things
                electrical, I've dedicated my career to providing top-notch
                solutions and ensuring the safe and efficient functioning of
                electrical systems.
              </p>

              <p>
                My electrician services are exclusively <span id="light">available in the vibrant city of Bangalore.</span> 
                 Whether you're in need of emergency
                electrical assistance or require expertise in electrical wiring,
                AC and geyser installations, plumbing, or switchboard
                installation and repair, I am here to deliver reliable and
                efficient solutions.
              </p>
            </div>
          </div>
        </div>
       {/* <ImageSlider/> */}
       <Slideshow />
    </>
  )
}

export default About
