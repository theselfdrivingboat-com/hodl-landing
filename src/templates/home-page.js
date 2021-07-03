import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import CarbonFreeAiPageTemplate from "../components/CarbonFreeAiPageTemplate";
import Layout from "../components/Layout";

const HomePage = (props) => {
  const {
    data: {
      markdownRemark: {
        frontmatter: {
          title,
          meta_title,
          meta_description,
          heading,
          description,
          offerings,
          testimonials,
        },
      },
    },
  } = props;

  return (
    <Layout>
      <CarbonFreeAiPageTemplate
        title={title}
        meta_title={meta_title}
        meta_description={meta_description}
        heading={title}
        description={meta_title}
        offerings=""
        testimonials=""
      />
    </Layout>
  );
};

HomePage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default HomePage;

export const pageQuery = graphql`
  query IndexPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        meta_title
        meta_description
        heading
        description
        offerings {
          blurbs {
            image {
              childImageSharp {
                fluid(maxWidth: 500, quality: 72) {
                  ...GatsbyImageSharpFluid
                }
              }
              publicURL
            }
            text
          }
        }
        testimonials {
          author
          quote
        }
      }
    }
  }
`;
