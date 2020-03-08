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
          <p>
            At Rutra's Concrete, LLC, we service a vast area of three states.
            Our support includes the following towns and surrounding areas of:
          </p>
          <ul>
            <li>
              <h4>Connecticut:</h4> Norwich, Preston, Hartfort, New London,
              Bridgeport, Waterbury, New Haven, Danbury and beyond!.
            </li>
            <li>
              <h4>Rhode Island:</h4> Providence, Warwick, Cranston, Pawtucket,
              Woonsocket, Bristol and more.
            </li>
            <li>
              <h4>Massachusetts:</h4> Boston, Worcester, Springfield, Lowell,
              Cambridge, Brockton, Newton, Somerville and more.
            </li>
          </ul>
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
