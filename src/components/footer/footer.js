import React from "react";
import { StyledFooter, IconList } from "./footer.css";
import Github from "../../images/icons/github.svg";
import Facebook from "../../images/icons/facebook.svg";
import Instagram from "../../images/icons/instagram.svg";
import Map from "../../images/icons/pin.svg";
import HomeAdvisor from "../../images/icons/homeadvisor.svg";

export default function Footer() {
  return (
    <>
      <StyledFooter>
        <IconList>
          <a
            href="https://instagram.com/rutrasconcrete"
            target="_blank"
            rel="noopener noreferrer"
            title="facebook"
          >
            <Facebook />
          </a>
          <a
            href="https://instagram.com/rutrasconcrete"
            target="_blank"
            rel="noopener noreferrer"
            title="Instagram"
          >
            <Instagram />
          </a>
          <a
            href="https://goo.gl/maps/RFMbBpQu4rKRTQu58"
            target="_blank"
            rel="noopener noreferrer"
            title="Address"
          >
            <Map />
          </a>

          <a
            href="https://www.homeadvisor.com/rated.RutrasConcreteLLC.54191722.html"
            target="_blank"
            rel="noopener noreferrer"
            title="Home Advisor"
          >
            <HomeAdvisor />
          </a>
        </IconList>
        <a
          href="https://github.com/david-mateogit"
          target="_blank"
          rel="noopener noreferrer"
        >
          &copy; 2020 - <Github width="15px" /> David Mateo
        </a>
      </StyledFooter>
    </>
  );
}
