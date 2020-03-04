import React from "react";
import {
  Article,
  Section,
  TextBox,
  ImgBox,
  ImgStyled,
  Headgins3,
} from "./about.css";
import Years from "../../images/homeadvisor/3year.png";
import Reviews from "../../images/homeadvisor/20reviews.png";
import Elite from "../../images/homeadvisor/elite.png";
import Soap from "../../images/homeadvisor/soap.png";
import TopRated from "../../images/homeadvisor/toprated.png";

const About = () => (
  <Article id="about">
    <Section>
      <TextBox>
        Rutra’s Concrete, LLC. specializes in all types of concrete masonry
        construction. We are fully staffed, and able to handle any-size project.
        With over 20 years of experience, Rutra’s Concrete offers a 100%
        satisfaction assurance on each project.
        <br /> Our mission is to create a long-term client relationship based on
        the achievement of the client’s goals. It is our duty to satisfy our
        customer’s needs providing also a safe and welcome environment.
        <br />
        No job is too big or small. Give us a call whether you need a large
        concrete project or you need a quick repair. <br />
        <strong>Rutra's Concrete, LLC</strong>, is the company to call for
        quality.
      </TextBox>
      <Headgins3>Trusted by HomeAdvisor</Headgins3>
      <ImgBox>
        <ImgStyled src={Soap} alt="Seal of Approval" />
        <ImgStyled src={Years} alt="More than 3 years" />
        <ImgStyled src={Reviews} alt="More than 20 reviews" />
        <ImgStyled src={TopRated} alt="Top Rated" />
        <ImgStyled src={Elite} alt="Elite Service" />
      </ImgBox>
    </Section>
  </Article>
);

export default About;
