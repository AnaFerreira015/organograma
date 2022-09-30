import { useState } from 'react'
import Button from '../Button'
import DropDown from '../DropDown'
import TextField from '../TextField'

import './Form.css'

const Form = (props) => {
    const times = [
        'Programação',
        'Front-End',
        'Data Science',
        'DevOps',
        'UX e Design',
        'Mobile',
        'Inovação e Gestão'
    ]

    const [name, setName] = useState('')
    const [role, setRole] = useState('')
    const [image, setImage] = useState('')
    const [team, setTeam] = useState('')

    const savingData = (event) => {
        event.preventDefault()
        props.registeredContributor({
            name,
            role,
            image,
            team
        })
    }

    return (
        <section className='form'>
            <form onSubmit={(e) => savingData(e)}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <TextField 
                    required={true} 
                    label="Nome" 
                    placeholder="Digite seu nome"
                    value={name}
                    changedValue={value => setName(value)}
                />
                <TextField 
                    required={true} 
                    label="Cargo" 
                    placeholder="Digite seu cargo"
                    value={role}
                    changedValue={value => setRole(value)}
                />
                <TextField 
                    label="Imagem" 
                    placeholder="Digite o endereço da imagem"
                    value={image}
                    changedValue={value => setImage(value)}
                />
                <DropDown 
                    required={true} 
                    label="Time" 
                    itens={times} 
                    value={team}
                    changedValue={value => setTeam(value)}
                />
                <Button>Criar card</Button>
            </form>
        </section>
    )
}

export default Form