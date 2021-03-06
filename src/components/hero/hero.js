import React from "react";
import Div100vh from "react-div-100vh";
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
      alt="backgrounds"
      style={{
        marginBottom: "5rem",
        minHeight: "600px",
      }}
    />
  );
};
const Hero = () => (
  <>
    <Div100vh
      style={{
        marginBottom: "4rem",
        minHeight: "90rvh",
      }}
    >
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
    </Div100vh>
  </>
);

export default Hero;
