import './Team.css'

const Team = (props) => {
    const secondColor = { backgroundColor: props.secondColor}
    const primaryColor = { borderColor: props.primaryColor}

    return (
        <section className='team' style={secondColor}>
            <h3 style={primaryColor}>{props.name}</h3>
        </section>
    )
}

export default Team