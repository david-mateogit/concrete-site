import styled, { keyframes } from "styled-components";
import MEDIA from "../../helpers/mediaTemplates";

// animations

const pulse = keyframes`
  0% {
    opacity: 1;
    -webkit-transform: none;
    transform: none;
  }
  50% {
    opacity: 0.8;
    -webkit-transform: scale(0.8);
    transform: scale(0.8);
  }
  100% {
    opacity: 1;
    -webkit-transform: none;
    transform: none;
  }
`;

const fadeSlideUp = keyframes`
  0% {
    opacity: 0;
    -webkit-transform: translateY(4rem);
            transform: translateY(4rem);
  }
  100% {
    opacity: 1;
    -webkit-transform: none;
            transform: none;
  }

`;
const fadeSlideDown = keyframes`
  0% {
    opacity: 0;
    -webkit-transform: translateY(-4rem);
            transform: translateY(-4rem);
  }
  100% {
    opacity: 1;
    -webkit-transform: none;
            transform: none;
  }

`;

// END ANIMATIONS

export const Article = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  min-height: -webkit-fill-available;
  width: 100%;

  @media (orientation: landscape) {
    min-height: 600px;
  }

  > header {
    background: rgba(247, 247, 255, 0.9);
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    overflow: hidden;
    opacity: 0;
    animation: ${fadeSlideDown} 1s 0.5s ease-out forwards;
  }
`;

export const Section = styled.section`
  box-sizing: border-box;
  background-color: rgba(113, 82, 92, 0.9);
  color: #f7f7ff;
  padding: 2rem;

  margin: 45vh auto 0;
  transform: translateY(-50%);

  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;

  animation: ${fadeSlideUp} 2s 1.5s ease-out forwards;

  ${MEDIA.MIN_TABLET`
  text-align: center;
  max-width: 600px;
  `};
  > div {
    padding: 0.8rem 0;
  }
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
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  > a {
    text-decoration: none;
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    > svg {
      transform: scale(1);
      transition: all 0.2s ease-in-out;
      cursor: pointer;
      display: block;
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

export const ArrowSection = styled.section`
  animation: ${pulse} 2s 3s ease-out infinite;
  /* bottom: 4vh;
  left: 0;
  position: absolute;
  right: 0; */
  text-align: center;

  margin: 6vh auto 0;
  transform: translateY(-50%);

  z-index: 5;

  > svg {
    animation: ${fadeSlideUp} 2s 3s ease-out forwards;
    opacity: 0;
    width: 20px;
    height: 20px;

    ${MEDIA.MIN_TABLET`
      width: 40px;
      height: 40px;
    `};
  }
`;
