import React from "react";
import PortfolioListProject from "./Portfolio/Portfolio-List-Project";
import { TopicHomepage } from "./TopicHomePage";

const Portfolio = () => {
  return (
    <div
      className="p-4 bg-[#062743]"
      data-aos="fade-down"
      data-aos-easing="linear"
      data-aos-duration="500"
      data-aos-offset="0"
      id="Portfolio"
    >
      <div className="max-w-7xl shadow-xl mx-auto p-4">
        <TopicHomepage title="Portfolio" />
        <PortfolioListProject />
      </div>
    </div>
  );
};

export default Portfolio;
