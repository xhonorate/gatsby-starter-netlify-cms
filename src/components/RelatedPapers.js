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



export default function RelatedPapers({relatedPapers}) {
    const whitePaperData = useWhitePaperData();

    console.log(relatedPapers);

    return (        
        <Box bg={'gray.100'} >
            <VStack spacing={2}>
                <Heading as={'h2'} fontFamily={'Poppins'} fontWeight={400} pt={'64px'} color={'primary.500'}>Related White Papers</Heading>
                <Text>Learn more about related topics in one of the papers below:</Text>
            </VStack>
            <Slider 
                dots={true}
                infinite={true}
                lazyLoad='ondemand'
                slidesToShow={Math.min(relatedPapers.length, 3)}
                slidesToScroll={1}
                autoplay={true}
                arrows={false}
                autoplaySpeed={3000}
                pauseOnHover={true}
                responsive={[
                {
                    breakpoint: 535,
                    settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    }
                }
                ]}
            >
                {relatedPapers.map((relatedPaper) =>
                    { const relatedPaperData = whitePaperData.find(e => e.node.fields.slug.includes(relatedPaper))
                    if (relatedPaperData == -1 || relatedPaperData == undefined) return null;
                    return (<WhitePaperCard key={relatedPaperData.node.fields.slug} py={'64px'} slug={relatedPaperData.node.fields.slug} {...relatedPaperData.node.frontmatter} />)
                    }
                )}
            </Slider> 
        </Box>
    )
}