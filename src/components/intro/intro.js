import React from "react";
import BackgroundSlider from "react-background-slider";
import { Cta, Section, Heading2 } from "./intro.css";
import Phone from "../../images/icons/phone-call.svg";

import image1 from "../../images/bg/Pavers5.jpg";
import image2 from "../../images/bg/Stamping3.jpg";
import image3 from "../../images/bg/Sidewalk3.jpg";
import image4 from "../../images/bg/Pavers6.jpg";
import image5 from "../../images/bg/Sidewalk1.jpg";
import image6 from "../../images/bg/Stairs.jpg";

const Intro = () => (
  <>
    <div style={{ height: "50vh" }}>
      <Section>
        <div>
          <Heading2>Fully insured projects.</Heading2>
          <p>Sidewalks, Curbing, Stone Walls, Pavers and more. </p>{" "}
        </div>
        <Cta>
          <a href="tel: 809-917-2971">
            <Phone /> Call Now!
          </a>
        </Cta>
      </Section>
    </div>
    <BackgroundSlider
      images={[image1, image2, image3, image4, image5, image6]}
      duration={10}
      transition={2}
    />
  </>
);

export default Intro;
