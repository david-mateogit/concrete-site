import React from "react";
import PropTypes from "prop-types";
import { Section, Heading2 } from "./banner.css";

const Banner = ({ title }) => (
  <Section>
    <Heading2>{title}</Heading2>
  </Section>
);

export default Banner;

Banner.propTypes = {
  title: PropTypes.string.isRequired,
};
