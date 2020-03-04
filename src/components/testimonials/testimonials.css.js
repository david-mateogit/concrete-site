import styled from "styled-components";
import MEDIA from "../../helpers/mediaTemplates";

export const Article = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 4rem;
`;

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #71525c;

  ${MEDIA.MIN_TABLET`
  text-align: center;
  max-width: 600px;
  `};

  > a {
    margin-top: 1rem;
    font-size: 1rem;
  }
`;

export const TextBox = styled.section`
  font-size: 1rem;
  background-color: #fff;
  border: 1px solid #eee;
  box-shadow: rgba(0, 0, 0, 0.1) 0 0 15px;
  box-sizing: border-box;
  margin: 1rem auto;
  padding: 30px 38px;

  ${MEDIA.MIN_TABLET`
   font-size: 1.3rem;
  `};
  > blockquote {
    line-height: 1.4;
  }
`;

export const Heading4 = styled.h4`
  font-size: 1.2rem;
  margin: 0.7rem 0;
  font-weight: bold;
  text-align: right;
`;
export const Heading5 = styled.h5`
  margin: 0.8rem 0 0.5rem;
  font-weight: bold;
  text-align: right;
`;
