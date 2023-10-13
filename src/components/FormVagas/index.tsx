import { FormEvent, SetStateAction, useState } from 'react'

import FormularioVagas, { BotaoPesquisar, InputPesquisar } from './FormVagas'

type Props = {
  aoPesquisar: (termo: string) => void
}

const FormVagas = ({ aoPesquisar }: Props) => {
  const [termo, setTermo] = useState<string>('')

  const aoEnviarForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    aoPesquisar(termo.toLocaleLowerCase())
  }

  return (
    <FormularioVagas onSubmit={aoEnviarForm}>
      <InputPesquisar
        placeholder="Front-end, fullstack, node, design"
        onChange={(e: { target: { value: SetStateAction<string> } }) =>
          setTermo(e.target.value)
        }
        type="search"
      />
      <BotaoPesquisar type="submit">Pesquisarr</BotaoPesquisar>
    </FormularioVagas>
  )
}
export default FormVagas
