import { graphql, useStaticQuery } from "gatsby";

const useHero = () => {
  const backgrounds = useStaticQuery(graphql`
    query {
      backgrounds: allFile(
        filter: {
          sourceInstanceName: { eq: "images" }
          relativeDirectory: { eq: "bg" }
        }
      ) {
        nodes {
          relativePath
          name
          publicURL
          childImageSharp {
            fluid(maxWidth: 1080, quality: 100) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    }
  `);
  return backgrounds;
};

export default useHero;
