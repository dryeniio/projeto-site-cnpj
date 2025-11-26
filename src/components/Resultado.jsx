
export default function Resultado({ dados }) {
  // a estrutura depende da API; adaptar conforme retorno real.
  const est = dados.estabelecimento || {}
  const empresa = dados || {}

  return (
    <section className="resultado">
      <h2>Dados encontrados</h2>

      <div className="grupo">
        <div>
          <strong>Razão social</strong>
          <div>{empresa.razao_social || empresa.nome || '-'}</div>
        </div>

        <div>
          <strong>Nome fantasia</strong>
          <div>{est.nome_fantasia || '-'}</div>
        </div>

        <div>
          <strong>CNPJ</strong>
          <div>{empresa.cnpj || '-'}</div>
        </div>

        <div>
          <strong>Endereço</strong>
          <div>
            {est.logradouro || '-'} {est.numero || ''} {est.complemento || ''}
            <br />
            {est.bairro ? est.bairro + ' - ' : ''}
            {est.cidade?.nome || ''} / {est.estado?.sigla || ''}
          </div>
        </div>

        <div>
          <strong>CEP</strong>
          <div>{est.cep || '-'}</div>
        </div>

        <div>
          <strong>Telefone</strong>
          <div>{est.telefone1 || '-'}</div>
        </div>
      </div>
    </section>
  )
}