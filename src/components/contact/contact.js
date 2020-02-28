import React from "react";
import { Article, Section, TextBox, LinkStyled, Heading4 } from "./contact.css";
import Banner from "../banner/banner";
import Phone from "../../images/icons/phone-call.svg";
import Mail from "../../images/icons/envelope.svg";

const Contact = () => (
  <Article>
    <Section>
      <Banner title="Contact" />
      <TextBox>
        <LinkStyled href="tel:+860-949-5044">
          <Phone width="10px" /> Phone: 860-949-5044
        </LinkStyled>
        <LinkStyled href="mailto:rutracardoso@hotmail.com">
          <Mail /> Email: rutracardoso@hotmail.com
        </LinkStyled>
        We speak English, Portuguese, and Spanish.
      </TextBox>
      <TextBox>
        <Heading4>Service Area:</Heading4>
        Manchester, Norwich, Gales Ferry, Middletown, Groton, Storrs Mansfield,
        Mystic, Coventry, Carolina, Central Village, Oakdale, Mansfield Depot,
        Putnam, Danielson, Rogers, Kingston, Salem, Kenyon, Uncasville, Moodus,
        Greene, Amston, Hanover, South Glastonbury, Mashantucket, Hebron,
        Cobalt, Brooklyn, Hadlyme, North Franklin, Eastford, East Hampton, East
        Lyme, Cromwell, Plainfield, Slocum, New London, Gilman, Moosup, Yantic,
        Clinton, Charlestown, Wauregan, Clayville, Wyoming, Killingworth, Old
        Mystic, Hope, East Haddam, Montville, Sterling, Andover, Ivoryton, South
        Lyme, Pawcatuck, Waterford, Portland, Wakefield, Willimantic, Niantic,
        Ballouville, Stonington, Centerbrook, Marlborough, Glastonbury, Bolton,
        Chaplin, Scotland, Ashford, Old Lyme, Hope Valley, Westbrook, Abington,
        Coventry, South Willington, Bozrah, Versailles, Pomfret Center, East
        Glastonbury, West Greenwich, North Stonington, Haddam, Bradford,
        Hampton, Higganum, Chester, North Westchester, Lebanon, Woodstock,
        Oneco, Exeter, Foster, Pomfret, Woodstock Valley, Ashaway, Dayville,
        Voluntown, Middle Haddam, North Scituate, Quaker Hill
      </TextBox>
    </Section>
  </Article>
);

export default Contact;
