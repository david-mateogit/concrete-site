import React from "react";
import {
  Article,
  Section,
  TextBox,
  LinkStyled,
  Div,
  Heading3,
} from "./contact.css";
import Banner from "../banner/banner";
import Phone from "../../images/icons/phone-call.svg";
import Mail from "../../images/icons/envelope.svg";
import Pin from "../../images/icons/placeholder1.svg";
import License from "../../images/icons/id-card.svg";
import Form from "../form/form";

const Contact = () => (
  <Article id="contact">
    <Banner title="Contact" />
    <Section>
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
        <LinkStyled
          href="https://goo.gl/maps/RFMbBpQu4rKRTQu58"
          target="_blank"
          rel="noopener noreferrer"
          title="address"
        >
          <Pin />
          <div>
            <Heading3> Address:</Heading3>{" "}
            <p>
              Rutra’s Concrete, LLC
              <br />
              20 Kendall Rd.
              <br />
              Preston, CT 06365
            </p>
          </div>
        </LinkStyled>
        <Div>
          <License />
          <div>
            <Heading3> License #:</Heading3> <p>HIC.0645639</p>
          </div>
        </Div>
        <Heading3>Work Hours</Heading3>
        <ul>
          <li> Monday through Friday 7AM–7PM </li>
          <li> Saturday: 7AM–12Noon </li>
          <li> Sunday: CLOSED </li>
        </ul>
      </TextBox>
    </Section>
  </Article>
);

export default Contact;
