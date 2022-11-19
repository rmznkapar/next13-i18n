// /**
//  * SEO component that queries for data with
//  *  Gatsby's useStaticQuery React hook
//  *
//  * See: https://www.gatsbyjs.com/docs/use-static-query/
//  */
// 'use strict';
// import * as React from "react"
// import PropTypes from "prop-types"
// import { Helmet } from "react-helmet"
// import { useStaticQuery, graphql } from "gatsby"

// function Seo({ description, lang, meta, title }) {
//   const { site } = useStaticQuery(
//     graphql`
//       query {
//         site {
//           siteMetadata {
//             title
//             description
//             author
//           }
//         }
//       }
//     `
//   )

//   const metaDescription = description || site.siteMetadata.description
//   const defaultTitle = site.siteMetadata?.title

//   return (
//     <Helmet
//       htmlAttributes={{
//         lang,
//       }}
//       title={title || "makromusic for Artists"}
//       // titleTemplate={defaultTitle ? `${defaultTitle}` : null}
//       titleTemplate={defaultTitle ? `%s | ${defaultTitle}` : null}
//       meta={[
//         {
//           name: `description`,
//           content: metaDescription,
//         },
//         {
//           property: `og:title`,
//           content: title,
//         },
//         {
//           property: `og:description`,
//           content: metaDescription,
//         },
//         {
//           property: `og:type`,
//           content: `website`,
//         },
//         {
//           name: `twitter:card`,
//           content: `summary`,
//         },
//         {
//           name: `twitter:creator`,
//           content: site.siteMetadata?.author || ``,
//         },
//         {
//           name: `twitter:title`,
//           content: title,
//         },
//         {
//           name: `twitter:description`,
//           content: metaDescription,
//         },
//       ].concat(meta)}
//     >
//       <meta
//         name="viewport"
//         content="width=device-width, initial-scale=1, maximum-scale=1"
//       />
//       {/* <script type="text/javascript" id="hs-script-loader" async defer src="//js-na1.hs-scripts.com/21560958.js"></script> */}
//     </Helmet>
//   )
// }

// Seo.defaultProps = {
//   lang: `tr`,
//   meta: [],
//   description: ``,
//   title: `makromusic for Artists`,
// }

// Seo.propTypes = {
//   description: PropTypes.string,
//   lang: PropTypes.string,
//   meta: PropTypes.arrayOf(PropTypes.object),
//   title: PropTypes.string.isRequired,
// }

// export default Seo
