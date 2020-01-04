import React, { useState, useEffect } from "react"

import Icon from "./icons"
import getThemeColor from "../../utils/getThemeColor"

import * as S from "./styled"

const MenuBar = () => {
  const [theme, setTheme] = useState(null)
  const [display, setDisplay] = useState(null)

  const isDarkMode = theme === "dark"
  const isListMode = display === "list"

  useEffect(() => {
    setTheme(window.__theme)
    setDisplay(window.__display)

    window.__onThemeChange = () => setTheme(window.__theme)
    window.__onDisplayChange = () => setDisplay(window.__display)
  }, [])

  return (
    <S.MenuBarWrapper>
      <S.MenuBarGroup>
        <S.MenuBarLink
          to="/"
          cover
          direction="right"
          bg={getThemeColor()}
          title="Voltar para Home"
          activeClassName="active"
        >
          <S.MenuBarItem>
            <Icon.Home />
          </S.MenuBarItem>
        </S.MenuBarLink>
        <S.MenuBarLink
          to={
            window.location.href.includes("/en/about/")
              ? "/en/about/"
              : "/about/"
          }
          cover
          direction="right"
          bg={getThemeColor()}
          title="Sobre mim"
          activeClassName="active"
        >
          <S.MenuBarItem>
            <Icon.About />
          </S.MenuBarItem>
        </S.MenuBarLink>
        <S.MenuBarLink
          to="/search/"
          cover
          direction="right"
          bg={getThemeColor()}
          title="Pesquisar"
          activeClassName="active"
        >
          <S.MenuBarItem>
            <Icon.Search />
          </S.MenuBarItem>
        </S.MenuBarLink>
      </S.MenuBarGroup>
      <S.MenuBarGroup>
        <S.MenuBarItem
          title="Mudar o tema"
          onClick={() => {
            window.__setPreferredTheme(isDarkMode ? "light" : "dark")

            if (window.DISQUS !== undefined) {
              window.setTimeout(() => {
                window.DISQUS.reset({
                  reload: true,
                })
              }, 300)
            }
          }}
          className={theme}
        >
          <Icon.Light />
        </S.MenuBarItem>
        <S.MenuBarItem
          title="Mudar visualização"
          onClick={() => {
            window.__setPreferredDisplay(isListMode ? "grid" : "list")
          }}
          className="display"
        >
          {isListMode ? <Icon.Grid /> : <Icon.List />}
        </S.MenuBarItem>
        <S.MenuBarItem
          title="Ir para o Topo"
          onClick={() => window.scroll({ top: 0, behavior: "smooth" })}
        >
          <Icon.Arrow />
        </S.MenuBarItem>
      </S.MenuBarGroup>
    </S.MenuBarWrapper>
  )
}

export default MenuBar
