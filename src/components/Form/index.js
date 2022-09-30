import Button from '../Button'
import DropDown from '../DropDown'
import TextField from '../TextField'

import './Form.css'

const Form = () => {
    const times = [
        'Programação',
        'Front-End',
        'Data Science',
        'DevOps',
        'UX e Design',
        'Inovação e Gestão'
    ]

    const savingData = (event) => {
        event.preventDefault()
        console.log('submeteu os dados')
    }

    return (
        <section className='form'>
            <form onSubmit={(e) => savingData(e)}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <TextField required={true} label="Nome" placeholder="Digite seu nome"/>
                <TextField required={true} label="Cargo" placeholder="Digite seu cargo"/>
                <TextField label="Imagem" placeholder="Digite o endereço da imagem"/>
                <DropDown required={true} label="Time" itens={times} />
                <Button>Criar card</Button>
            </form>
        </section>
    )
}

export default Form