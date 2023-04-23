import React from "react"
import { ThemeContext, themes } from "../contexts/ThemeContext"

const getTheme = () => {
    const theme = localStorage.getItem("theme")
    if (theme) return theme
    return themes.light
}

interface ThemeProviderProps {
    children: React.ReactNode
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
    const [theme, setTheme] = React.useState<string>(getTheme())

    const handleChangeTheme = (newTheme: string): void => {
        setTheme(newTheme)
    }

    React.useEffect(() => {
        document.documentElement.dataset.theme = theme
        if (theme) localStorage.setItem("theme", theme)
    }, [theme])

    return (
        <ThemeContext.Provider value={{ theme, setTheme: handleChangeTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}
