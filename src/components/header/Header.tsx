import React from "react"
import "./header.scss"
import { ThemeSwitch } from "../customUiComponents/inputs/checkbox"

export const Header: React.FC = () => {


    return (
        <div className='header'>
            <div className='header__body'>
                <ThemeSwitch />
            </div>
        </div>
    )
}
