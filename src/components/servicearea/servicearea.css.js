import styled from "styled-components";
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
  margin: 2rem 0;

  ${MEDIA.MIN_TABLET`
  text-align: center;
  max-width: 600px;
  `};
`;

export const TextBox = styled.section`
  font-size: 1.2rem;
  line-height: 1.5;
  padding: 1rem;
  margin: 1rem 0;

  ${MEDIA.MIN_TABLET`
   font-size: 1.5rem;
  `};
`;
