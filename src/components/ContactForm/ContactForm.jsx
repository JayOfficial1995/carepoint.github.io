import React from "react";

import { ContactFormStyle } from "./ContactForm.style";

function ContactForm() {
  return (
    <ContactFormStyle>
      <form>
        <input type="text" className="custom-input" placeholder="Name" />
        <input type="email" className="custom-input" placeholder="Email" />
        <textarea
          name="massege"
          cols="30"
          rows="5"
          className="custom-input"
          placeholder="Massege"
        ></textarea>

        <button className="submit-btn">Submit</button>
      </form>
    </ContactFormStyle>
  );
}

export default ContactForm;
