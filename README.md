# 🏋️ Planilha Fitness

Uma Single Page Application (SPA) moderna, responsiva e focada na experiência do usuário (UX) para criar, organizar e exportar planilhas de treinos e dietas personalizadas para alunos. 

O sistema conta com um design limpo e _Dark Mode_ por padrão para facilitar a gestão pelo personal/treinador. Já a exportação em PDF é gerada em um leiaute de visualização claro e pronto para a impressão ou leitura contínua.

---

## ✨ Principais Funcionalidades

- **👤 Perfil do Aluno**: Seção dedicada à captação de informações básicas (Nome, Idade, Peso, Altura, Objetivos) e campo flexível para notas ou restrições de saúde.
- **💪 Montagem de Treinos**: Criação dinâmica de rotinas divididas por dia ou grupo muscular. Total liberdade para adicionar exercícios estruturando suas devidas séries, repetições e carga esperada.
- **🥗 Planejamento de Dieta**: Criação de refeições com horários customizáveis e especificação de alimentos com respectivas métricas (Quantidade, Calorias, Proteínas).
- **🖨️ Exportação para PDF**: Componente dinâmico integrado com `html2pdf.js` que gera em tempo real um PDF perfeitamente formatado e o disponibiliza para download direto do navegador.

---

## 🛠️ Tecnologias Utilizadas

- **[Vue 3](https://vuejs.org/)** com Composition API (`<script setup>`)
- **[TypeScript](https://www.typescriptlang.org/)** para tipagem forte e manutenção de qualidade
- **[Vite](https://vitejs.dev/)** para tooling e ambiente de desenvolvimento ultrarrápido
- **[Tailwind CSS](https://tailwindcss.com/)** lidando com todos os aspectos visuais do sistema
- **[html2pdf.js](https://ekoopmans.github.io/html2pdf.js/)** para a conversão fluida do DOM em arquivo PDF

---

## 🚀 Como Rodar o Projeto

### Requisitos Básicos
Você vai precisar do **Node.js** e do instalador de pacotes **npm** configurados em sua máquina.

### Passos

1. **Instalação das dependências**  
   Na raiz do projeto, instale o que é necessário usando:
   ```bash
   npm install
   ```

2. **Servidor de Desenvolvimento**  
   Para visualizar o projeto e trabalhar localmente com _Hot Module Replacement_ (HMR):
   ```bash
   npm run dev
   ```
   Acesse a aplicação no endereço (geralmente `http://localhost:5173`).

3. **Gerar Versão de Produção (Build)**  
   Quando finalizar, pode "buildar" o projeto para o formato preparado para publicação:
   ```bash
   npm run build
   ```
   Todos os arquivos minificados estarão disponíveis no diretório `/dist`.

---

## 💻 Créditos

Aplicação desenhada e desenvolvida por **[Kodarya Engenharia de Software](https://kodarya.com.br)**.
