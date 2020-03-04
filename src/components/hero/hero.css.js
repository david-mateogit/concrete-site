import styled from "styled-components";
import MEDIA from "../../helpers/mediaTemplates";

export const Article = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  > header {
    background: rgba(247, 247, 255, 0.9);
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    overflow: hidden;
  }
`;

export const Section = styled.section`
  padding: 2rem;
  background-color: rgba(113, 82, 92, 0.9);
  color: #f7f7ff;
  display: flex;
  justify-content: center;
  align-items: center;

  ${MEDIA.MIN_TABLET`
  text-align: center;
  max-width: 600px;
  `};
  > div > p {
    font-size: 1.1rem;
    line-height: 1.3;

    ${MEDIA.MIN_TABLET`
    font-size: 1.5rem;
    width: 200px;
    `};
  }
`;

export const Cta = styled.button`
  margin: 0 auto;
  height: 100%;
  width: 180px;
  border: none;
  background: transparent;
  color: white;

  font-weight: bold;
  outline: none;
  > a {
    text-decoration: none;
    color: white;

    > svg {
      transform: scale(1);
      transition: all 0.2s ease-in-out;
      cursor: pointer;
    }
    > svg:hover {
      transform: scale(1.1);
    }
    svg:active {
      transform: scale(0.9);
    }
  }
`;

export const Heading2 = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 0.5rem;

  ${MEDIA.MIN_TABLET`
   font-size: 2rem;
  `};
`;
