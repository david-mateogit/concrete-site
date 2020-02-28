import styled from "styled-components";

export const Section = styled.section`
  margin: 60% 0;
  padding: 2rem;
  background-color: rgba(0, 0, 0, 0.5);
  color: #f7f7ff;
  display: flex;
  justify-content: space-around;
  align-items: center;
  > div > p {
    font-size: 1.1rem;
    line-height: 1.1;
  }
`;

export const Cta = styled.button`
  margin: 0 auto;
  height: 100%;
  width: 180px;
  border: none;
  background: transparent;
  color: white;

  font-weight: bold;
  outline: none;
  > a {
    text-decoration: none;
    color: white;

    > svg {
      transform: scale(1);
      transition: all 0.2s ease-in-out;
      cursor: pointer;
    }
    > svg:hover {
      transform: scale(1.1);
    }
    svg:active {
      transform: scale(0.9);
    }
  }
`;

export const Heading2 = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
`;
