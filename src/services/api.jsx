export async function buscarPorCnpj(cnpj) {
  // tentar buscar dados do CNPJ na API BrasilAPI
  try {
    const url = `https://brasilapi.com.br/api/cnpj/v1/${cnpj}`
    //aguardando a resposta da API
    const respostaApi = await fetch(url)

    //se a resposta não for ok, lançar um erro  
    if (!respostaApi.ok) {
      //se for erro 404, CNPJ não encontrado
      if (respostaApi.status === 404) throw new Error('CNPJ não encontrado. Verifique e tente novamente.')
      if (respostaApi.status === 400) throw new Error('CNPJ inválido, tente novamente.')
      //para outros erros de resposta
      throw new Error('Erro na consulta ao servidor')
    }


    //converter a resposta para JSON
    const data = await respostaApi.json()
    //retornar os dados obtidos
    return data
  } catch (err) { //em caso de erro, relançar o erro para ser tratado em outro lugar
    throw err
  }
} //fim da função buscarPorCnpj