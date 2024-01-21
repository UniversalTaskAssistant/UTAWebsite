import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom for internal navigation

function Footer() {
  const currentYear = new Date().getFullYear(); // Get the current year

  return (
    <footer className="bg-light text-center text-lg-start mt-4">
      <div
        className="p-3"
        style={{ color: "#9A0ECB", backgroundColor: "#eeeeee" }}
      >
        © {currentYear} Universal Task Assistant. All rights reserved.{" "}
        <Link to="/privacy-notice" style={{ color: "#9A0ECB" }}>
          Privacy Notice
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
