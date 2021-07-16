import * as React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/layout'
//import NotesPageTemplate from '../templates/notes'

export const notes = graphql`
	query notesListQuery ($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { order: DESC, fields:[frontmatter___date] }
      filter: { frontmatter: { template: { eq: "notes-post" } } }
      limit: $limit
      skip: $skip
      ) {
        edges {
          node {
            id
            excerpt(pruneLength: 250)
            frontmatter {
              date(formatString: "MMMM DD, YYYY")
              slug
              title
              description
              featuredImage
            }
          }
        }
      }
  }
`

const Notes = ({ edges }) => {
  return edges.map( e => (
    <li className='notebook-index-item'>
      <Link to={ `/${e.node.frontmatter.slug}` }>
        <img src={ e.node.frontmatter.featuredImage } alt='fi' />
      </Link>
      <Link to={ `/${e.node.frontmatter.slug}` }>
        { e.node.frontmatter.title }
      </Link>
      <p>{ e.node.frontmatter.description }</p>
      <p>{ e.node.frontmatter.date }</p>
    </li>
  ))
}

export default function NotesPage({ data, pageContext }) {
  return (
    <Layout>
      <img
        src='https://images.unsplash.com/photo-1527176930608-09cb256ab504?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1506&q=80'
        alt='notebook feauted img'
        className='notebook-featured-image' />
      <div className='container-fluid'>
        <h1>Notebook</h1>
        <ul className='notebook-index'>
          <Notes edges={ data.allMarkdownRemark.edges } />
        </ul>
      </div>
    </Layout>
  )
}

