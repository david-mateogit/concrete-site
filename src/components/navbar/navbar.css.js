import styled from "styled-components";
import MEDIA from "../../helpers/mediaTemplates";

export const AnchorButton = styled.button`
  font-size: 1.5rem;
  align-self: flex-start;
  border: none;
  background: transparent;
  display: none;
  padding-left: 0;
  padding-right: 1rem;
  ${MEDIA.MIN_TABLET`
  display: unset;
  `};

  > a {
    text-decoration: none;
    display: inline-block;
    margin-top: 1rem;
    color: #71525c;
    outline: none;
    :focus,
    :hover,
    :active {
      border-bottom: 1px solid #71525c;
      margin-bottom: -5px;
    }
  }
`;
