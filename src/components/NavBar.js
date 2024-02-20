import React, { useState, useEffect } from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";

const MyNavbar = () => {
  const [activeKey, setActiveKey] = useState(null);

  useEffect(() => {
    const sectionIds = ["home", "product", "about", "contact"];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveKey(`#${entry.target.id}`);
          }
        });
      },
      {
        rootMargin: "-50% 0px -50% 0px",
        threshold: 0.01,
      }
    );

    sectionIds.forEach((id) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    return () => {
      sectionIds.forEach((id) => {
        const section = document.getElementById(id);
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  const handleSelect = (eventKey) => {
    setActiveKey(eventKey); // Set the active key state
    const section = document.querySelector(eventKey);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      console.error(`No section found with id ${eventKey}`);
    }
  };

  return (
    <Navbar
      bg="light"
      expand="lg"
      style={{ paddingLeft: "5.6vw", paddingRight: "5.6vw" }}
      fixed="top"
      onSelect={handleSelect}
    >
      <Navbar.Brand href="#home" style={{ color: "#9A0ECB" }}>
        Universal Task Assistant
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto" activeKey={activeKey}>
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#product">Product</Nav.Link>
          <Nav.Link href="#about">About us</Nav.Link>
          <Nav.Link href="#contact">Contact us</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default MyNavbar;
