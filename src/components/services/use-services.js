import { graphql, useStaticQuery } from "gatsby";

const useServices = () => {
  const backgrounds = useStaticQuery(graphql`
    query {
      backgrounds: allFile(
        filter: {
          sourceInstanceName: { eq: "images" }
          relativeDirectory: { eq: "services" }
        }
      ) {
        nodes {
          relativePath
          name
          childImageSharp {
            fluid(maxWidth: 500, quality: 100) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    }
  `);
  return backgrounds;
};

export default useServices;
