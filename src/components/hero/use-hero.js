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
            fluid(maxWidth: 1080, quality: 90) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  `);
  return backgrounds;
};

export default useHero;
