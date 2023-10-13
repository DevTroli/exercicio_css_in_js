import Vaga, { VagaTitulo, VagaRequisitos } from './Vaga'

type Props = {
  titulo: string
  localizacao: string
  nivel: string
  modalidade: string
  salarioMin: number
  salarioMax: number
  requisitos: string[]
}

const Vagas = (props: Props) => (
  <Vaga>
    <VagaTitulo />
    <ul>
      <li>Localizacao: {props.localizacao}</li>
      <li>Senioridade: {props.nivel}</li>
      <li>Tipo de contratacao: {props.modalidade}</li>
      <li>
        Salário: {props.salarioMin} - {props.salarioMax}
      </li>
      <li>Requisitos: {props.requisitos.join(', ')}</li>
    </ul>
    <VagaRequisitos>Ver detalhes e candidatar-se</VagaRequisitos>
  </Vaga>
)

export default Vagas
