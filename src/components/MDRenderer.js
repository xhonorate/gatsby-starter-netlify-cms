import React from "react";
import ChakraUIRenderer from 'chakra-ui-markdown-renderer';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw'
import { Button } from "@chakra-ui/button";
import AutoLink from './AutoLink';
import { Text, Heading } from "@chakra-ui/layout";
import { SimpleGrid, Accordion, AccordionItem, AccordionButton, Box, AccordionIcon, AccordionPanel } from '@chakra-ui/react';
import { Tooltip } from "@chakra-ui/tooltip";

const MDRenderer = (props) => {
    const chakraOverrides= {
        h6: props => {
            const { children } = props;
            return (
            <Text mb={2} fontSize={'xl'} >
                {children}
            </Text>
            );
        },
        /* Cannot pass props to staticimage like this, unfortunately...
        img: props => {
            return (
                <StaticImage src={`${props.src}`} alt={`${props.alt}`} />
            );
        },*/
    }

    const customRender = {
        // Use h2s instead of h1s
        //h1: 'h2',
        // Use a chakra component for buttons
        button: ({node, ...props}) => (
            <AutoLink to={props.to}>
                <Button 
                mt={2}
                variant={props.variant} 
                colorScheme={props.colorScheme || props.colorscheme}>
                    {props.children}
                </Button>
            </AutoLink>),

        dl: props => {
            const { children } = props;
            return (
            <SimpleGrid spacingX={5} columns={{base: 1, md: 2}}>
                {children}
            </SimpleGrid>
            );
        },

        tooltip: ({node, ...props}) => (
            <Tooltip hasArrow placement={'top'} label={props.label}>
                <Text as='span' color="info.500">{props.children}</Text>
            </Tooltip>),

        ipaccordion: ({node, ...props}) => {
            const { children, otherProps } = props;
            const items = (children[0].split("\n"));
            console.log(items);
            return (
            <Accordion pt={4} defaultIndex={[0]} allowToggle {...otherProps}>
                { items.map((item) => {
                    if (!item) return;
                    let {title, text, id} = JSON.parse(item)
                    return (
                        <AccordionItem boxShadow={'md'} mb={3} borderRadius={5} bg={'white'} >
                            <AccordionButton 
                                _expanded={{ color: 'primary.500' }}
                                fontFamily={"Poppins,sans-serif"}
                                fontSize={'md'}
                                ps={8}
                                py={4}
                            >
                                <Box flex='1' textAlign='left'>
                                    {title}
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                            <AccordionPanel p={4}>
                                <Text mb={4}>{text}</Text>
                                <Text as='i'>Patent ID: {id}</Text>
                            </AccordionPanel>
                        </AccordionItem>
                    )})}
            </Accordion>);
        },

        accordionitem: ({node, ...props}) => (
            <AccordionItem {...props} />),

        accordionbutton: ({node, ...props}) => (
            <asd {...props} />),



        
        ...ChakraUIRenderer(chakraOverrides)
    }

    return (
        <ReactMarkdown components={customRender} rehypePlugins={[rehypeRaw]} {...props} />
    );
}

export default MDRenderer