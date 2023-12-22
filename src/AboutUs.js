import React, { useState, useEffect } from "react";
import { Card, Image, Col, Row, Container, Carousel } from "react-bootstrap";
import PersonCard from "./components/PersonCard";
import { bioStyle, sectionHeadingStyle } from "./components/styles";
import ValueCard from "./components/ValueCard";
import united from "./images/values/united.png";
import care from "./images/values/care.png";
import rating from "./images/values/rating.png";
import idea from "./images/values/idea.png";
import csiro from "./images/csiro.png";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const AboutUs = () => {
  const [sliderKey, setSliderKey] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      // This will set a new key on the slider causing it to re-render
      setSliderKey((prevKey) => prevKey + 1);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    dots: true,
    responsive: [
      {
        breakpoint: 764, // Width up to which the settings will apply
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };

  const people = [
    {
      id: 1,
      name: "Mulong Xie",
      description:
        "Project Manager with a knack for efficiency and time management.",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      name: "Jasmine Wang",
      description: "Creative Director passionate about design and innovation.",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 3,
      name: "Dustin Vu",
      description: "Lead Developer with expertise in full-stack development.",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 4,
      name: "Dehai Zhao",
      description:
        "Data Scientist focused on machine learning and AI solutions.",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 5,
      name: "Frank Sun",
      description:
        "Marketing Specialist with a strong background in digital marketing.",
      image: "https://via.placeholder.com/150",
    },
  ];

  const values = [
    {
      title: "Innovation and Creativity",
      description:
        "We encourage out-of-the-box thinking to stay ahead in the dynamic tech industry.",
      image: idea, // You can add the appropriate image URL or path here
    },
    {
      title: "Integrity and Transparency",
      description:
        "We value being transparent and building trust both within the team and with clients.",
      image: care, // Image URL or path
    },
    {
      title: "Customer-Centric Approach",
      description: "We emphasize on prioritizing customer needs and feedback.",
      image: rating, // Image URL or path
    },
    {
      title: "Teamwork and Collaboration",
      description:
        "We foster a culture of collaboration, where diverse ideas are valued and everyone feels they are part of a cohesive team.",
      image: united, // Image URL or path
    },
  ];
  return (
    <div style={{ marginTop: "60px" }}>
      <p style={sectionHeadingStyle}> Our Vision </p>
      <div
        style={{
          paddingLeft: " 12vw",
          paddingRight: " 12vw",
          textAlign: "center",
        }}
      >
        <p style={{ fontSize: "34px" }}>
          {" "}
          Lower the barrier to
          <span style={{ color: "#9A0ECB" }}> enjoy technology.</span>
        </p>

        <p>
          {" "}
          At UTA, we envision a world where every individual, regardless of age,
          can effortlessly harness the power of technology to connect, learn,
          and thrive. We want to bridge the generational gap in the digital
          landscape.
        </p>
      </div>
      <div style={{ marginTop: "60px" }}>
        <p style={sectionHeadingStyle}> Our Values </p>
        <Row>
          {values.map(function (object, i) {
            return (
              <Col
                style={{ marginTop: "16px" }}
                key={i}
                xs={12} // Full width on extra small screens, 1 card per row
                sm={6} // Half width on small screens, 2 cards per row
                md={6} // One third on medium screens, 3 cards per row
                lg={3} // One fourth on large screens, 4 cards per row
                xl={3} // One sixth on extra large screens, 6 cards per row
              >
                <ValueCard obj={object} />
              </Col>
            );
          })}
        </Row>
      </div>
      <div style={{ marginTop: "60px" }}>
        <p style={sectionHeadingStyle}> Our People </p>
        <p>
          {" "}
          We are all adventurous tech-lovers who want to bring technologies to
          everyone.
        </p>

        <Slider key={sliderKey} {...settings}>
          {people.map((person) => (
            <PersonCard person={person} />
          ))}
        </Slider>
      </div>

      <div style={{ marginTop: "60px" }}>
        <p style={sectionHeadingStyle}> Backed By </p>
        <Row>
          <Col
            xs={{ span: 3, order: 1 }}
            sm={{ span: 3, order: 1 }}
            md={{ span: 2, order: 1 }}
            lg={{ span: 2, order: 1 }}
          >
            <Image src={csiro} width={"100%"} />
          </Col>
          <Col
            xs={{ span: 9, order: 2 }}
            sm={{ span: 9, order: 2 }}
            md={{ span: 10, order: 2 }}
            lg={{ span: 10, order: 2 }}
          >
            CSIRO is the Australia's national science organisation and one of
            the largest and most diverse scientific research organisations in
            the world. CSIRO's Data61 is the data and digital specialist arm of
            Australia's national science agency.
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default AboutUs;
