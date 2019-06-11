/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// const path = require(`path`);
// const { createFilePath } = require(`gatsby-source-filesystem`);
//
// exports.onCreateNode = ({ node, getNode, actions }) => {
//   const { createNodeField } = actions;
//
//   if (
//     node.internal.type !== `File` ||
//     path.extname(node.relativePath) !== ".rst"
//   )
//     return;
//
//   const slug = createFilePath({
//     node,
//     getNode
//   });
//   createNodeField({
//     node,
//     name: `slug`,
//     value: `${node.sourceInstanceName}${slug}`
//   });
// };
//
// exports.createPages = ({ graphql, getNode, actions }) => {
//   const { createPage } = actions;
//   return graphql(`
//     {
//       allFile(filter: { extension: { eq: "rst" } }) {
//         edges {
//           node {
//             absolutePath
//             fields {
//               slug
//             }
//           }
//         }
//       }
//     }
//   `).then(result => {
//     result.data.allFile.edges.forEach(({ node }) => {
//       createPage({
//         path: node.fields.slug,
//         component: node.absolutePath
//       });
//     });
//   });
// };
