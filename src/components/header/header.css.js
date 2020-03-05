import styled from "styled-components";
import { Link } from "gatsby";
import Img from "gatsby-image";
import MEDIA from "../../helpers/mediaTemplates";

export const StyledHeader = styled.header`
  margin-bottom: 1.45rem;
`;

export const Container = styled.header`
  margin: 0 auto;
  width: 100%;
  max-width: 960;
  padding: 1.45rem 1.0875rem;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  display: flex;
  flex-direction: column;
`;

export const StyledImg = styled(Img)`
  width: 100px;
  margin: 0 1rem 0 0;

  ${MEDIA.MIN_TABLET`
    width: 130px;
  `};
`;

export const Headings1 = styled.h1`
  margin: 0;
  font-size: 1.5rem;
  color: #71525c;
  font-weight: bold;

  ${MEDIA.MIN_TABLET`
    font-size: 1.7rem;
  `};
`;
