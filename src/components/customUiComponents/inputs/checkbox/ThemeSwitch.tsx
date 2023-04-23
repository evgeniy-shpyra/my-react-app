import React, { useContext } from "react"
import "./themeSwitch.scss"
import classNames from "classnames"
import { ThemeContext } from "../../../../contexts/ThemeContext"

export const ThemeSwitch: React.FC = () => {
    const { theme, setTheme } = useContext(ThemeContext)
    const [isChecked, setIsChecked] = React.useState(theme === "dark")

    React.useEffect(() => {
        isChecked ? setTheme("dark") : setTheme("light")
    }, [isChecked])

    const switchClass = classNames("theme-switch__switch", {
        "theme-switch__switch_active icon-night": isChecked,
        "icon-day": !isChecked,
    })

    return (
        <label className='theme-switch' htmlFor='theme-switch'>
            <input
                checked={isChecked}
                onChange={() => setIsChecked((prev) => !prev)}
                id='theme-switch'
                type='checkbox'
                className='theme-switch__input'
            />
            <span className={switchClass} />
        </label>
    )
}
