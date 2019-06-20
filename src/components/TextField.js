import React from 'react'
import 'src/style/app.css'
const TextField = ({ value, onChange, type }) => {
    type = type === 'password' ? type : 'text'
    return (
        <input value={value} type={type} className={'textfield'} onChange={onChange} />
    )
}

export default TextField