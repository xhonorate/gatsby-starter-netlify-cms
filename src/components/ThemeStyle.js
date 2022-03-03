import React from 'react'
import PropTypes from 'prop-types'
import { graphql, StaticQuery } from 'gatsby'

class ThemeStyleTemplate extends React.Component {
  render() {
    const { 
      primary,
      secondary,
      success,
      info,
      warning,
      danger
    } = this.props.data.markdownRemark.frontmatter

    return (
      <style type="text/css" dangerouslySetInnerHTML={{__html: `
          :root { 
            --theme-color-primary: ${primary};
            --theme-color-secondary: ${secondary};
            --theme-color-success: ${success};
            --theme-color-info: ${info};
            --theme-color-warning: ${warning};
            --theme-color-danger: ${danger};
          }
      `}} />
    )
  }
}

ThemeStyleTemplate.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.shape({
        primary: PropTypes.string,
      }),
    }),
  }),
}


export default function ThemeStyle() {
  return (
    <StaticQuery
      query={graphql`
        query ThemeStyleQuery {
          markdownRemark( fields: {slug: {eq: "/theme-colors/"}}) {
            frontmatter {
              primary
              secondary
              success
              info
              warning
              danger
            }
          }
        }
      `}
      render={(data) => <ThemeStyleTemplate data={data} />}
    />
  );
}