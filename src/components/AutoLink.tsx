import { default as GatsbyLink } from 'gatsby-link';
import { Link } from '@chakra-ui/react'
import React from 'react';

const AutoLink = React.forwardRef((props: any, ref=null) => {
    const to = props.to || props.href || props.url || null;
    const external = to && (to.includes("http") || to.includes("www."))

    return (
        external ? 
            (<Link {...props} href={to} />)
            :
            to === null ?
                (<Link {...props} href={null} as={'div'} ref={ref} />)
                :
                (<Link {...props} href={null} as={GatsbyLink} to={to} ref={ref} />)
    );
});

export default AutoLink