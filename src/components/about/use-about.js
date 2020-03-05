import { graphql, useStaticQuery } from "gatsby";

const useAbout = () => {
  const homeAdvisor = useStaticQuery(graphql`
    query {
      homeadvisor: allFile(
        filter: {
          sourceInstanceName: { eq: "images" }
          relativeDirectory: { eq: "homeadvisor" }
        }
      ) {
        nodes {
          relativePath
          name
          childImageSharp {
            fluid(maxWidth: 130, quality: 85) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    }
  `);
  return homeAdvisor;
};

export default useAbout;
