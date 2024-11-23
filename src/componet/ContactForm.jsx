import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import ErrorMessage from "./ErrorMessage";

function ContactForm() {
  const form = useRef();
  const [error, setError] = useState(null);
  const sendEmail = (e) => {
    e.preventDefault();
    const Name = form.current[0].value;
    const Email = form.current[1].value;
    const Subject = form.current[2].value;
    const message = form.current[3].value;
    if (
      Name.toString().trim() !== "" &&
      Email.toString().trim() !== "" &&
      Subject.toString().trim() !== "" &&
      message.toString().trim() !== ""
    ) {
      console.log("ok");
      form.current.reset();
      setError("Email Sent Successfully!");

      emailjs
        .sendForm(
          "service_8nft8rj",
          "template_ac4sknk",
          form.current,
          "CX-eh70KxGehGNpCW"
        )
        .then(
          (result) => {},
          (error) => {
            console.log(error.text);
          }
        );
    } else {
      setError("Form Values is Required...!");
    }
  };

  return (
    <div className="contact-form padd-15">
      <form ref={form} onSubmit={sendEmail}>
        <div className="row">
          {error && (
            <div className="form-item col-12 padd-15">
              <ErrorMessage error={error} />
            </div>
          )}
          <div className="form-item col-6 padd-15">
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                name="user_name"
                placeholder="name"
              />
            </div>
          </div>
          <div className="form-item col-6 padd-15">
            <div className="form-group">
              <input
                type="email"
                className="form-control"
                name="user_email"
                placeholder="email"
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="form-item col-12 padd-15">
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                name="user_subject"
                placeholder="subject"
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="form-item col-12 padd-15">
            <div className="form-group">
              <textarea
                id=""
                cols="30"
                rows="10"
                name="user_message"
                className="form-control"
                placeholder="Message"
              ></textarea>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="form-item col-12 padd-15">
            <button type="submit" className="btn">
              Send Message
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ContactForm;
