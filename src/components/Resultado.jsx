import 'bootstrap/dist/css/bootstrap.min.css';
export default function Resultado({ dados }) {
  // a estrutura depende da API; adaptar conforme retorno real.
  const empresa = dados || {}

  const mascaraCNPJ = (valor) => {
    return valor
      .replace(/\D/g, "")                    // Remove não números
      .replace(/^(\d{2})(\d)/, "$1.$2")      // Ponto
      .replace(/^(\d{2})\.(\d{3})(\d)/, "$1.$2.$3") // Ponto
      .replace(/\.(\d{3})(\d)/, ".$1/$2")    // Barra
      .replace(/(\d{4})(\d)/, "$1-$2")       // Hífen
      .substring(0, 18);                     // Limite
  };
  const mascaraTelefone = (valor) => {
    return valor
      .replace(/\D/g, "")                    // Remove não números
      .replace(/^(\d{2})(\d)/, "($1) $2")    // Parênteses e espaço
      .replace(/(\d{4,5})(\d{4})$/, "$1-$2") // Hífen
      .substring(0, 15);                     // Limite
  }

  const mascaraCEP = (valor) => {
    return valor
      .replace(/\D/g, "")                    // Remove não números
      .replace(/^(\d{5})(\d)/, "$1-$2")      // Hífen
      .substring(0, 9);                      // Limite
  }

  var cnpj = mascaraCNPJ(empresa.cnpj || '00000000000000');
  var telefone = mascaraTelefone(empresa.ddd_telefone_1 || '00000000000');
  var telefone2 = mascaraTelefone(empresa.ddd_telefone_2 || '');
  var cep = mascaraCEP(empresa.cep || '00000000');

  return (
    <section className="bg-white p-4 margin-top-10" style={{borderRadius: '8px'}}>
      <h2>Dados encontrados</h2>

      <hr />

      <div className="">
        <div>
          <strong>Razão social</strong>
          <div>{empresa.razao_social || empresa.nome || '-'}</div>
        </div>

        <div>
          <strong>Nome fantasia</strong>
          <div>{empresa.nome_fantasia || '-'}</div>
        </div>

        <div>
          <strong>CNPJ</strong>
          <div>{cnpj}</div>
        </div>

        <div>
          <strong>Tipo de empresa</strong>
          <div>{empresa.descricao_identificador_matriz_filial || '-'}</div>
        </div>

        <div>
          <strong>Endereço</strong>
          <div>
            {empresa.descricao_tipo_de_logradouro || ''} {empresa.logradouro || ''}, {empresa.numero || 'S/N'} - {empresa.complemento || ''}
            <br />
            {empresa.bairro ? empresa.bairro + ' - ' : ''}
            {empresa.municipio || ''} / {empresa.uf || ''}
          </div>
        </div>

        <div>
          <strong>CEP</strong>
          <div>{cep || '-'}</div>
        </div>

        <div>
          <strong>Telefone</strong>
          <div>{telefone}</div>
          <div>{telefone2}</div>
        </div>

        <div>
          <strong>E-mail</strong>
          <div>{empresa.email || '-'}</div>
        </div>

      <hr />

        <div className='mb-3'>
          <h2 className='h2'>Atividade econômica principal</h2>
          <div>{empresa.cnae_fiscal} - {empresa.cnae_fiscal_descricao}</div>
        </div>
        <div>
          <h2 className='h2'>Atividades econômicas secundárias</h2>
          <div>
            {empresa.cnaes_secundarios && empresa.cnaes_secundarios.length > 0 ? (
              <ul>
                {empresa.cnaes_secundarios.map((atividade, index) => ( // percorre o array de atividades secundárias
                  <li key={index}>
                    {atividade.codigo} - {atividade.descricao}
                  </li>
                ))}
              </ul>) : ('-')}
          </div>
        </div>
      <hr />
        <div>
          <div>
            <strong>Natureza jurídica</strong>
            <div>{empresa.codigo_natureza_juridica} - {empresa.natureza_juridica}</div>
          </div>
          <div>
            <strong>Porte</strong>
            <div>{empresa.porte || '-'}</div>
          </div>
          <div>
            <strong>Situação cadastral</strong>
            <div>{empresa.descricao_situacao_cadastral || '-'}</div>
          </div>
          <div>
            <strong>Data da situação cadastral</strong>
            <div>{empresa.data_situacao_cadastral || '-'}</div>
          </div>
          <div>
            <strong>Data de abertura</strong>
            <div>{empresa.data_inicio_atividade || '-'}</div>
          </div>
        </div>

        

      </div>
    </section>
  )
}