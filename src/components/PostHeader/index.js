import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import * as S from "../../styles/base"

const PostHeader = ({ image, date, timeToRead, title, description }) => {
  const { images } = useStaticQuery(graphql`
    query {
      images: allFile(filter: { sourceInstanceName: { eq: "uploads" } }) {
        edges {
          node {
            extension
            relativePath
            childImageSharp {
              fluid(maxWidth: 1280, quality: 60) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)

  const postImage = images.edges.find(img => {
    return img.node.relativePath === image.slice(12)
  })

  return (
    <>
      <S.PostImageWrapper>
        <S.PostImage fluid={postImage.node.childImageSharp.fluid} />
      </S.PostImageWrapper>
      <S.PostDate>
        {date} • {timeToRead} min de leitura
      </S.PostDate>
      <S.PostTitle>{title}</S.PostTitle>
      <S.PostDescription>{description}</S.PostDescription>
    </>
  )
}

PostHeader.propTypes = {
  date: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string,
  timeToRead: PropTypes.number,
}

export default PostHeader
