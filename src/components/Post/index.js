import React from "react"
import PropTypes from "prop-types"

import * as S from "./styled"

import getThemeColor from "../../utils/getThemeColor"

const Post = ({
  slug,
  background,
  category,
  date,
  timeToRead,
  title,
  description,
}) => {
  return (
    <S.PostLink to={slug} cover direction="right" bg={getThemeColor()}>
      <S.PostWrapper>
        <S.PostTag background={background}>{category}</S.PostTag>
        <S.PostInfo>
          <S.PostDate>
            {date} {timeToRead && ` • ${timeToRead} min de leitura`}
          </S.PostDate>
          <S.PostTitle>{title}</S.PostTitle>
          <S.PostDescription>{description}</S.PostDescription>
        </S.PostInfo>
      </S.PostWrapper>
    </S.PostLink>
  )
}

Post.propTypes = {
  slug: PropTypes.string.isRequired,
  background: PropTypes.string,
  category: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  timeToRead: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
}

export default Post
