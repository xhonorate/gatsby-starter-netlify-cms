import * as React from "react";
import Layout from "../components/Layout";
import { PropTypes } from 'prop-types';
import { graphql } from "gatsby";
import Hero from '../components/Hero';
import { MDBScrollspySection, MDBContainer, MDBCol, MDBRow } from 'mdb-react-ui-kit';
import MDRenderer from '../components/MDRenderer';

export const WhitePapersPageTemplate = ({
    heading,
    subheading,
    title,
    body
  }) => {
    return (
      <div>
          <Hero heading={title} subheading={subheading} />
          <main id="main">
            <MDBScrollspySection>
              <MDBContainer>
                <MDBRow className="section-graphic-above">
                  <MDBCol className="section-content">
                    <div className="section-title">
                      <h2>{heading}</h2>
                      {body && <MDRenderer className="text-start">{body}</MDRenderer> }
                    </div>
                  </MDBCol>
                </MDBRow>
              </MDBContainer>
            </MDBScrollspySection>
          </main>
      </div>
    );
}

const WhitePapersPage = ({ data }) => {
    const { frontmatter, html } = data.markdownRemark;
    return (
      <Layout>
        <WhitePapersPageTemplate
          heading={frontmatter.heading}
          subheading={frontmatter.subheading}
          title={frontmatter.title}
          body={html}
        />
      </Layout>
    );
  };
  
  WhitePapersPage.propTypes = {
    data: PropTypes.shape({
      markdownRemark: PropTypes.shape(),
    }),
  };

  export default WhitePapersPage;
    
  export const pageQuery = graphql`
    query WhitePapersPageTemplate {
      markdownRemark(frontmatter: { templateKey: { eq: "white-papers" } }) {
        frontmatter {
          title
          heading
          subheading
        }
        html
      }
    }
  `;
  