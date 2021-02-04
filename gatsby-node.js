// const path = require("path");

// exports.createPages = async ({ graphql, actions }) => {
//   const { createPage } = actions;

//   const pages = await graphql(`
//     {
//       allPrismicPost {
//         edges {
//           node {
//             id
//             uid
//           }
//         }
//       }
//     }
//   `);

//   pages.data.allPrismicPost.edges.forEach(edge => {
//     createPage({
//       path: `/${edge.node.uid}`,
//       component: path.resolve("src/templates/post.js"),
//       context: {
//         uid: edge.node.uid,
//       },
//     });
//   });
// };
