import "./contact.css";
import Phone from "../../img/phone.png";
import Email from "../../img/email.png";
import Address from "../../img/address.png";
import { useContext, useRef, useState } from "react";
// import emailjs from "emailjs-com";
// import { ThemeContext } from "../../context";

const Contact = () => {
  const formRef = useRef();
  const [done, setDone] = useState(false)


  const handleSubmit = (e) => {
    alert("submited");
  };

  return (
    <div className="c">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Let's discuss</h1>
          <div className="c-info">
            <div className="c-info-item">
              <img src={Phone} alt="" className="c-icon" />
              +91 8279 471 363
            </div>
            <div className="c-info-item">
              <img className="c-icon" src={Email} alt="" />
              abhime512@gmail.com
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            <b>What’s your story?</b> Get in touch. Always available for
            freelancing if the right project comes along. me.
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input style={{backgroundColor: "#333"}} type="text" placeholder="Name" name="user_name" />
            <input style={{backgroundColor: "#333"}} type="text" placeholder="Subject" name="user_subject" />
            <input style={{backgroundColor: "#333"}} type="text" placeholder="Email" name="user_email" />
            <textarea style={{backgroundColor: "#333"}} rows="5" placeholder="Message" name="message" />
            <button>Submit</button>
            {done && "Thank you..."}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
