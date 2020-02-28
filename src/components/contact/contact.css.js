import styled from "styled-components";

export const Article = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  min-height: 100vh;
`;

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  height: 700px;
  justify-content: space-around;
  align-items: center;
  color: #71525c;
  margin: 10% 0;
`;

export const TextBox = styled.section`
  font-size: 1rem;
  padding: 1rem;
  line-height: 1.4;
  align-self: flex-start;
`;

export const LinkStyled = styled.a`
  font-size: 1rem;
  text-decoration: none;
  display: block;
  margin-bottom: 0.5rem;
  > svg {
    transform: scale(1);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
    width: 20px;
    margin-bottom: -4px;
  }
  > svg:hover {
    transform: scale(1.1);
  }
  svg:active {
    transform: scale(0.9);
  }
`;

export const Heading4 = styled.h4`
  margin: 0.7rem 0;
  font-size: 1.4rem;
  font-weight: bold;
`;
