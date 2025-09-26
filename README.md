# Projeto React CAIXA Bet

Este projeto foi criado com React, TypeScript e Vite, baseado no design do aplicativo CAIXA Bet para captura e envio de documentos.

## 🚀 Funcionalidades

- **Duas telas principais:**
  - `/fraud` - Tela de documentação para análise de fraude
  - `/capture` - Tela de captura de documentos para validação

- **Componentes reutilizáveis:**
  - `Header` - Cabeçalho com logo e título
  - `ProgressIndicator` - Indicador de progresso em etapas
  - `DocumentCard` - Card para informações de documentos
  - `ActionButton` - Botões de ação com ícones

- **Design responsivo** com suporte a dispositivos móveis
- **Sistema de cores** consistente usando CSS custom properties
- **Roteamento** configurado com React Router

## 📁 Estrutura do Projeto

```
src/
├── components/           # Componentes reutilizáveis
│   ├── Header.tsx
│   ├── Header.css
│   ├── ProgressIndicator.tsx
│   ├── ProgressIndicator.css
│   ├── DocumentCard.tsx
│   ├── DocumentCard.css
│   ├── ActionButton.tsx
│   ├── ActionButton.css
│   └── index.ts
├── pages/              # Páginas da aplicação
│   ├── FraudPage.tsx
│   ├── FraudPage.css
│   ├── CapturePage.tsx
│   └── CapturePage.css
├── styles/             # Estilos globais
│   └── global.css
├── App.tsx
├── App.css
└── main.tsx
```

## 🎨 Sistema de Design

### Cores
- **Primary Blue**: `#1e3a8a`
- **Secondary Blue**: `#3b82f6`
- **Teal**: `#14b8a6`
- **Gray Scale**: Tons de cinza para textos e backgrounds

### Componentes
Todos os componentes seguem um padrão consistente:
- Props tipadas com TypeScript
- Estilos CSS modulares
- Design responsivo
- Estados de hover e interação

## 🛠️ Como Executar

1. Instale as dependências:
```bash
npm install
```

2. Execute o servidor de desenvolvimento:
```bash
npm run dev
```

3. Acesse `http://localhost:5173`

## 📱 Rotas Disponíveis

- `/` - Redireciona para `/fraud`
- `/fraud` - Tela de documentação para análise de fraude
- `/capture` - Tela de captura de documentos

## 🔧 Scripts Disponíveis

- `npm run dev` - Servidor de desenvolvimento
- `npm run build` - Build para produção
- `npm run preview` - Preview da build
- `npm run lint` - Executa o linter

## 📦 Dependências Principais

- React 18
- TypeScript
- Vite
- React Router DOM
- ESLint (configuração TypeScript)
