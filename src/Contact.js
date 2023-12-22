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
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="john.doe@gmail.com"
          style={{
            border: "1px solid #ccc" /* Light grey border */,
            borderRadius: "16px" /* Rounded borders */,
            padding: "10px 15px",
            marginRight: "10px",
          }}
        />
        <Button type="submit" title={"Submit"} />
      </form>
    </div>
  );
};

export default Contact;
