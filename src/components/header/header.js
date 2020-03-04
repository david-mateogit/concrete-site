import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import Logo from "../../images/icons/Logo.png";
import {
  StyledHeader,
  Container,
  StyledLink,
  StyledImg,
  Headings1,
} from "./header.css";

const Header = ({ siteTitle }) => (
  <StyledHeader id="home">
    <Container>
      <StyledLink to="/">
        <StyledImg src={Logo} alt="Logo" />
        <Headings1>{siteTitle}</Headings1>
      </StyledLink>
    </Container>
  </StyledHeader>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
