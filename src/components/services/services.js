import React from "react";
import BackgroundSlider from "gatsby-image-background-slider";
import useServices from "./use-services";
import Banner from "../banner/banner";
import {
  Article,
  Section,
  CarouselBox,
  ServiceBanner,
  TextBox,
  Heading3,
} from "./services.css";

const Carousel = () => {
  const servicePhotos = useServices();

  return (
    <CarouselBox>
      <BackgroundSlider
        query={servicePhotos}
        style={{
          transform: "scale(.9)",
        }}
      >
        {servicePhotos.backgrounds.nodes.map((service, index) => (
          <ServiceBanner key={`${service.name}-${index}`}>
            {service.name.replace(/[0-9]/g, "")}
          </ServiceBanner>
        ))}
      </BackgroundSlider>
    </CarouselBox>
  );
};

const Services = () => (
  <Article id="services">
    <Section>
      <Banner title="Services" />
      <Carousel />
      <TextBox>
        <Heading3>Services Offered</Heading3>
        <p>Installs or Repairs:</p>
        <ul>
          <li>* Brick, Stone or Block Wall </li>
          <li>* Brick and Stone Driveways & Floors</li>
          <li>* Concrete Driveways & Floors</li>
          <li>* Concrete Flatwork </li>
          <li>* Poured Concrete Wall </li>
          <li>* Stamped Concrete </li>
          <li>* Retaining Wall </li>
          <li>* Concrete Patios, Walks & Steps </li>
          <li>* Interlocking Pavers for Patios, Walks and Steps </li>
          <li>* Pavers for Driveways and Floors</li>
          <li>* Landscaping</li>
          <li>* Landscape Curbing </li>
          <li>* And much more, give us a call!</li>
        </ul>
      </TextBox>
    </Section>
  </Article>
);
export default Services;
