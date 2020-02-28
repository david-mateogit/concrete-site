import styled from "styled-components";

export const Section = styled.section`
  background-color: rgba(113, 82, 92, 1);
  border-width: 0;
  display: block;
  width: 100%;
  margin: 0;
  padding: 0.8rem;
  text-align: center;
  @media (max-width: 371px) {
    padding: 0.4rem;
  }
`;

export const Heading2 = styled.h2`
  color: #fff;
  font-size: 1.5rem;
  letter-spacing: 1px;
  line-height: 1.2;
  margin: 0;
  @media (max-width: 371px) {
    font-size: 1.5rem;
  }
  @media (max-width: 332px) {
    font-size: 1.4rem;
  }
`;
