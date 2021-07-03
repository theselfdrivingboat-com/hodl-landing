import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import AiTemplate from "../components/AiTemplate";
import Layout from "../components/Layout";

const AiPage = (props) => {
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
      <AiTemplate
        title={title}
        meta_title={meta_title}
        meta_description={meta_description}
        heading={heading}
        description={description}
        offerings={offerings}
        testimonials={testimonials}
      />
    </Layout>
  );
};

AiPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default AiPage;

export const pageQuery = graphql`
  query AiPage($id: String!) {
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
