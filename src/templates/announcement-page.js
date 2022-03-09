import * as React from "react";
import Layout from "../components/Layout";
import { PropTypes } from 'prop-types';
import { graphql } from "gatsby";
import FullWidthImage from '../components/FullWidthImage';
import { MDBBtn } from 'mdb-react-ui-kit';
import Hero from '../components/Hero';

export const AnnouncementPageTemplate = ({
    heading,
    subheading,
    file,
    image
  }) => {
    return (
      <div>
          <Hero heading="Annoucements" subheading="WhiteStar Press Releases" />
          <main id="main">
            <FullWidthImage img={image} title={`## ${heading}`} subheading={subheading} >
              <MDBBtn tag="a" target="_blank" href={file.publicURL} size='lg' rounded >View the Latest Press Release</MDBBtn>
            </FullWidthImage>
          </main>
      </div>
    );
}

const AnnouncementPage = ({ data }) => {
    const { frontmatter } = data.markdownRemark;
  
    return (
      <Layout>
        <AnnouncementPageTemplate
          heading={frontmatter.heading}
          subheading={frontmatter.subheading}
          file={frontmatter.file}
          image={frontmatter.image}
        />
      </Layout>
    );
  };
  
  AnnouncementPage.propTypes = {
    data: PropTypes.shape({
      markdownRemark: PropTypes.shape({
        frontmatter: PropTypes.object,
      }),
    }),
  };

  export default AnnouncementPage;
    
  export const pageQuery = graphql`
    query AnnouncementPageTemplate {
      markdownRemark(frontmatter: { templateKey: { eq: "announcement-page" } }) {
        frontmatter {
          heading
          subheading
          file {
            publicURL
          }
          image {
            publicURL,
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
    }
  `;
  