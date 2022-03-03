import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import { MDBContainer, MDBRow, MDBCol, MDBScrollspySection } from "mdb-react-ui-kit";
import Layout from "../components/Layout";
import HeroCarousel from "../components/HeroCarousel";
import Content, { HTMLContent } from "../components/Content";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";
import MDRenderer from '../components/MDRenderer';

// eslint-disable-next-line
export const HomePageTemplate = ({
    title,
    carousel,
    products,
    sections,
  }) => {  
    return (
        <main>
            <HeroCarousel showIndicators={carousel.showIndicators} showControls={carousel.showControls} slides={carousel.slides}/>

            <MDBScrollspySection className="products">
              <MDBContainer>
                <MDBRow>
                  {products.map((product) => (
                    <MDBCol lg="6">
                      <MDBContainer className="justify-content-center text-center py-5">
                        <PreviewCompatibleImage 
                          imageInfo={{
                            image: product.image,
                            alt: "product-image",
                            options: {
                              style: {
                                gridArea: "1/1",
                                width: "128px",
                                height: "128px"
                              },
                              align: "center",
                              formats: ["auto", "webp", "avif"],
                            }
                          }} />
                          <h3 className="my-4">
                            {product.heading}
                          </h3>
                        <MDRenderer>{product.content}</MDRenderer>
                        </MDBContainer>
                    </MDBCol>
                  ))}

                </MDBRow>
              </MDBContainer>
            </MDBScrollspySection>

            {sections.map((section) => (
              <div>
                <hr></hr>
                <MDBScrollspySection>
                  <MDBContainer>
                    <MDBRow className={ section.graphic && `section-graphic-${section.graphic[0].position}` }>
                      <MDBCol className="section-content">
                        <div className={`text-${section.align} section-title`}>
                          <h2>{section.heading}</h2>
                          {section.subheading && <p className="pb-4"><em>{section.subheading}</em></p>}
                          <MDRenderer>{section.content}</MDRenderer>
                        </div>
                      </MDBCol>
                      { section.graphic &&
                     
                        <MDBCol className="section-graphic">
                        { section.graphic[0].type == "image-object" ?
                          <PreviewCompatibleImage imageInfo={{  
                            image: section.graphic[0].image,
                            alt: "section-image",
                            options: {
                              objectFit: "contain",
                              placeholder: "blurred",
                              align: section.graphic[0].align,
                            }
                          }} /> 
                          : 
                          <div>lottie animation goes here</div> } 
                        </MDBCol>
                      }
                    </MDBRow>
                  </MDBContainer>
                </MDBScrollspySection>
              </div>
            ))}
            <hr></hr>
        </main>
    );
  };
  
  HomePageTemplate.propTypes = {
    title: PropTypes.string,
    carousel: PropTypes.shape({
      showControls: PropTypes.bool,
      showIndicators: PropTypes.bool,
      slides: PropTypes.array,
    }),
    products: PropTypes.array,
    sections: PropTypes.array,
  };
  
  const HomePage = ({ data }) => {
    const { frontmatter } = data.markdownRemark;
  
    return (
      <Layout>
        <HomePageTemplate
          title={frontmatter.title}
          carousel={frontmatter.carousel}
          products={frontmatter.products}
          sections={frontmatter.sections}
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
          products {
            image {
              childImageSharp {
                gatsbyImageData
              }
            }
            heading
            content
          }
          sections {
            align
            heading
            subheading
            content
            graphic {
              position
              type
              image {
                publicURL,
                childImageSharp {
                  gatsbyImageData
                }
              }
            }
          }
        }
      }
    }
  `;
  