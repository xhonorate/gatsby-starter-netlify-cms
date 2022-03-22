import React from "react";
import ChakraUIRenderer from 'chakra-ui-markdown-renderer';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw'
import { Button } from "@chakra-ui/button";
import AutoLink from './AutoLink';
import { Text } from "@chakra-ui/layout";
import { SimpleGrid } from '@chakra-ui/react';
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
        
        ...ChakraUIRenderer(chakraOverrides)
    }

    return (
        <ReactMarkdown components={customRender} rehypePlugins={[rehypeRaw]} {...props} />
    );
}

export default MDRenderer