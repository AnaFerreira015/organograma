import './Collaborator.css'

const Collaborator = ({name, image, role, secondColor}) => {
    return (
        <div className='collaborator'>
            <div style={{ backgroundColor: secondColor }} className='header'>
                <img src={image} alt={name} />
            </div>
            <div className='footer'>
                <h4>{name}</h4>
                <h5>{role}</h5>
            </div>
        </div>
    )
}

export default Collaborator