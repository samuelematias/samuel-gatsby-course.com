import React from "react"

import { useStaticQuery, graphql } from "gatsby"

import Avatar from "../Avatar"
import getThemeColor from "../../utils/getThemeColor"

import * as S from "./styled"

const Profile = () => {
  const {
    site: {
      siteMetadata: {
        title,
        position,
        author: { minibio },
      },
    },
  } = useStaticQuery(graphql`
    query MySiteMetadata {
      site {
        siteMetadata {
          title
          position
          author {
            minibio
          }
        }
      }
    }
  `)
  return (
    <S.ProfileWrapper>
      <S.ProfileLink to="/" cover direction="left" bg={getThemeColor()}>
        <Avatar />
        <S.ProfileAuthor>
          {title}
          <S.ProfilePosition>{position}</S.ProfilePosition>
        </S.ProfileAuthor>
      </S.ProfileLink>
      <S.ProfileDescription>{minibio}</S.ProfileDescription>
    </S.ProfileWrapper>
  )
}

export default Profile
