import React from "react";
import { AnchorLink } from "gatsby-plugin-anchor-links";
import { AnchorButton } from "./navbar.css";

const Navbar = () => (
  <nav>
    <AnchorButton type="button">
      <AnchorLink id="home" className="menu-item" to="/#home">
        Home
      </AnchorLink>
    </AnchorButton>
    <AnchorButton type="button">
      <AnchorLink id="about" className="menu-item" to="/#about">
        About
      </AnchorLink>
    </AnchorButton>
    <AnchorButton type="button">
      <AnchorLink id="contact" className="menu-item" to="/#services">
        Services
      </AnchorLink>
    </AnchorButton>
    <AnchorButton type="button">
      <AnchorLink id="contact" className="menu-item" to="/#testimonials">
        Testimonials
      </AnchorLink>
    </AnchorButton>
    <AnchorButton type="button">
      <AnchorLink id="contact" className="menu-item" to="/#contact">
        Contact
      </AnchorLink>
    </AnchorButton>
    <AnchorButton type="button">
      <AnchorLink id="service-area" className="menu-item" to="/#service-area">
        Service Area
      </AnchorLink>
    </AnchorButton>
    <AnchorButton type="button">
      <AnchorLink id="contact" className="menu-item" to="/#latest">
        Latest Projects
      </AnchorLink>
    </AnchorButton>
  </nav>
);

export default Navbar;
