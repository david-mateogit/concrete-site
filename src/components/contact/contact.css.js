import styled from "styled-components";
import MEDIA from "../../helpers/mediaTemplates";

export const Article = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 4rem 0;
  align-items: center;
`;

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  color: #71525c;

  ${MEDIA.PHONE`
   flex-direction: column;
   margin: 0;
  `};

  ${MEDIA.MIN_TABLET`
   flex-direction: row;
   flex-wrap: wrap;
   margin-top: 4rem;
   justify-content: space-around;
  `};
`;

export const TextBox = styled.section`
  font-size: 1rem;
  padding: 2rem 2rem 0;
  line-height: 1.4;
  align-self: flex-start;
  > ul {
    padding: 0 2rem;
  }
  > ul > li {
    font-size: 1.3rem;
  }
`;

export const LinkStyled = styled.a`
  font-size: 1.3rem;
  text-decoration: none;
  display: flex;
  color: #71525c;
  align-items: center;
  margin-bottom: 2rem;

  > svg {
    transform: scale(1);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
    width: 40px;

    margin-right: 0.5rem;
  }
  > svg:hover {
    transform: scale(1.1);
  }
  svg:active {
    transform: scale(0.9);
  }
  > div > p {
    margin-bottom: 0;
  }
`;

export const Div = styled.div`
  font-size: 1.3rem;
  text-decoration: none;
  display: flex;
  color: #71525c;
  align-items: center;
  margin-bottom: 2rem;

  > svg {
    transform: scale(1);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
    width: 40px;

    margin-right: 0.5rem;
  }
  > svg:hover {
    transform: scale(1.1);
  }
  svg:active {
    transform: scale(0.9);
  }
  > div > p {
    margin-bottom: 0;
  }
`;

export const Heading3 = styled.h3`
  margin: 0.1rem 0;
  font-size: 1.4rem;
  font-weight: bold;
  display: block;
`;
