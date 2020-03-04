import React from "react";
import BackgroundSlider from "gatsby-image-background-slider";

import { AnchorLink } from "gatsby-plugin-anchor-links";
import { Article, Cta, Section, Heading2, ArrowSection } from "./hero.css";
import Contact from "../../images/icons/contact.svg";
import DownArrow from "../../images/icons/down-arrow.svg";
import useHero from "./use-hero";
import Header from "../header/header";

const Carousel = () => {
  const heroImages = useHero();

  return (
    <BackgroundSlider
      query={heroImages}
      initDelay={10}
      duration={12}
      loading="eager"
    />
  );
};
const Hero = () => (
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
      <ArrowSection>
        <DownArrow />
      </ArrowSection>
    </Article>
    <Carousel />
  </>
);

export default Hero;
