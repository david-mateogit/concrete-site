import { graphql, useStaticQuery } from "gatsby";

const useHero = () => {
  const logo = useStaticQuery(graphql`
    query {
      Logo: allFile(filter: { name: { eq: "Logo" } }) {
        edges {
          node {
            childImageSharp {
              fluid(maxWidth: 130, quality: 100) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    }
  `);
  return logo;
};

export default useHero;
