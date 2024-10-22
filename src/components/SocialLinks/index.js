import React from "react"

import Icons from "./icons"
import links from "./content"

import * as S from "./styled"

const SocialLinks = ({ isAboutPage }) => (
  <S.SocialLinksWrapper isAboutPage={isAboutPage}>
    <S.SocialLinksList>
      {links.map((link, i) => {
        const Icon = Icons[link.label]

        return (
          <li key={i}>
            <a
              href={link.url}
              title={link.label}
              target="_blank"
              rel="noopener noreferrer"
            >
              <S.IconWrapper>
                <Icon />
              </S.IconWrapper>
            </a>
          </li>
        )
      })}
    </S.SocialLinksList>
  </S.SocialLinksWrapper>
)

export default SocialLinks
