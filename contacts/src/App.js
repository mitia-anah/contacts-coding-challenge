import { Contacts } from './Components/Contacts'
import { SearchBar } from './Components/SearchBar'
import './App.css'

function App() {
  return (
    <div className='App'>
      <h1>Contacts</h1>
      <SearchBar />
      <Contacts />
    </div>
  )
}

export default App
