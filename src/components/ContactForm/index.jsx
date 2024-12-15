import { useState } from "react";
import emailjs from "@emailjs/browser";
import PropTypes from "prop-types";
import "./contactForm.css";

const ContactForm = ({
  buttonColor = "blue",
  formSize = "medium",
  headerText = "Want to work with me? Send a message",
  successMessage = "Message sent!",
  errorMessage = "Something went wrong, please try again later",
}) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [stateMessage, setStateMessage] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    emailjs
      .sendForm(
        import.meta.env.VITE_REACT_APP_SERVICE_ID,
        import.meta.env.VITE_REACT_APP_TEMPLATE_ID,
        e.target,
        import.meta.env.VITE_REACT_APP_PUBLIC_KEY
      )
      .then(
        (result) => {
          setStateMessage(successMessage);
          setIsSubmitting(false);
          setTimeout(() => {
            setStateMessage(null);
          }, 5000);
        },
        (error) => {
          setStateMessage(errorMessage);
          setIsSubmitting(false);
          setTimeout(() => {
            setStateMessage(null);
          }, 5000);
        }
      );
    e.target.reset();
  };

  const formClass =
    formSize === "small"
      ? "form-small"
      : formSize === "large"
      ? "form-large"
      : "form-medium";
  const buttonClass = `btn ${buttonColor}`;

  return (
    <div className={`contact-form ${formClass}`}>
      <h3>{headerText}</h3>
      {stateMessage && <div className='success-message'>{stateMessage}</div>}
      <form onSubmit={sendEmail}>
        <label>Name</label>
        <input type='text' name='user_name' placeholder='Your Name' required />
        <label>Email</label>
        <input
          type='email'
          name='user_email'
          placeholder='Your Email'
          required
        />
        <label>Message</label>
        <textarea cols='30' rows='10' name='message' required></textarea>
        <input
          type='submit'
          value='Send'
          disabled={isSubmitting}
          className={buttonClass}
        />
      </form>
    </div>
  );
};

ContactForm.propTypes = {
  buttonColor: PropTypes.string,
  formSize: PropTypes.oneOf(["small", "medium", "large"]),
  headerText: PropTypes.string,
  successMessage: PropTypes.string,
  errorMessage: PropTypes.string,
};

export default ContactForm;
