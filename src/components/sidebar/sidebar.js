import React, { useState } from "react";
import { stack as Menu } from "react-burger-menu";
import { AnchorLink } from "gatsby-plugin-anchor-links";
import { AnchorButton } from "./sidebar.css";

const Sidebar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleStateChange = state => {
    setMenuOpen(state.isOpen);
  };
  const closeMenu = () => {
    console.log(menuOpen);
    setMenuOpen(false);
    console.log(menuOpen);
  };

  return (
    <Menu isOpen={menuOpen} onStateChange={state => handleStateChange(state)}>
      <AnchorButton type="button" onClick={() => closeMenu()}>
        <AnchorLink id="home" className="menu-item" to="/#home">
          Home
        </AnchorLink>
      </AnchorButton>
      <AnchorButton type="button" onClick={() => closeMenu()}>
        <AnchorLink id="about" className="menu-item" to="/#about">
          About
        </AnchorLink>
      </AnchorButton>
      <AnchorButton type="button" onClick={() => closeMenu()}>
        <AnchorLink id="contact" className="menu-item" to="/#services">
          Services
        </AnchorLink>
      </AnchorButton>
      <AnchorButton type="button" onClick={() => closeMenu()}>
        <AnchorLink id="contact" className="menu-item" to="/#testimonials">
          Testimonials
        </AnchorLink>
      </AnchorButton>
      <AnchorButton type="button" onClick={() => closeMenu()}>
        <AnchorLink id="contact" className="menu-item" to="/#latest">
          Latest Projects
        </AnchorLink>
      </AnchorButton>
      <AnchorButton type="button" onClick={() => closeMenu()}>
        <AnchorLink id="contact" className="menu-item" to="/#contact">
          Contact
        </AnchorLink>
      </AnchorButton>
    </Menu>
  );
};

export default Sidebar;
