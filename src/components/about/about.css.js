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
  justify-content: center;
  align-items: center;
  color: #71525c;
  margin: 10% 0 20%;
`;

export const TextBox = styled.section`
  font-size: 1.2rem;
  line-height: 1.5;
  padding: 1rem;
  margin: 4rem 0;
`;

export const ImgBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

export const ImgStyled = styled.img`
  width: 110px;
  padding: 0.5rem;
  transform: scale(1);
  transition: all 0.2s ease-in-out;
  &:hover {
    transform: scale(1.2);
  }
`;
