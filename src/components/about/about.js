import React from "react";
import {
  Article,
  Section,
  TextBox,
  ImgBox,
  ImgStyled,
  Headings3,
} from "./about.css";
import useAbout from "./use-about";

const About = () => {
  const aboutImages = useAbout();

  return (
    <Article id="about">
      <Section>
        <TextBox>
          Rutra’s Concrete, LLC. specializes in all types of concrete masonry
          construction. We are fully staffed, and able to handle any-size
          project. With over 20 years of experience, Rutra’s Concrete offers a
          100% satisfaction assurance on each project.
          <br />
          <br />
          Our mission is to create a long-term client relationship based on the
          achievement of the client’s goals. It is our duty to satisfy our
          customer’s needs providing also a safe and welcome environment.
          <br />
          <br />
          No job is too big or small. Give us a call whether you need a large
          concrete project or you need a quick repair. <br />
          <strong>Rutra's Concrete, LLC</strong>, is the company to call for
          quality.
        </TextBox>
        <Headings3>Trusted by HomeAdvisor</Headings3>
        <ImgBox>
          {aboutImages.homeadvisor.nodes.map((image, index) => (
            <ImgStyled
              fluid={image.childImageSharp.fluid}
              alt="Home Advisor Badge"
              key={index}
            />
          ))}
        </ImgBox>
      </Section>
    </Article>
  );
};

export default About;
