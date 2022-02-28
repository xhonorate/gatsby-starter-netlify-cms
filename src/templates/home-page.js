import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import { MDBContainer, MDBBtn } from "mdb-react-ui-kit";
import Layout from "../components/Layout";
import HeroCarousel from "../components/HeroCarousel";
import Content from "../components/Content";

// eslint-disable-next-line
export const HomePageTemplate = ({
    title,
    carousel,
  }) => {  
    return (
        <main>
            <HeroCarousel showIndicators={carousel.showIndicators} showControls={carousel.showControls} slides={carousel.slides}/>

            <MDBContainer>
            <Content content={title} />
            </MDBContainer>
        </main>
    );
  };
  
  HomePageTemplate.propTypes = {
    title: PropTypes.object,
    carousel: PropTypes.shape({
      showControls: PropTypes.bool,
      showIndicators: PropTypes.bool,
      slides: PropTypes.array,
    }),
  };
  
  const HomePage = ({ data }) => {
    const { frontmatter } = data.markdownRemark;
  
    return (
      <Layout>
        <HomePageTemplate
          title={frontmatter.title}
          carousel={frontmatter.carousel}
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
    query HomePageTemplate {
      markdownRemark(frontmatter: { templateKey: { eq: "home-page" } }) {
        frontmatter {
          title
          carousel {
            showControls
            showIndicators
            slides {
              image {
                childImageSharp {
                  gatsbyImageData
                }
              }
              heading
              subheading
              align
            }
          }
        }
      }
    }
  `;
  