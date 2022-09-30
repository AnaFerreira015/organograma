import Collaborator from '../Collaborator'
import './Team.css'

const Team = (props) => {
    const secondColor = { backgroundColor: props.secondColor}
    const primaryColor = { borderColor: props.primaryColor}

    return (
        (props.collaborators.length > 0) ?
        <section className='team' style={secondColor}>
            <h3 style={primaryColor}>{props.name}</h3>
            <div className='collaborators'>
                {props.collaborators.map(collaborator => (
                    <Collaborator 
                        backgroundcolor={props.primaryColor}
                        key={collaborator.name}
                        name={collaborator.name} 
                        role={collaborator.role}
                        image={collaborator.image}
                    />
                ))}
            </div>
        </section> : ''
    )
}

export default Team