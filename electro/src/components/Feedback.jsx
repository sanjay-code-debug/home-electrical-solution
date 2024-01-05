import React from 'react';
import "./Feedback.css";

const Feedback = () => {
 //function to handele the feedback
 const handleFeedback = () =>{
      window.location.href ='mailto:pradhanloka5652@gmail.com?subject=FeedBack '
 }

  return (
    <div className="feedback">
        <button className='feedback_btn' onClick={handleFeedback} type="submit">Send Feedback</button>
    </div>
  );
};

export default Feedback;
