import * as React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import NotesPostTemplate from './notes-post-nolayout'

export default function NotesPostPage({ data, pageContext }) {
	
	var { //id,
	 frontmatter: { title, description, featuredImage, date },
	 html } = data.markdownRemark

  return (
  <Layout>
    <NotesPostTemplate
      title={ title }
      description={ description }
      featuredImage={ featuredImage }
      date={ date }
      html={ html }
    />
  </Layout>
)}

export const pageQuery = graphql`
  query NotesPostQuery($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      excerpt(pruneLength: 148)
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
        description
        featuredImage
      }
    }
  }
`
