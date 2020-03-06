import { graphql, useStaticQuery } from "gatsby";

const useServiceArea = () => {
  const serviceArea = useStaticQuery(graphql`
    query {
      map: allFile(filter: { name: { eq: "map" } }) {
        edges {
          node {
            childImageSharp {
              fluid(maxWidth: 500, quality: 95) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    }
  `);
  return serviceArea;
};

export default useServiceArea;
