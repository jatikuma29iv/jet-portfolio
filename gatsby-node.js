const path = require("path")

exports.createPages = async ({ actions, graphql, reporter }) => {

  const { createPage } = actions

	const notesList = path.resolve(`src/templates/notes-list.js`)

  const mdfiles = await graphql(`
    {
      allMarkdownRemark(limit: 1000) {
        edges {
          node {
            id
            frontmatter {
              slug
              template
            }
          }
        }
      }
    }
  `)

  // handle errors
  if (mdfiles.errors) {
    reporter.panicOnBuild(`E001: Error while running GraphQL query.`)
  }

  // create pages for each markdown file
  const notesPostTemplate = path.resolve(`src/templates/notes-post.js`)

	let notesPostCount = 0

  mdfiles.data.allMarkdownRemark.edges.forEach(({ node }) => {
    const path = node.frontmatter.slug
    createPage({
      path,
      component: notesPostTemplate,
      context: {
        id: node.id,
        pagePath: path,
      }
    })

    // Count blog posts.
    if (node.frontmatter.template === "notes-post") {
      notesPostCount++
    }
  })

	// Create blog-list pages
  const postsPerPage = 9
  const numPages = Math.ceil(notesPostCount / postsPerPage)

  console.log('notesPostCount: ', notesPostCount)
  console.log('numPages: ', numPages)

  Array.from({ length: numPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/notes` : `/notes/${i + 1}`,
      component: notesList,
      context: {
        limit: postsPerPage,
        skip: i * postsPerPage,
        numPages,
        currentPage: i + 1,
      },
    })
  })
}
