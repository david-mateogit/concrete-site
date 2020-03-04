import styled from "styled-components";
import MEDIA from "../../helpers/mediaTemplates";

export const Article = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #71525c;
  margin: 20% 0;
`;

export const CarouselBox = styled.div`
  height: 50vh;
  width: 100vw;
  max-width: 960px;
  overflow: hidden;
  position: relative;
  left: 0;
  top: 0;
  text-align: center;
  z-index: 1;
`;

export const ServiceBanner = styled.div`
  color: white;
  font-size: 2rem;
  position: absolute;
  border: none;
  box-shadow: 10px -1px 75px 45px rgba(0, 0, 0, 0.8);
  left: 10%;
  top: 80%;
  padding: 1rem;
  background-color: gray;
`;

export const TextBox = styled.section`
  font-size: 1.2rem;
  padding: 1rem;
  margin-top: 1rem;
  ${MEDIA.MIN_TABLET`
      font-size: 1.7rem;
  `};
  > p {
    margin-bottom: 0.5rem;
  }
  > ul {
    margin-top: 0.5rem;
    list-style: none;

    ${MEDIA.MIN_TABLET`
    max-width: 600px;
    font-size: 1.6rem;
    display: flex;
    flex-wrap: wrap;
    `};

    > li {
      padding: 0.2rem;
      ${MEDIA.MIN_TABLET`
      padding: 0.6rem;
      margin-right: 0.7rem;
      `};
    }
  }
`;

export const Heading3 = styled.h3`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 0.5rem;

  ${MEDIA.MIN_TABLET`
      font-size: 2rem;
      margin-bottom: 1rem;
  `};
`;
