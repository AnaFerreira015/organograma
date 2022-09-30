import './TextField.css'

export const TextField = (props) => {
    const placeholderModified = `${props.placeholder}...`
    return (
        <div className="text-field">
            <label>{props.label}</label>
            <input required={props.required} placeholder={placeholderModified} />
        </div>
    )
}
