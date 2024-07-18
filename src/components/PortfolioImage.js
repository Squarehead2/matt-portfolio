import React from "react";
import portfolioImage from "../assets/images/Portfolio-6-8-2024.png";
import "./PortfolioImage.css";
function PortfolioImage() {
  return (
    <img
      src={portfolioImage}
      style={{
        filter: "drop-shadow(0px 8px 8px rgba(0, 0, 0, 0.25))",
      }}
      className="rise-on-hover"
      alt="Portfolio"
    />
  );
}

export default PortfolioImage;
