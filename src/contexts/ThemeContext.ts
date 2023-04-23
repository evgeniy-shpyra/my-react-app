import React from "react"

export const themes = {
    dark: "dark",
    light: "light",
}

interface IThemeContext {
    theme: string
    setTheme: (newTheme: string) => void
}

export const ThemeContext = React.createContext<IThemeContext>({
    theme: themes.light,
    setTheme: () => {},
})
