import React from "react";
import '../css/Contact.css';

function Contact({language}) {
  return (
    <div className="back-div">
      <div className="contact" id='contact'>
        <h2 className={language === 'ENGLISH' ? 'contact-title' : 'contact-title-ptbr'}>{language === 'ENGLISH' ? 'Message me' : 'Mandar mensagem'}</h2>
        <form className="contact-form" action="https://formsubmit.co/caioodsf@gmail.com" method="POST">
          <label id="name-label" htmlFor="name">{language === 'ENGLISH' ? 'Name' : 'Nome'}</label>
          <input autoComplete="off" type="text" name="name" id='name' required />
          <label id="email-label" htmlFor="email">Email</label>
          <input autoComplete="off" type="email" id='email' name="email" required />
          <label id="message-label" htmlFor="message">{language === 'ENGLISH' ? 'Message' : 'Mensagem'}</label>
          <textarea autoComplete="off" name="message" id='message' required></textarea>
          <input type="hidden" name="_captcha" value='false'/>
          <input type="hidden" name="_next" value='http://localhost:3000/'/>
          <button id="send-btn" type="submit">{language === 'ENGLISH' ? 'Send!' : 'Enviar!'}</button>
        </form> 
      </div>
    </div>
  )
}

export default Contact