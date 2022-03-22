import React, { useState } from "react";
import Layout from "../components/Layout";
import { PropTypes } from 'prop-types';
import { graphql } from "gatsby";
import Hero from '../components/Hero';
import Section from '../components/Section';
import { Box, VStack, Text, HStack, SimpleGrid } from '@chakra-ui/react';
import Slider from '../components/Slick';
import { useRadioGroup, useRadio } from "@chakra-ui/radio";
import useWhitePaperData from '../components/WhitePaperQuery';
import WhitePaperCard from "../components/WhitePaperCard";

function RadioCard(props) {
  const { getInputProps, getCheckboxProps } = useRadio(props)

  const input = getInputProps()
  const checkbox = getCheckboxProps()

  return (
    <Box as='label'>
      <input {...input} />
      <Box
        {...checkbox}
        cursor='pointer'
        borderWidth='1px'
        borderRadius='md'
        boxShadow='md'
        _checked={{
          bg: 'primary.500',
          color: 'white',
          borderColor: 'primary.500',
        }}
        _focus={{
          boxShadow: 'outline',
        }}
        px={5}
        py={3}
      >
        {props.children}
      </Box>
    </Box>
  )
}

export const WhitePapersPageTemplate = ({
    heading,
    subheading,
    title,
    body,
    categories
  }) => {
    const whitePaperData = useWhitePaperData();

    const [ selectedCategory, setSelectedCategory ] = useState('All');

    const options = (categories.map(category => category.name));
    options.push('All');

    const { getRootProps, getRadioProps } = useRadioGroup({
      name: 'category',
      defaultValue: 'All',
      onChange: setSelectedCategory,
    })

    const group = getRootProps()

    return (
      <div>
          <Hero heading={title} subheading={subheading} />
          <main id="main">
            <Section heading={heading} content={body} />
            <Box bg={'gray.100'} py={'64px'} >
              <VStack spacing={2} pb={4}>
                <HStack {...group}>
                  {options.map((value) => {
                    const radio = getRadioProps({ value })
                    return (
                      <RadioCard key={value} {...radio}>
                        {value}
                      </RadioCard>
                    )
                  })}
                </HStack>
                <Text as={'i'}>Click one of the buttons above to filter by category</Text>
              </VStack>
              <SimpleGrid px={{base: 1, md: 4}} columns={{base: 1, md:2, lg: 3, xl: 4}} spacing={10}>
                { whitePaperData && whitePaperData.length > 0 && whitePaperData.map((whitePaper) => {
                    if (selectedCategory === 'All' || whitePaper.node.frontmatter.selectedCategories.includes(selectedCategory)) {
                      return (<WhitePaperCard key={whitePaper.node.fields.slug} slug={whitePaper.node.fields.slug} {...whitePaper.node.frontmatter} />)
                    } else {
                      return null;
                    }
                  })
                }
              </SimpleGrid>
            </Box>
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
          categories={frontmatter.categories}
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
          categories {
            name
          }
        }
        html
      }
    }
  `;
  