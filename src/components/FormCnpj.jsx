
export default function FormCnpj({ cnpj, setCnpj, onBuscar, loading }) {
  return (
    <form onSubmit={onBuscar} className="form">
      <div style={{display:'flex',flexDirection:'column',gap:6}}>
        <label htmlFor="cnpj">CNPJ</label>
        <input
          id="cnpj"
          type="text"
          inputMode="numeric"
          placeholder="00.000.000/0000-00"
          value={cnpj}
          onChange={(e) => setCnpj(e.target.value)}
          maxLength={18}
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