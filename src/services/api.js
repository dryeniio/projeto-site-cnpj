// Serviço de chamada API — encapsula fetch.
// Exemplo: https://publica.cnpj.ws/cnpj/:cnpj
export async function buscarPorCnpj(cnpj) {
  try {
    const url = `https://publica.cnpj.ws/cnpj/${cnpj}`
    const response = await fetch(url)

    if (!response.ok) {
      if (response.status === 404) throw new Error('CNPJ não encontrado')
      throw new Error('Erro na consulta ao servidor')
    }

    const data = await response.json()
    return data
  } catch (err) {
    throw err
  }
}