import { Contacts } from './Components/Contacts'
import { SearchBar } from './Components/SearchBar'
import styled from 'styled-components'

function App() {
  return (
    <Container>
      <Header>
        <h1>Contacts</h1>
      </Header>
      <SearchBar />
      <Contacts />
    </Container>
  )
}

const Container = styled.div``

const Header = styled.header`
  max-width: 80%;
  min-width: 80%;
  margin: auto;
  background: rgb(16, 183, 203);
  background: linear-gradient(
    90deg,
    rgba(16, 183, 203, 0.639093137254902) 0%,
    rgba(35, 157, 123, 1) 100%
  );
  h1 {
    color: #ffffff;
    text-align: center;
    font-size: 700;
  }
`
export default App
