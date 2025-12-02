
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
  var cep = mascaraCEP(empresa.cep || '00000000');

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
          <div>{empresa.nome_fantasia || '-'}</div>
        </div>

        <div>
          <strong>CNPJ</strong>
          <div>{cnpj}</div>
        </div>

        <div>
          <strong>Endereço</strong>
          <div>
            {empresa.logradouro || ''}, {empresa.numero || 'S/N'} - {empresa.complemento || ''}
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
        </div>
      </div>
    </section>
  )
}