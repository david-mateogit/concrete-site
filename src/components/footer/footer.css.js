import styled from "styled-components";

export const StyledFooter = styled.footer`
  background: rgba(141, 144, 155, 1);
  font-size: 1rem;
  padding: 1rem;

  text-align: center;
  > a {
    color: #71525c;
    font-weight: bold;
    text-decoration: none;
  }
`;

export const IconList = styled.div`
  display: flex;
  justify-content: center;
  > a > svg {
    fill: rgba(247, 247, 255, 1);
    margin: 1rem;
    width: 30px;
    height: 30px;
  }
`;
