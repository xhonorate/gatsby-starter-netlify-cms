import { graphql, useStaticQuery } from 'gatsby'

const useWhitePaperData = () => {
  const { allMarkdownRemark } = useStaticQuery(
    graphql`
      query whitePaperCardQuery {
        allMarkdownRemark(filter: {frontmatter: { templateKey: {eq: "white-paper"}}}) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
                subheading,
                icon
                selectedCategories
              }
            }
          }
        }
      }
    `
  )
  return allMarkdownRemark.edges
}

export default useWhitePaperData
