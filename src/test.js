import React from 'react'

const Button = ({handleClick, title}) => {
    title = title ? title: 'Button'
    return (
        <button className={'button'} onClick={handleClick}>{title}</button>
    )
}

export default Button