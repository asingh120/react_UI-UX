import React from "react";

const footerStyles = {
  display: "flex",
  color: "white",
  justifyContent: "space-between",
  alignItems: "center",
  width: "auto",
  height: 40,
  marginLeft: "auto",
  marginRight: "auto",
  padding: "10px, 5px, 5px, 5px",
  fontFamily: "Arial",
  fontWeight: "600",
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
