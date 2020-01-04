import React from "react"

import { useStaticQuery, graphql } from "gatsby"

import Avatar from "../Avatar"
import getThemeColor from "../../utils/getThemeColor"

import * as S from "./styled"

const Profile = () => {
  const {
    site: {
      siteMetadata: { title, position, authorDescription },
    },
  } = useStaticQuery(graphql`
    query MySiteMetadata {
      site {
        siteMetadata {
          title
          position
          authorDescription
        }
      }
    }
  `)
  return (
    <S.ProfileWrapper>
      <S.ProfileLink
        to="/"
        cover
        direction="left"
        bg={getThemeColor()}
        duration={0.6}
      >
        <Avatar />
        <S.ProfileAuthor>
          {title}
          <S.ProfilePosition>{position}</S.ProfilePosition>
        </S.ProfileAuthor>
      </S.ProfileLink>
      <S.ProfileDescription>{authorDescription}</S.ProfileDescription>
    </S.ProfileWrapper>
  )
}

export default Profile
