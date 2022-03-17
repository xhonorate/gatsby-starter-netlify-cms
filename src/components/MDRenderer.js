import React from "react";
import ChakraUIRenderer from 'chakra-ui-markdown-renderer';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw'
import { Button } from "@chakra-ui/button";
import AutoLink from './AutoLink';

const MDRenderer = (props) => {
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
        
        ...ChakraUIRenderer()
    }

    return (
        <ReactMarkdown components={customRender} rehypePlugins={[rehypeRaw]} {...props} />
    );
}

export default MDRenderer