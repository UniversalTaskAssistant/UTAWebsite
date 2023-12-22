import React, { useState, useEffect } from "react";

import { Card, Image, Col, Row } from "react-bootstrap";
import TruncatedText from "./TruncatedText";
import {
  itemHeading,
  sectionHeadingStyle,
  descriptionStyle,
  itemDesSmall,
} from "../components/styles";

const CardItem = ({ obj }) => {
  if (obj === undefined) {
    return <Card></Card>;
  }
  const { title, description, image } = obj;

  console.log(title);

  return (
    <Card
      className="hover-box"
      style={{
        marginTop: "24px",
        border: "none",
        padding: "24px",

        backgroundColor: "#F9F9F9",
        borderRadius: "21px",
      }}
    >
      <span
        style={{
          ...sectionHeadingStyle,
          textAlign: "center",
          marginBottom: "16px",
        }}
      >
        {title}
      </span>{" "}
      <Row className="d-flex align-items-center">
        <Col
          xs={{ span: 7, order: 1 }}
          sm={{ span: 7, order: 1 }}
          md={{ span: 7, order: 1 }}
          lg={{ span: 7, order: 1 }}
        >
          <TruncatedText text={description} maxLength={150} />
        </Col>
        <Col
          xs={{ span: 5, order: 1 }}
          sm={{ span: 5, order: 1 }}
          md={{ span: 5, order: 1 }}
          lg={{ span: 5, order: 1 }}
        >
          <Image
            src={image}
            style={{
              width: "90%",
              borderRadius: "20px",
            }}
          />
        </Col>
      </Row>
    </Card>
  );
};

export default CardItem;
