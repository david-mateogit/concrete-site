import React from "react";
import Banner from "../banner/banner";
import GoogleMap from "../map/map";

import { Article, Section, TextBox } from "./servicearea.css";

const ServiceArea = () => (
  <Article id="service-area">
    <Banner title="Service Area" />
    <Section>
      <TextBox>
        At Rutra's Concrete, LLC, we service 50 miles surrounding the Norwich
        area.
        <br />
        <br />
        Our support includes the following towns and surrounding areas of
        Connecticut: Norwich, Preston, Stonington, New London, Old Lyme, Essex,
        Waterford, Bozrah, Ledgyard, Montville, Plainefield, Colchester, Salem
        and beyond!
      </TextBox>
      <GoogleMap />
    </Section>
  </Article>
);

export default ServiceArea;
