# React + Vite






🏢 Projeto CNPJ – Consulta e Validação

Aplicação em React + Vite desenvolvida para consultar, validar e exibir informações de CNPJ, utilizando uma API externa ou backend próprio.


---

🚀 Tecnologias Utilizadas

⚛️ React

⚡ Vite

🎨 CSS / Tailwind (opcional)

🔐 API de consulta de CNPJ

🧹 ESLint

🗂️ Axios / Fetch (para requisições)



---

📌 Funcionalidades

🔍 Consulta de CNPJ em tempo real

✔️ Validação automática do formato

📝 Exibição organizada dos dados (Razão Social, Nome Fantasia, Endereço, Situação etc.)

💾 Histórico (opcional)

🚨 Tratamento de erros e mensagens amigáveis



---

📦 Como Rodar o Projeto

# Instalar dependências
npm install

# Rodar modo desenvolvimento
npm run dev

# Gerar build de produção
npm run build


---

🔌 Configuração da API

Defina sua API de consulta no arquivo:

src/services/api.js

Exemplo:

import axios from "axios";

export const api = axios.create({
  baseURL: "https://minha-api-cnpj.com",
});


---

⚙️ Plugins do Vite (React)

Seu projeto utiliza React com Vite e suporta dois plugins oficiais:

🔹 @vitejs/plugin-react

Com Babel/oxc, fornece Fast Refresh.

🔹 @vitejs/plugin-react-swc

Com SWC, oferece build e HMR mais rápidos.


---

🧩 Estrutura de Pastas (exemplo)

src/
 ├── components/
 │    ├── InputCnpj.jsx
 │    ├── Resultado.jsx
 │    └── Loader.jsx
 ├── pages/
 │    └── Home.jsx
 ├── services/
 │    └── api.js
 └── App.jsx


---

📘 O que é o Projeto?

Este projeto foi criado para facilitar a consulta de CNPJ de forma rápida, intuitiva e moderna, ideal para:

Sistemas comerciais

Ferramentas de cadastro

Automação de dados empresariais

Aplicações internas



---

🧹 ESLint e Boas Práticas

O projeto já vem configurado com ESLint.
Se quiser melhorar para produção, considere ativar regras baseadas em TypeScript.


---

📄 Licença

Este projeto é de uso livre para estudos ou uso pessoal.


---

.
