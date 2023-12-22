import React, { useState, useEffect } from "react";
import { OverlayTrigger } from "react-bootstrap";
import thumbnail from "./images/thumbnail.jpeg";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Image } from "react-bootstrap";
import { SocialIcon } from "react-social-icons";
import { Tooltip } from "react-bootstrap";
import Button from "./components/Button";
import { headingStyle } from "./components/styles";
const Header = () => {
  const [style, setItemDesSmall] = useState({
    fontFamily: "SF Normal",
    margin: "14vw",
    textAlign: "start",
    fontSize: "16px", // Default font size for screens larger than 767px
    color: "rgba(54, 49, 41, 0.6)",
  });

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;

      // Update the font size based on the screen width
      if (screenWidth <= 700) {
        setItemDesSmall((prevStyle) => ({
          ...prevStyle,
          textAlign: "center",
          margin: "10px",
        }));
      } else if (screenWidth <= 1000) {
        setItemDesSmall((prevStyle) => ({
          ...prevStyle,
          margin: "5vw",
        }));
      } else {
        setItemDesSmall((prevStyle) => ({
          ...prevStyle,
          textAlign: "end",
          margin: "14vw",
        }));
      }
    };

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <Row className="d-flex align-items-center">
      <Col
        xs={{ span: 12, order: 2 }}
        sm={{ span: 7, order: 1 }}
        md={{ span: 7, order: 1 }}
        lg={{ span: 7, order: 1 }}
        style={{
          paddingTop: "15vw",
          paddingRight: "8vw",
        }}
      >
        {" "}
        <div>
          <h1 style={headingStyle}>
            Provide <span style={{ color: "#9A0ECB" }}>easiest way </span>to{" "}
            <span style={{ color: "#9A0ECB" }}>operate phones </span> for
            seniors.
          </h1>
          <br></br>
          <p>
            UTA assists elderly to enhance technology usages through latest AI
            technology.
          </p>
          <div style={{ textAlign: "end" }}>
            <Button onClick={() => {}} title={"Learn more"} />
          </div>
        </div>
      </Col>
      <Col
        xs={{ span: 12, order: 1 }}
        sm={{ span: 5, order: 2 }}
        md={{ span: 5, order: 2 }}
        lg={{ span: 5, order: 2 }}
      >
        <Image
          src={thumbnail}
          style={{
            width: "100%",
            borderRadius: "20px",
            marginTop: "max(90px, 10vw)",
          }}
        />
      </Col>
    </Row>
  );
};

export default Header;
