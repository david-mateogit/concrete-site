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
import Navbar from "../navbar/navbar";

const Header = ({ siteTitle }) => (
  <StyledHeader id="home">
    <Container>
      <StyledLink to="/">
        <StyledImg src={Logo} alt="Logo" />
        <Headings1>{siteTitle}</Headings1>
      </StyledLink>
      <Navbar />
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
