import React from "react";
import { Article, Section, TextBox, LinkStyled, Heading3 } from "./contact.css";
import Banner from "../banner/banner";
import Phone from "../../images/icons/phone-call.svg";
import Mail from "../../images/icons/envelope.svg";
import Pin from "../../images/icons/placeholder1.svg";
import Form from "../form/form";

const Contact = () => (
  <Article id="contact">
    <Section>
      <Banner title="Contact" />
      <Form />
      <TextBox>
        <p>We speak English, Portuguese, and Spanish.</p>
        <LinkStyled href="tel:+1-(860)-949-5044">
          <Phone />{" "}
          <div>
            <Heading3> Phone:</Heading3>
            <p> (860) 949-5044</p>
          </div>
        </LinkStyled>
        <LinkStyled href="mailto:rutracardoso@hotmail.com">
          <Mail />{" "}
          <div>
            <Heading3> Email:</Heading3> <p> rutracardoso@hotmail.com </p>
          </div>
        </LinkStyled>
        <LinkStyled href="https://www.google.com/maps/place/Preston,+CT,+USA/@41.516539,-71.9919405,11z/data=!4m2!3m1!1s0x89e6767ba1e8d603:0x349ba147baef7940">
          <Pin />
          <div>
            <Heading3> Address:</Heading3>{" "}
            <p>
              1234 Somewhere Road #5432
              <br />
              Preston, CT 06365
              <br />
              United States of America
            </p>
          </div>
        </LinkStyled>
      </TextBox>
    </Section>
  </Article>
);

export default Contact;
