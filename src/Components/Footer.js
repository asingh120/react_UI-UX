import React from "react";

const footerStyles = {
  display: "flex",
  color: "white",
  justifyContent: "space-evenly",
  alignItems: "center",
  width: "100%",
  height: 30,
  padding: "10px",
  fontFamily: "Arial",
  fontWeight: "500",
  background: "#fc6f5b",
  fontSize: 14,
  textDecoration: "none"
};

const Footer = () => {
  return (
    <div style={footerStyles}>
      <div>&copy; World Bank 2020</div>
      <a
        href={"https://www.betterfin.com"}
        style={{ color: "white", textDecoration: "none" }}
      >
        Terms & Conditions
      </a>
      <a
        href={"https://www.betterfin.com"}
        style={{ color: "white", textDecoration: "none" }}
      >
        Privacy Policy
      </a>
      <a
        href={"https://www.betterfin.com"}
        style={{ color: "white", textDecoration: "none" }}
      >
        Notice at Cancellation
      </a>
      <a
        href={"https://www.betterfin.com"}
        style={{ color: "white", textDecoration: "none" }}
      >
        Accessiblity
      </a>
    </div>
  );
};

export default Footer;
