import React from "react";
import BackgroundSlider from "react-background-slider";
import { Cta, StyledSection } from "./intro.css";
import Phone from "../../images/phone-call.svg";

import image1 from "../../images/Pavers1.jpg";
import image2 from "../../images/Pavers2.jpg";
import image3 from "../../images/Pavers3.jpg";
import image4 from "../../images/Pavers4.jpg";

const Intro = () => (
  <>
    <div style={{ height: "50vh" }}>
      <StyledSection>
        <div>
          <h2>Fully insured projects.</h2>
          <p>Sidewalks, Curbing, Stone Walls, Pavers </p>{" "}
        </div>
        <Cta>
          <a href="tel: 809-917-2971">
            <Phone /> Call Now!
          </a>
        </Cta>
      </StyledSection>
    </div>
    <BackgroundSlider
      images={[image1, image2, image3, image4]}
      duration={10}
      transition={2}
    />
  </>
);

export default Intro;
