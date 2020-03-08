import styled from "styled-components";
import Img from "gatsby-image";
import MEDIA from "../../helpers/mediaTemplates";

export const Article = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #71525c;

  ${MEDIA.MIN_TABLET`
  text-align: left;
  max-width: 600px;
  `};
`;

export const TextBox = styled.section`
  font-size: 1.2rem;
  line-height: 1.5;
  padding: 2rem;
  margin: 1rem 0;

  ${MEDIA.MIN_TABLET`
   font-size: 1.4rem;
   padding: 2.5rem;
  `};

  > ul {
    margin-left: 1.5rem;
    > li {
      margin-bottom: 1rem;
    }
    > li > h4 {
      font-weight: bold;
      display: inline-block;
    }
  }
`;

export const ImgBox = styled.div`
  box-sizing: border-box;
  width: 100vw;
  max-width: 600px;
  overflow: hidden;
  padding: 0 2rem;
`;

export const StyledImg = styled(Img)`
  border: 1px solid #eee;
  box-shadow: rgba(0, 0, 0, 0.1) 0 0 15px;
`;
