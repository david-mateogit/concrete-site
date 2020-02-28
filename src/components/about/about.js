import React from "react";
import { Article, Section, TextBox, ImgBox, ImgStyled } from "./about.css";
import Years from "../../images/homeadvisor/3year.webp";
import Reviews from "../../images/homeadvisor/20reviews.webp";
import Elite from "../../images/homeadvisor/elite.webp";
import Soap from "../../images/homeadvisor/soap.webp";
import TopRated from "../../images/homeadvisor/toprated.webp";

const About = () => (
  <Article>
    <Section>
      <TextBox>
        At <strong>Rutra's Concrete, LLC</strong>, we service 50 miles
        surrounding the Norwich area. <br />
        No job is too big or small and we service multiple states. Give us a
        call whether you need a large concrete project or you need a quick
        repair. <br />
        <strong>Rutra's Concrete, LLC</strong>, is the company to call for
        quality.
      </TextBox>
      <h3>Trusted by HomeAdvisor</h3>
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
