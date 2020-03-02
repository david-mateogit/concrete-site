import styled from "styled-components";

export const Article = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 4rem 0;
`;

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  color: #71525c;
`;

export const TextBox = styled.section`
  font-size: 1rem;
  padding: 2rem;
  line-height: 1.4;
  align-self: flex-start;
`;

export const LinkStyled = styled.a`
  font-size: 1.3rem;
  text-decoration: none;
  display: flex;
  color: #71525c;
  align-items: flex-end;
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
