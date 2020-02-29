import React from "react";
import BackgroundSlider from "react-background-slider";

import { Cta, Section, Heading2 } from "./hero.css";
import Phone from "../../images/icons/phone-call.svg";
import useHero from "./use-hero";

const Hero = () => {
  const heroImages = useHero();

  const imageArray = heroImages.backgrounds.nodes.map(
    image => image.childImageSharp.fluid.src
  );

  return (
    <>
      <div style={{ height: "50vh" }}>
        <Section>
          <div>
            <Heading2>Fully insured projects.</Heading2>
            <p>Sidewalks, Curbing, Stone Walls, Pavers and more. </p>{" "}
            <Heading2>Norwich, CT.</Heading2>
          </div>
          <Cta>
            <a href="tel: 809-917-2971">
              <Phone /> Call Now!
            </a>
          </Cta>
        </Section>
      </div>
      <BackgroundSlider images={imageArray} duration={10} transition={2} />
    </>
  );
};

export default Hero;
