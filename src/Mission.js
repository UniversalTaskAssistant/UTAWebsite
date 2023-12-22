import React from "react";
import { Row } from "react-bootstrap";

import "react-vertical-timeline-component/style.min.css";
import { useState } from "react";
import {
  sectionHeadingStyle,
  itemHeading,
  descriptionStyle,
  itemDesSmall,
} from "./components/styles";

const Mission = () => {
  return (
    <Row style={{ marginTop: "60px" }}>
      <span style={sectionHeadingStyle}>{"Our Mission"}</span>
      <p
        style={{
          fontSize: "34px",
          textAlign: "center",
          paddingLeft: "9vw",
          paddingRight: "9vw",
        }}
      >
        {" "}
        Aim to promote a new{" "}
        <span style={{ color: "#9A0ECB" }}>tech interaction paradigm </span>
        where computers <span style={{ color: "#9A0ECB" }}>
          intelligently
        </span>{" "}
        interpret user intention.{" "}
      </p>
    </Row>
  );
};

export default Mission;
