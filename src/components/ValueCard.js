import React from "react";
import { Card, Image, Col, Row } from "react-bootstrap";
import { bioStyle, sectionHeadingStyle } from "../components/styles";

const ValueCard = ({ obj }) => {
  if (obj === undefined) {
    return <Card></Card>;
  }
  const { title, description, image } = obj;

  return (
    <Card
      className="hover-box"
      style={{
        margin: "0px",

        border: "none",
        padding: "24px",
        paddingBottom: "0px",
        backgroundColor: "#F9F9F9",
        borderRadius: "21px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "start",
        height: "100%",
      }}
    >
      <Image
        src={image}
        style={{
          width: "20%",
          borderRadius: "20px",
          marginTop: "16px",
          marginBottom: "12px",
        }}
      />

      <p style={{ ...sectionHeadingStyle, height: "60px" }}>{title} </p>
      <p>{description}</p>
    </Card>
  );
};

export default ValueCard;
