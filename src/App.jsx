import { useState, useEffect } from 'react'
import FormCnpj from './components/FormCnpj'
import Resultado from './components/Resultado'
import { buscarPorCnpj } from './services/api'
import DataHora from "./components/Datahora";


export default function App() {
  const [cnpj, setCnpj] = useState('')
  const [dados, setDados] = useState(null)
  const [loading, setLoading] = useState(false)
  const [erro, setErro] = useState(null)

// Quando o CNPJ mudar, o React executa isso aqui:
useEffect(() => {
  // Se o campo estiver vazio, apaga os dados e o erro
  if (cnpj === '') {
    setDados(null)
    setErro(null)
  }
}, [cnpj])



// Função que consulta o CNPJ quando o usuário clicar no botão
async function handleBuscar(event) {
  // Impede que a página recarregue ao enviar o formulário
  if (event) event.preventDefault()

  // Remove tudo que não for número
  const cnpjLimpo = cnpj.replace(/\D/g, '')

  // Verifica se o CNPJ tem 14 números
  if (cnpjLimpo.length !== 14) {
    setErro('O CNPJ precisa ter 14 números.')
    setDados(null)
    return
  }

  try {
    setLoading(true)    // Mostra "Carregando..."
    setErro(null)       // Remove mensagens de erro antigas

    // Chama a API
    const resposta = await buscarPorCnpj(cnpjLimpo)

    // Se a API não retornar nada → erro
    if (!resposta) {
      throw new Error('Não foi possível buscar os dados.')
    }

    // Guarda os dados recebidos da API
    setDados(resposta)

  } catch (erro) {
    // Se acontecer um erro, mostra a mensagem
    setErro(erro.message)
    setDados(null)

  } finally {
    // Sempre desliga o "Carregando..."
    setLoading(false)
  }
}

  return (
    <div className="container">
      <header>
        <DataHora />
        <h1>Consulta de CNPJ</h1>
        <p>Digite um CNPJ e veja os dados cadastrais da empresa ou organização.</p>
        <br/>
      </header>

      <main>
        <FormCnpj
          cnpj={cnpj}
          setCnpj={setCnpj}
          onBuscar={handleBuscar}
          loading={loading}
        />

        {loading && <p className="info">Carregando...</p>}
        {erro && <p className="error">{erro}</p>}

        {dados && <Resultado dados={dados} />}
        {dados && <div><br /><button onClick={() => window.print()} className="btn-imprimir no-print">Imprimir</button></div>}
        
      </main>

    </div>
  )
}