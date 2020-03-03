import React from "react";
import Banner from "../banner/banner";
import GoogleMap from "../map/map";

import { Article, Section, TextBox } from "./servicearea.css";

const ServiceArea = () => (
  <Article>
    <Section>
      <Banner title="Service Area" />
      <TextBox>
        Our service area includes the following towns and surrounding areas of
        Connecticut: Norwich, Preston, Stonington, New London, Old Lyme, Essex,
        Waterford, Bozrah, Ledgyard, Montville, Plainefield, Colchester, Salem
        and beyond!
      </TextBox>
      <GoogleMap />
    </Section>
  </Article>
);

export default ServiceArea;
