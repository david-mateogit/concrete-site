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
          At Rutra's Concrete, LLC, we service a vast area that includes
          Connecticut, Rhode Island and Massachusetts.
          <br />
          <br />
          Our support includes the following towns and surrounding areas of:{" "}
          <br />
          <br />
          - Connecticut: Norwich, Preston, Hartfort, New London, Bridgeport,
          Waterbury, New Haven, Danbury and beyond!.
          <br />
          - Rhode Island: Providence, Warwick, Cranston, Pawtucket, Woonsocket,
          Bristol and more.
          <br />- Massachusetts: Boston, Worcester, Springfield, Lowell,
          Cambridge, Brockton, Newton, Somerville and more.
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
