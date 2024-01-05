import React from "react";
import icon1 from "./images/icons/icon1.png";
import icon2 from "./images/icons/icon2.png";
import icon3 from "./images/icons/icon3.png";
import icon4 from "./images/icons/icon4.png";
import { Col } from "react-bootstrap";
import CardItem from "./components/Card";
import { Row } from "react-bootstrap";
import {
  itemHeading,
  sectionHeadingStyle,
  descriptionStyle,
} from "./components/styles";

import { Image } from "react-bootstrap";

const Product = () => {
  const projectsData = [
    {
      title: "Teaching Mode",

      description:
        "Users can learn how to achieve their needs on smartphone. They can provide the request, and we will step-by-step guide them on how to achieve it.",
      image: icon3,
    },
    {
      title: "Automation Mode",

      description:
        "Users can get their mobile task done promptly and hands-free. Just enter the request, sit back, and the task will be done in a second.",
      image: icon4,
    },
    {
      title: "App Suggestion",

      description:
        "Users can explore a wide variety of apps based on their needs. Guidance is also provided on the app installation and set-up process.",
      image: icon1,
    },
    {
      title: "App Feature Introduction",

      description:
        "Users can unleash the full potential of your smartphone apps with UTA. All features of new apps will be introduced and guided by us.",
      image: icon2,
    },
  ];
  const src = `https://www.youtube.com/embed/aHC7PTjM5Rg`;

  return (
    <Row style={{ marginTop: "60px" }}>
      <span className="justify-content-between" style={sectionHeadingStyle}>
        {"Projects"}
      </span>
      <h2>Universial Task Assistant</h2>

      <p>
        We make technology more accessible by allowing user to input any request
        in text or voice, UTA will teach or automate the steps to achieve it.
      </p>
      <div
        style={{
          width: "100%",
          paddingLeft: "4vw",
          paddingRight: "4vw",
          textAlignLast: "center",
        }}
      >
        {" "}
        <div
          style={{
            position: "relative",
            paddingBottom: "56.25%" /* 16:9 Aspect Ratio */,
            height: 0 /* Collapse the container vertically */,
            overflow: "hidden",
          }}
        >
          <iframe
            style={{
              width: "100%",
              height: "100%",
              position: "absolute",
              top: 0,
              left: 0,
            }}
            src={src}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Embedded youtube"
          />
        </div>
      </div>

      {projectsData.map(function (object, i) {
        return (
          <Col
            xs={{ span: 12, order: 1 }}
            sm={{ span: 12, order: 1 }}
            md={{ span: 6, order: 1 }}
            lg={{ span: 6, order: 1 }}
          >
            <CardItem obj={object} key={i} />
          </Col>
        );
      })}
    </Row>
  );
};

export default Product;
