import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import Logo from "../../images/icons/Logo.png";

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `#F7F7FF`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <Link
        to="/"
        style={{
          color: `white`,
          textDecoration: `none`,
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
        }}
      >
        <img
          src={Logo}
          alt="Logo"
          width="80px"
          style={{ margin: "0 1rem 0 0" }}
        />
        <h1
          style={{
            margin: 0,
            fontSize: "1.5rem",
            color: "#71525C",
            fontWeight: "bold",
          }}
        >
          {siteTitle}
        </h1>
      </Link>
    </div>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
