import styled from "styled-components";

export const Article = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 4rem;
`;

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #71525c;

  > a {
    margin-top: 1rem;
    font-size: 1rem;
  }
`;

export const TextBox = styled.section`
  font-size: 1rem;
  padding: 1rem;
  margin: 1rem 0;
  > blockquote {
    line-height: 1.4;
  }
`;

export const Heading4 = styled.h4`
  font-size: 1.2rem;
  margin: 0.7rem 0;
  font-weight: bold;
`;
export const Heading5 = styled.h5`
  margin: 0.5rem 0;
  font-weight: bold;
`;
