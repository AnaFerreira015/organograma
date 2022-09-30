import { useState } from 'react'
import './TextField.css'

export const TextField = (props) => {
    const placeholderModified = `${props.placeholder}...`

    const [value, setValue] = useState('')

    const whenTyping = (event) => {
        props.changedValue(event.target.value)
    }

    return (
        <div className="text-field">
            <label>{props.label}</label>
            <input 
                value={props.value} 
                onChange={(e) => whenTyping(e)} 
                required={props.required} 
                placeholder={placeholderModified} 
            />
        </div>
    )
}
