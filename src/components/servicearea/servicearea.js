import React from "react";
import Banner from "../banner/banner";
import useServiceArea from "./use-servicearea";

import {
  Article,
  Section,
  TextBox,
  ImgBox,
  StyledImg,
} from "./servicearea.css";

const ServiceArea = () => {
  const map = useServiceArea();

  return (
    <Article id="service-area">
      <Banner title="Service Area" />
      <Section>
        <TextBox>
          At Rutra's Concrete, LLC, we service 50 miles surrounding the Norwich
          area.
          <br />
          <br />
          Our support includes the following towns and surrounding areas of
          Connecticut: Norwich, Preston, Stonington, New London, Old Lyme,
          Essex, Waterford, Bozrah, Ledgyard, Montville, Plainfield, Colchester,
          Salem and beyond!
        </TextBox>
        <ImgBox>
          <a
            href="https://goo.gl/maps/hcxw3YFzK4jjaNQ38"
            target="_blank"
            rel="noopener noreferrer"
            title="map"
          >
            <StyledImg
              fluid={map.map.edges[0].node.childImageSharp.fluid}
              alt="Map"
            />
          </a>
        </ImgBox>
      </Section>
    </Article>
  );
};

export default ServiceArea;
