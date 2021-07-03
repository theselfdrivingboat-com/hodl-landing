import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import CarbonFreeAiPageTemplate from "../components/CarbonFreeAiPageTemplate";
import Layout from "../components/Layout";

const CarbonFreeAiPage = (props) => {
  const {
    data: {
      markdownRemark: {
        frontmatter: { title, meta_title, meta_description, pricing },
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

CarbonFreeAiPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default CarbonFreeAiPage;

export const carbonFreeAiPageQuery = graphql`
  query CarbonFreeAiPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        meta_title
        meta_description
        pricing {
          heading
          description
          plans {
            description
            items
            plan
            price
          }
        }
      }
    }
  }
`;
