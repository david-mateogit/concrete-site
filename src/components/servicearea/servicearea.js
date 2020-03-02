import React from "react";
import Banner from "../banner/banner";
import GoogleMap from "../map/map";

import { Article, Section } from "./servicearea.css";

const ServiceArea = () => (
  <Article>
    <Section>
      <Banner title="Service Area" />
      <GoogleMap />
    </Section>
  </Article>
);

export default ServiceArea;
