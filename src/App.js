import { useState } from 'react'
import Banner from './components/Banner'
import Form from './components/Form'
import Team from './components/Team'

function App() {
  const [collaborators, setCollaborators] = useState([])

  const addedContributor = (contributor) => {
    console.log(contributor)
    setCollaborators([...collaborators, contributor])
  }

  return (
    <div className="App">
      <Banner />
      <Form registeredContributor={contributor => addedContributor(contributor)} />
      <Team name="Programação" />
      <Team name="Front-End" />
      <Team name="Data Science" />
    </div>
  )
}

export default App
