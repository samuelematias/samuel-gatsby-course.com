import * as V from "../styles/variables"

const getThemeColor = () => {
  const theme = typeof window !== "undefined" && window.__theme

  if (theme === "light") return "#fff"
  if (theme === "dark") return V.Color.grayDarker
}

export default getThemeColor
