import React from "react";
import BackgroundSlider from "react-background-slider";

import { AnchorLink } from "gatsby-plugin-anchor-links";
import { Article, Cta, Section, Heading2 } from "./hero.css";
import Contact from "../../images/icons/contact.svg";
import useHero from "./use-hero";
import Header from "../header/header";

const Hero = () => {
  const heroImages = useHero();

  const imageArray = heroImages.backgrounds.nodes.map(
    image => image.childImageSharp.fluid.src
  );

  console.log(heroImages);
  return (
    <>
      <Article>
        <Header siteTitle={"RUTRA'S CONCRETE LLC"} />
        <Section>
          <div>
            <Heading2>Fully insured projects.</Heading2>
            <p>Sidewalks, Curbing, Stone Walls, Pavers and more. </p>{" "}
            <Heading2>Preston, CT.</Heading2>
          </div>
          <Cta>
            <AnchorLink id="contact" className="menu-item" to="/#contact">
              <Contact /> FREE CONSULTATION!
            </AnchorLink>
          </Cta>
        </Section>
      </Article>
      <BackgroundSlider images={imageArray} duration={10} transition={2} />
    </>
  );
};

export default Hero;
