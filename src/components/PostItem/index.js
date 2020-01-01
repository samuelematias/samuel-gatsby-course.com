import React from "react"

import * as S from "./styled"

const PostItem = () => (
  <S.PostItemLink>
    <S.PostItemWrapper>
      <S.PostItemTag background="#47650b">Misc</S.PostItemTag>
      <S.PostItemInfo>
        <S.PostItemDate>
          27 de Dezembro de 2019 • 9 min de leitura
        </S.PostItemDate>
        <S.PostItemTitle>Meu ano de 2019</S.PostItemTitle>
        <S.PostItemDescription>
          Um ano movimentado na Toptal, blog novo, curso novo e viagens como
          sempre.
        </S.PostItemDescription>
      </S.PostItemInfo>
    </S.PostItemWrapper>
  </S.PostItemLink>
)

export default PostItem
