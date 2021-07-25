import React, { useState } from "react";
import emailjs from 'emailjs-com';
import "./style.css";

const Contact = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState(true);

  const handleSubmit = (e) =>{
    e.preventDefault();

    emailjs.send("service_r7b71dx","template_lo8t7a6",{
      name: name,
      email: email,
      message: message,
      }, "user_WLPYHrYRgzU0HNCQD5Ul3").then(function(response) {
        if(response.status === 200){
          setError(false)
        }
     }, function(error) {
          setError(true);
     });
  }

  return (
    <div className="contact-page">
      <svg preserveAspectRatio="none" viewBox="0 0 100 102" height="75" width="100%" version="1.1" xmlns="http://www.w3.org/2000/svg" class="svgcolor-light">
        <path d="M0 0 L50 100 L100 0 Z" fill="white" stroke="white"></path>
      </svg>
      <div className="header">
        <p className="CONTACT">CONTACT</p>
        <hr className="line"></hr>
      </div>
      <div>
      <form className="contact-form" onSubmit={handleSubmit}>
        <input className="contact-input" required placeholder="Name" type="text" value={name} onChange={(e) => setName(e.target.value)} />
        <input className="contact-input" required placeholder="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <textarea className="contact-input" required rows="10" placeholder="Type your message here" type="text" value={message} onChange={(e) => setMessage(e.target.value)} />
        <span className="success-message">{!error && "Message successfully sent!"}</span>
        <input className="contact-submit" type="submit" value="Submit" />
      </form>
      </div>
    </div>
  );
};

export default Contact;
