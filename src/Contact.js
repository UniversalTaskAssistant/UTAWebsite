import React, { useState } from "react";
import { bioStyle, sectionHeadingStyle } from "./components/styles";
import Button from "./components/Button";
const Contact = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (email) {
      // Here you would typically send the email to your server or email service
      console.log("Collected Email:", email);

      // Notify the user
      alert("Email submitted. We will contact you soon!");

      // Clear the field
      setEmail("");
    } else {
      alert("Please enter an email address.");
    }
  };

  return (
    <div style={{ marginTop: "60px" }}>
      <p style={sectionHeadingStyle}> Contact Us </p>
      <p>
        {" "}
        We welcome all the inquiry or feedback, please drop your email and we
        can contact you shortly.
      </p>

      <b style={{ marginRight: "20px" }}>
        {" "}
        E: MulongXie@apputa.onmicrosoft.com
      </b>
      <a
        href="mailto:MulongXie@apputa.onmicrosoft.com?Subject=UTA%20Enquiry"
        target="_top"
      >
        <Button type="submit" title={"Drop us an email!"} />
      </a>
    </div>
  );
};

export default Contact;
