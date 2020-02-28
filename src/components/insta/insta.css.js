import styled from "styled-components";

export const Article = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-content: center;
  align-items: center;

  min-height: 100vh;
  margin-top: 4rem;
`;

export const Section = styled.section`
  margin: 4rem 0;
  color: #71525c;
  padding: 0.5rem;
  > a {
    font-size: 1.3rem;
  }
`;

export const InstaBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin: 1.5rem -0.5rem;
  padding: 0.5rem 0;
  > a {
    box-shadow: 0;
    display: block;
    margin: 0.5rem;
    max-width: calc(50% - 1rem);
    width: 150px;
    transition: 200ms box-shadow linear;
    transition: 200ms transform ease-in-out;
    transform: scale(1);

    :hover {
      box-shadow: 0 2px 14px #22222244;
      z-index: 10;
      transform: scale(1.2);
    }
    :active {
      transform: scale(1);
    }
  }
`;
