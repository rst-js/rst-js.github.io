import { css } from "@emotion/core"

const breakpoints = {
  lg: 1340,
  md: 780,
  sm: 600
}

type Media = { [breakpoint in keyof typeof breakpoints]: typeof css }

export const media = Object.keys(breakpoints).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media screen and (min-width: ${breakpoints[label]}px) {
      ${css(...args)};
    }
  `

  return acc
}, {}) as Media

// Primary
export const yellow = {
  "50": "#FFFAEB",
  "100": "#FCEFC7",
  "200": "#F8E3A3",
  "300": "#F9DA8B",
  "400": "#F7D070",
  "500": "#E9B949",
  "600": "#C99A2E",
  "700": "#A27C1A",
  "800": "#7C5E10",
  "900": "#513C06"
}

// Neutral
export const grey = {
  "50": "#F7F7F7",
  "100": "#E1E1E1",
  "200": "#CFCFCF",
  "300": "#B1B1B1",
  "400": "#9E9E9E",
  "500": "#7E7E7E",
  "600": "#626262",
  "700": "#515151",
  "800": "#3B3B3B",
  "900": "#222222"
}

// Supporting
export const blue = {
  "50": "#DCEEFB",
  "100": "#B6E0FE",
  "200": "#84C5F4",
  "300": "#62B0E8",
  "400": "#4098D7",
  "500": "#2680C2",
  "600": "#186FAF",
  "700": "#0F609B",
  "800": "#0A558C",
  "900": "#003E6B"
}

export const orange = {
  "50": "#FFEFE6",
  "100": "#FFD3BA",
  "200": "#FAB38B",
  "300": "#EF8E58",
  "400": "#E67635",
  "500": "#C65D21",
  "600": "#AB4E19",
  "700": "#8C3D10",
  "800": "#77340D",
  "900": "#572508"
}

export const red = {
  "50": "#FFEEEE",
  "100": "#FACDCD",
  "200": "#F29B9B",
  "300": "#E66A6A",
  "400": "#D64545",
  "500": "#BA2525",
  "600": "#A61B1B",
  "700": "#911111",
  "800": "#780A0A",
  "900": "#610404"
}

export const green = {
  "50": "#E3F9E5",
  "100": "#C1EAC5",
  "200": "#A3D9A5",
  "300": "#7BC47F",
  "400": "#57AE5B",
  "500": "#3F9142",
  "600": "#2F8132",
  "700": "#207227",
  "800": "#0E5814",
  "900": "#05400A"
}
