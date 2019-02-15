import React from "react";
import Layout from "../components/layout";
import { graphql } from "gatsby";
import CustomizedPage from "../components/CustomizedPage";
import SEO from "../components/seo";
import renderAst from "../plugins/index";

const Custom = ({ data: { shit } }) => {
  return (
    <Layout>
      <SEO title="Custom" keywords={[`gatsby`, `application`, `react`]} />
      <CustomizedPage>{renderAst(shit.edges[0].node.htmlAst)}</CustomizedPage>
    </Layout>
  );
};

export const query = graphql`
  {
    shit: allMarkdownRemark {
      edges {
        node {
          htmlAst
        }
      }
    }
  }
`;

export default Custom;
