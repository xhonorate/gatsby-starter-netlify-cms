import React, { useState } from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import { MDBContainer, MDBRow, MDBCol, MDBScrollspySection, MDBBtn } from "mdb-react-ui-kit";
import Layout from "../components/Layout";
import HeroCarousel from "../components/HeroCarousel";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";
import MDRenderer from '../components/MDRenderer';
import Slider from '../components/Slick';
import Contact from '../components/Contact';
import Section from '../components/Section';
import { Heading } from "@chakra-ui/layout";

// eslint-disable-next-line
export const HomePageTemplate = ({
    title,
    carousel,
    products,
    sections,
    team
  }) => {
    const [showContact, setShowContact] = useState(false);
    const openContact = () => setShowContact(true);

    if (window.location.hash == "#contact" && !showContact) { 
      openContact();
    };

    return (
        <main>
            <HeroCarousel showIndicators={carousel.showIndicators} showControls={carousel.showControls} slides={carousel.slides}/>
            <MDBScrollspySection className="products">
              <MDBContainer>
                <MDBRow>
                  {products.map((product, index) => (
                    <MDBCol key={`product-${index}`} lg="6" id={`product-${index}`} >
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
                          <Heading as='h3' size='lg' fontWeight='light' py={4}>
                            {product.heading}
                          </Heading>
                        <MDRenderer>{product.content}</MDRenderer>
                        </MDBContainer>
                    </MDBCol>
                  ))}

                </MDBRow>
              </MDBContainer>
            </MDBScrollspySection>
            {sections.map((section, index) => (
              <div key={`section-${index}`} >
                <hr></hr>
                  <Section {...section} id={index === 0 ? "about" : ""} />
              </div>
            ))}
            
            <MDBScrollspySection className="team">
              <MDBContainer>
                <MDBRow>
                  <MDBCol>
                    <div className="section-title">
                        <h2>{team.heading}</h2>
                        <MDRenderer>{team.text}</MDRenderer>
                    </div>
                  </MDBCol>
                </MDBRow>
              </MDBContainer>

              <MDBContainer>
                  <Slider 
                    className='team-slider row'
                    infinite={true}
                    lazyLoad='ondemand'
                    slidesToShow={3}
                    slidesToScroll={1}
                    autoplay={true}
                    autoplaySpeed={3500}
                    pauseOnHover={true}
                    responsive={[
                      {
                        breakpoint: 992,
                        settings: {
                        centerPadding: '40px',
                        slidesToShow: 1
                          }
                      },
                      {
                        breakpoint: 1200,
                        settings: {
                          slidesToShow: 2
                        }
                      },
                      ]}
                    arrows={team.showControls}
                  >
                    {team.members.map((member) => (
                      <div key={member.name} className="team-member">
                        <PreviewCompatibleImage imageInfo={{
                          image: member.image, 
                          alt: `picture of ${member.name}`,
                          options: {
                            objectFit: "contain",
                            placeholder: "blurred",
                          }
                        }} />
                        <h3>{member.name}</h3>
                        <h4>{member.role}</h4>
                        <MDRenderer className="team-description">{member.description}</MDRenderer>
                      </div>
                    ))}
                  </Slider>
                </MDBContainer>
            </MDBScrollspySection>

            <Contact open={showContact} />
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
    team: PropTypes.object
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
          team={frontmatter.team}
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
              lottie
              autoplay
              controls
              interactive
              loop
              image {
                publicURL,
                childImageSharp {
                  gatsbyImageData
                }
              }
            }
          }
          team {
            heading
            text
            showControls
            members {
              image {
                publicURL,
                childImageSharp {
                  gatsbyImageData
                }
              }
              name
              role
              description
            }
          }
        }
      }
    }
  `;
  