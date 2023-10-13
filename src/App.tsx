import Cabecalho from './components/Header'
import HeroPage from './components/Hero'
import ListaVagas from './containers/ListaVagas'
import EstiloGlobal, { Container } from './style'

function App() {
  return (
    <>
      <EstiloGlobal />
      <Cabecalho />
      <HeroPage />
      <Container>
        <ListaVagas />
      </Container>
    </>
  )
}

export default App
