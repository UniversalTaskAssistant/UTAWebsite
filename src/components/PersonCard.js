import React from "react";
import { Card, Image, Col, Row, Container } from "react-bootstrap";
import { fontSizeNormal, sectionHeadingStyle } from "./styles";
const PersonCard = ({ person }) => {
  return (
    <Card
      key={person.id}
      className="d-flex flex-row align-items-center p-2 hover-box"
      style={{
        border: "none",
        padding: "36px",
        margin: "12px",
        backgroundColor: "#F9F9F9",
        borderRadius: "21px",
      }}
    >
      <Image
        src={person.image}
        roundedCircle
        style={{ width: "30%", margin: "24px" }}
      />
      <div>
        <p style={sectionHeadingStyle}>{person.name}</p>
        <p>{person.description}</p>
      </div>
    </Card>
  );
};

export default PersonCard;
