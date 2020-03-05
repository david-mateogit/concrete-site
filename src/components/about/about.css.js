import Img from "gatsby-image";
import styled from "styled-components";
import MEDIA from "../../helpers/mediaTemplates";

export const Article = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-top: -6rem;
  align-items: center;

  ${MEDIA.MIN_TABLET`
    margin-top: 1rem;
  `};
`;

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #71525c;
  margin: 0;

  ${MEDIA.MIN_TABLET`
  text-align: center;
  max-width: 600px;
  `};
`;

export const TextBox = styled.section`
  font-size: 1.2rem;
  line-height: 1.5;
  padding: 1rem;
  margin: 4rem 0;
  ${MEDIA.MIN_TABLET`
      font-size: 1.6rem;
      text-align: center;
  `};
`;

export const ImgBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 1rem;
`;

export const ImgStyled = styled(Img)`
  width: 100px;
  margin: 1rem;
  transform: scale(1);
  transition: all 0.2s ease-in-out;
  &:hover {
    transform: scale(1.2);
  }

  ${MEDIA.MIN_TABLET`
      width: 130px;
  `};
`;

export const Headings3 = styled.h3`
  font-weight: bold;
`;
