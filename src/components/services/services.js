import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import BackgroundSlider from "gatsby-image-background-slider";
import Banner from "../banner/banner";
import {
  Article,
  Section,
  CarouselBox,
  ServiceBanner,
  TextBox,
  Heading3,
} from "./services.css";

const serviceList = [
  "Concrete floor",
  "Concrete stairs",
  "Curbing (concrete, granite, precast)",
  "Pavers",
  "Sidewalk",
  "Stamp concrete",
  "Walls",
];

const Carousel = () => (
  <CarouselBox>
    <BackgroundSlider
      query={useStaticQuery(graphql`
        query {
          backgrounds: allFile(
            filter: {
              sourceInstanceName: { eq: "images" }
              relativeDirectory: { eq: "services" }
            }
          ) {
            nodes {
              relativePath
              childImageSharp {
                fluid(maxWidth: 500, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      `)}
      style={{
        transform: "scale(.9)",
      }}
    >
      {serviceList.map(service => (
        <ServiceBanner>{service}</ServiceBanner>
      ))}
    </BackgroundSlider>
  </CarouselBox>
);

const Services = () => (
  <Article>
    <Section>
      <Banner title="Projects" />
      <Carousel />
      <TextBox>
        <Heading3>Services Offered</Heading3>
        Installs or Repairs:
        <ul>
          <li>Brick, Stone or Block Wall </li>
          <li>Brick and Stone Driveways & Floors</li>
          <li>Concrete Driveways & Floors</li>
          <li>Concrete Flatwork </li>
          <li>Poured Concrete Wall </li>
          <li>Stamped Concrete </li>
          <li>Retaining Wall </li>
          <li>Concrete Patios, Walks & Steps </li>
          <li>Interlocking Pavers for Patios, Walks and Steps </li>
          <li>Pavers for Driveways and Floors</li>
          <li>Landscaping</li>
          <li>Landscape Curbing </li>
          <li>And much more, give us a call!</li>
        </ul>
      </TextBox>
    </Section>
  </Article>
);
export default Services;
