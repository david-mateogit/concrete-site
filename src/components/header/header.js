import PropTypes from "prop-types";
import React from "react";
import useHero from "./use-header";

import {
  StyledHeader,
  Container,
  StyledLink,
  StyledImg,
  Headings1,
} from "./header.css";
import Navbar from "../navbar/navbar";

const Header = ({ siteTitle }) => {
  const logo = useHero();
  return (
    <StyledHeader id="home">
      <Container>
        <StyledLink to="/">
          <StyledImg
            fluid={logo.Logo.edges[0].node.childImageSharp.fluid}
            alt="Logo"
          />
          <Headings1>{siteTitle}</Headings1>
        </StyledLink>
        <Navbar />
      </Container>
    </StyledHeader>
  );
};
Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
