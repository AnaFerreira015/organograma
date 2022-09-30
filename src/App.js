import { useState } from 'react'
import Banner from './components/Banner'
import Form from './components/Form'

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
    </div>
  )
}

export default App
