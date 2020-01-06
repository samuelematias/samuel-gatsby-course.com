import React from "react"
import Helmet from "react-helmet"
import { StaticQuery, graphql } from "gatsby"
import PropTypes from "prop-types"
import SchemaOrg from "./SchemaOrg"

const SEO = ({ description, title, image, slug }) => (
  <StaticQuery
    query={graphql`
      {
        site {
          siteMetadata {
            title
            description
            siteUrl
            image
            author {
              name
            }
            organization {
              name
              url
              logo
            }
            social {
              twitter
              twitterLink
              linkedinLink
              githubLink
              mediumLink
            }
          }
        }
      }
    `}
    render={({ site: { siteMetadata: seo } }) => {
      //   const postMeta =
      //     frontmatter || postData.childMarkdownRemark.frontmatter || {}

      const sTitle = title || seo.title
      const sDescription = description || seo.description
      const sImage = image ? `${seo.siteUrl}${image}` : seo.image
      const url = slug ? `${seo.siteUrl}/${slug}/` : seo.siteUrl
      const isBlogPost = true
      //   const datePublished = isBlogPost ? postMeta.datePublished : false

      return (
        <React.Fragment>
          <Helmet>
            {/* General tags */}
            <title>{sTitle}</title>
            <meta name="description" content={sDescription} />
            <meta name="image" content={sImage} />
            <link rel="canonical" href={url} />

            {/* OpenGraph tags */}
            <meta property="og:url" content={url} />
            {isBlogPost ? <meta property="og:type" content="article" /> : null}
            <meta property="og:title" content={sTitle} />
            <meta property="og:description" content={sDescription} />
            <meta property="og:image" content={sImage} />
            <meta property="fb:app_id" content={seo.social.fbAppID} />

            {/* Twitter Card tags */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:creator" content={seo.social.twitter} />
            <meta name="twitter:title" content={sTitle} />
            <meta name="twitter:description" content={sDescription} />
            <meta name="twitter:image" content={sImage} />
          </Helmet>
          <SchemaOrg
            isBlogPost={isBlogPost}
            url={url}
            title={sTitle}
            image={sImage}
            description={sDescription}
            // datePublished={datePublished}
            siteUrl={seo.siteUrl}
            author={seo.author}
            organization={seo.organization}
            defaultTitle={seo.title}
          />
        </React.Fragment>
      )
    }}
  />
)

SEO.defaultProps = {
  description: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  slug: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}
export default SEO
