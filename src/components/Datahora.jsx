import { useEffect, useState } from "react";

export default function DataHora() {
  const [dataHora, setDataHora] = useState("");

  useEffect(() => {
    // Função que atualiza a data e hora
    function atualizar() {
      const agora = new Date();
      const formatado = agora.toLocaleString("pt-BR", {
        dateStyle: "short",
        timeStyle: "medium",
      });
      setDataHora(formatado);
    }

    atualizar(); // Atualiza imediatamente ao entrar no site

    const interval = setInterval(atualizar, 1000); // Atualiza a cada 1 segundo

    return () => clearInterval(interval); // Limpa o intervalo ao sair
  }, []);

  return (
    <div style={{
      width: "100%",
      textAlign: "left",
      fontSize: "18px",
      fontWeight: "bold",
      marginBottom: "20px"
    }}>
      ⏰ {dataHora}
    </div>
  );
}
