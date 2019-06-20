import React from 'react'
import '../style/app.css'

const Button = ({handleClick, title}) => {
    title = title ? title: 'Button'
    return (
        <button className={'button'} onClick={handleClick}>{title}</button>
    )
}

export default Button