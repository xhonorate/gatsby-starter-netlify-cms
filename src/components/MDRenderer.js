import React from "react";
import {remark} from 'remark'
import remarkPresetLintMarkdownStyleGuide from 'remark-preset-lint-markdown-style-guide'
import remarkHtml from 'remark-html'

const MDRenderer = (props) => {
    let content = remark()
        .use(remarkPresetLintMarkdownStyleGuide)
        .use(remarkHtml, {sanitize: false})
        .processSync(props.children).toString();

    const CustomTag = `${props.tag || 'div' }`;
    
    let newProps = {...props}
    delete newProps['tag'];
    delete newProps.children;

    return (
        <CustomTag {...newProps} dangerouslySetInnerHTML={{ __html: content }} />
    );
}

export default MDRenderer