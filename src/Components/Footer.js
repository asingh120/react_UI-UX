import React from "react";

const footerStyles = {
  display: "flex",
  justifyContent: "space-between",
  width: "auto",
  marginTop: 40,
  marginLeft: "auto",
  marginRight: "auto",
  paddingLeft: 40,
  paddingTop: 30,
  paddingRight: 40,
  fontFamily: "Arial",
  fontWeight: "600",
  color: "#f3f3f3",
  height: 65,
  background: "#fc6f5b",
  fontSize: 14,
  boxShadow: "4px 4px 4px 4px #9E9E9E",
  textShadow: "1.5px 1.5px 1.5px 1.5px grey"
};

const Footer = () => {
  return (
    <div style={footerStyles}>
      <p>&copy; World Bank 2020</p>
      <a href={"https://www.betterfin.com"} style={{ color: "white" }}>
        Terms & Conditions
      </a>
      <a href={"https://www.betterfin.com"} style={{ color: "#f3f3f3" }}>
        Privacy Policy
      </a>
      <a href={"https://www.betterfin.com"} style={{ color: "#f3f3f3" }}>
        Notice at Cancellation
      </a>
      <a href={"https://www.betterfin.com"} style={{ color: "#f3f3f3" }}>
        Accessiblity
      </a>
    </div>
  );
};

export default Footer;
