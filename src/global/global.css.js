import { createGlobalStyle } from "styled-components";
import MEDIA from "../helpers/mediaTemplates";

export default createGlobalStyle`
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }

  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block;
  }

  html {
    font-size: 80%;
  }

  body {
    font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
    line-height: 1;
    font-size: 1.6rem;
    color: #000;
    background-color: rgba(247, 247, 255, 1);
    -webkit-text-size-adjust: 100%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
    -webkit-font-feature-settings: "pnum";
    font-feature-settings: "pnum";
    font-variant-numeric: proportional-nums;

  }

  html,


  blockquote, q {
    quotes: none;
  }

  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  a {
    color: "#71525C";
  }

  pre {
    display: block;
    padding: 2rem;
    margin-top: 4rem;
    overflow: auto;
    font-size: 85%;
    line-height: 1.45;
    border-radius: 5px;
    color: "#71525C";
    border: 1px solid #ddd;
    font-family: "SFMono-Regular",Consolas,"Liberation Mono",Menlo,Courier,monospace;
  }

  video {
    max-width: 100%;
  }

  p {
    margin-bottom: 2rem;
  }



/* Position and sizing of burger button */
.bm-burger-button {
  position: fixed;
  width: 36px;
  height: 30px;
  right: 10%;
  bottom: 35px;

  ${MEDIA.MIN_TABLET`
      right: 14%;
    `};
     ${MEDIA.MIN_DESKTOP`
      left: calc(50vw + 300px);
    `};

  -webkit-tap-highlight-color: transparent;
  outline: 0;
  > button:active, :focus {
      outline: 0;
      border: 0;
    }
  /* increase touch area */
 > button:before {
    content: '';
    position: absolute;
    width: 100px;
    height: 100px;
    top: -20px;
    left: -35px;

  }
}


/* Color/shape of burger icon bars */
.bm-burger-bars {
  background: #71525C;
}

/* Color/shape of burger icon bars on hover*/
.bm-burger-bars-hover {
  background: #a90000;
}

/* Position and sizing of clickable cross button */
.bm-cross-button {
  height: 24px;
  width: 24px;
}

/* Color/shape of close button cross */
.bm-cross {
  background: #bdc3c7;
}

/*
Sidebar wrapper styles
Note: Beware of modifying this element as it can break the animations - you should not need to touch it in most cases
*/
.bm-menu-wrap {
  position: fixed;
  height: 100%;
}

/* General sidebar styles */
.bm-menu {
  background: rgba(113, 82, 92, 0.9);
  font-size: 1.15em;
  padding: 2.5em 1.5em 0;

}


/* Morph shape necessary with bubble or elastic */
.bm-morph-shape {
  fill: #373a47;
}

/* Wrapper for item list */
.bm-item-list {
  padding: 1rem;
  height: 500px !important;

}

/* Individual item */
.bm-item {
  text-decoration: none;
  display: inline-block;
  color: rgba(247, 247, 255, 1);
  box-sizing: border-box;
  text-align: left;

  padding: 1rem 0;
  :hover,  :active {
    text-decoration: underline;
    text-decoration-color: rgba(247, 247, 255, 1);
    outline: 0;

    > a {
       text-decoration: underline;
    text-decoration-color: rgba(247, 247, 255, 1);
    }
  }
  :focus {
    outline: none;
  }
  > a {
    margin-top: 0 !important;
      padding-bottom: 0.3rem;
    ${MEDIA.MIN_PHONE`
    padding-bottom: 1.5rem;
    `};
  }
}



.bm-item::-moz-focus-inner {
  border: 0;
}


.menu-item, .menu-item:hover, .menu-item:active, .menu-item:focus {
  outline: 0;
}

/* Styling of overlay */
.bm-overlay {
  background: rgba(0, 0, 0, 0.3);
}


 /* End of CSS File  */
`;

// /* Coolors Exported Palette - coolors.co/dfc5e2-f7f7ff-71525c-8d909b-a7acb0 */

// /* HSL */
// $color1: hsla(294%, 33%, 83%, 1);
// $color2: hsla(240%, 100%, 98%, 1);
// $color3: hsla(341%, 16%, 38%, 1);
// $color4: hsla(227%, 7%, 58%, 1);
// $color5: hsla(207%, 5%, 67%, 1);

// /* RGB */
// $color1: rgba(223, 197, 226, 1);
// $color2: rgba(247, 247, 255, 1);
// $color3: rgba(113, 82, 92, 1);
// $color4: rgba(141, 144, 155, 1);
// $color5: rgba(167, 172, 176, 1);
