import React, { useState } from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Slider from '../components/Slick';
import Section from '../components/Section';
import Hero from '../components/Hero';
import useWhitePaperData from '../components/WhitePaperQuery';
import WhitePaperCard from "../components/WhitePaperCard";
import { Box, Heading, VStack, Text } from '@chakra-ui/react';
import RelatedPapers from "../components/RelatedPapers";

// eslint-disable-next-line
export const WhitePaperTemplate = (
  {
    title,
    subheading,
    anim,
    sections,
    relatedPapers = [],
  }) => {
    
    return (
        <div>
            <Hero heading={title} subheading={subheading} lottie={anim} />
            <main>
                {sections && sections.map((section, index) => (
                <div key={`section-${index}`} >
                    <Section {...section} />
                </div>
                ))}
            </main>
            {relatedPapers && relatedPapers.length > 0 && <RelatedPapers relatedPapers={relatedPapers} />}
        </div>
    );
  };
  
  WhitePaperTemplate.propTypes = {
    title: PropTypes.string,
    subheading: PropTypes.string,
    anim: PropTypes.string,
    sections: PropTypes.array,
    relatedPapers: PropTypes.array,
  };
  
  const WhitePaper = ({ data }) => {
    const { frontmatter } = data.page;
    const { categories } = data.categories.frontmatter;

    let anim = "";
    if (frontmatter.selectedCategories && frontmatter.selectedCategories.length > 0) {
        anim = categories.find(obj => {
            return obj.name == frontmatter.selectedCategories[0];
        }).lottie;
    }
  
    return (
      <Layout>
        <WhitePaperTemplate
          title={frontmatter.title}
          subheading={frontmatter.subheading}
          anim={anim}
          categories={frontmatter.categories}
          sections={frontmatter.sections}
          relatedPapers={frontmatter.relatedPapers}
        />
      </Layout>
    );
  };
  
  WhitePaper.propTypes = {
    data: PropTypes.shape({
      markdownRemark: PropTypes.shape({
        frontmatter: PropTypes.object,
      }),
    }),
  };
  
  export default WhitePaper;
  
  export const pageQuery = graphql`
    query WhitePaperTemplate($id: String!) {
      page: markdownRemark(id: { eq: $id }) { 
        frontmatter {
            title
            subheading
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
            relatedPapers
            selectedCategories
        }
      }
      categories: markdownRemark(frontmatter: { templateKey: {eq: "white-papers"}}) {
        frontmatter {
            categories {
                name
                lottie
            }
        }
      }
    }
  `;
  