import React from 'react';
import emailjs from 'emailjs-com';
import styled from 'styled-components';


 function ContactUs() {

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_cokwtqh', 'template_mt720vh', e.target, 'user_tcnm7f96gYfYKXsxoBm7n')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset()
  }

  return (
    <Contact className="container">
    
    <form className="contact-form" onSubmit={sendEmail}>
    <div className='title'>Contact Me</div>
      <input type="hidden" name="contact_number" />
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input className= 'submit' type="submit" value="Send" />
    </form>
    </Contact>
    
  );
}

const Contact = styled.div`
font-family: 'Lobster', cursive;
width: 60%;
margin: auto;
margin-top: 2rem;
margin-bottom: 2rem;
display: flex;
justify-content: center;
box-shadow: 2px 2px 4px 5px #e6e8e6;

.title{
    font-family: 'Lobster', cursive;
}

form{
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    width: 500px;
    input{
        border-bottom: 1px solid black;
       border-top: none;
       border-right: none;
       border-left: none;
       margin-bottom: 1.5rem;
    }
    .submit{
        width: 100px;
        border: 1px solid black;
        margin-top: 1rem;
        border-radius: 10px;
    }
    div{
        text-align: center;
    }
}

`

export default ContactUs