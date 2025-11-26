
export default function FormCnpj({ cnpj, setCnpj, onBuscar, loading }) {

  const mascaraCNPJ = (valor) => {
    return valor
      .replace(/\D/g, "")                    // Remove não números
      .replace(/^(\d{2})(\d)/, "$1.$2")      // Ponto
      .replace(/^(\d{2})\.(\d{3})(\d)/, "$1.$2.$3") // Ponto
      .replace(/\.(\d{3})(\d)/, ".$1/$2")    // Barra
      .replace(/(\d{4})(\d)/, "$1-$2")       // Hífen
      .substring(0, 18);                     // Limite
  };

  return (
    <form onSubmit={onBuscar} className="form">
      <div style={{display:'flex',flexDirection:'column',gap:6}}>
        <label htmlFor="cnpj">Digite o CNPJ:</label>
        <input
          id="cnpj"
          type="text"
          inputMode="numeric"
          placeholder="00.000.000/0000-00"
          value={cnpj}
          onChange={(e) => setCnpj(mascaraCNPJ(e.target.value))}
        />
      </div>

      <div className="actions">
        <button type="submit" disabled={loading}>
          {loading ? 'Buscando...' : 'Consultar'}
        </button>
      </div>
    </form>
    
  )
  
}
