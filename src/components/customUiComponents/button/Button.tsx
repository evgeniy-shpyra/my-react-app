import React from "react"
import "./button.scss"

interface ButtonProps {
    onClick?: () => void
}

export const Button: React.FC<ButtonProps> = ({ onClick }) => {
    return (
        <button onClick={onClick} className='button'>
            dfsdfsdf
        </button>
    )
}
