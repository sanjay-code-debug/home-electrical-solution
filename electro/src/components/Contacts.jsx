import React from 'react';
import call from '../assets/call.png'
import mail from '../assets/mail.png'
import whatsApp from '../assets/whatsApp.png'
import { Link } from 'react-router-dom';
import "./Contacts.css";

const Contacts = () => {
  // Function to handle phone call
  const handlePhoneCall = () => {
    window.location.href = 'tel:9108349257'; // Replace with the actual phone number
  };

  // Function to handle email
  const handleEmail = () => {
    window.location.href = 'mailto:pradhanloka5652@gmail.com?subject=Hello'; // Replace with the actual email address
  };

  // Function to open WhatsApp contact
  const openWhatsAppContact = () => {
    // Replace the number with the actual WhatsApp number, and 'Hello!' with the desired message
    window.open('https://wa.me/+919108349257?text=Hello!', '_blank');
  };

  return (
    <div className='btn_container'>
      <div className='btn_box'>
        
        <img className='contact_img' src={call} alt="" onClick={handlePhoneCall}/>
      <button title='Call' className='btn' onClick={handlePhoneCall}>Call</button>
      </div>

      <div className='btn_box'>
      <img className='contact_img' src={mail} alt="" onClick={handleEmail}/>
      <button title='Email' className='btn' onClick={handleEmail}>Email</button>
      </div>

      <div className='btn_box'>
      <img className='contact_img' src={whatsApp} alt="" onClick={openWhatsAppContact} />
      <button title='WhatsApp' className='btn' onClick={openWhatsAppContact}>WhatsApp</button>
      </div>
    </div>
  );
};

export default Contacts;
