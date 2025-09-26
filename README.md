# Projeto React CAIXA Bet

Este projeto foi criado com React, TypeScript e Vite, baseado no design do aplicativo CAIXA Bet para captura e envio de documentos.

## 🚀 Funcionalidades

### 📱 **Telas Principais:**

- **`/capture-intro`** - Tela de introdução com dicas para captura de documentos
- **`/capture`** - Tela de captura de documentos com upload de imagens

### 🧩 **Componentes Reutilizáveis:**

- **`Header`** - Cabeçalho com logo, título e botão de voltar
- **`ProgressIndicator`** - Indicador de progresso em etapas
- **`DocumentCard`** - Card para informações de documentos
- **`ActionButton`** - Botões de ação com ícones
- **`ImagePreview`** - Componente para preview e upload de imagens

### 🎯 **Funcionalidades de Upload:**

- **Seleção de arquivos** com filtro para imagens apenas
- **Preview de imagens** em moldura dedicada
- **Validação de arquivos** (tipo e tamanho máximo 4MB)
- **Botão de remoção** para limpar imagens carregadas
- **Estados visuais** para botões ativos/inativos

### 🔄 **Navegação Inteligente:**

- **Botões de captura** ocultam após seleção
- **Botão de voltar** restaura interface anterior
- **Estados dinâmicos** com mudança de subtítulos
- **Limpeza automática** de imagens ao voltar

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
│   ├── ImagePreview.tsx
│   ├── ImagePreview.css
│   └── index.ts
├── pages/              # Páginas da aplicação
│   ├── CaptureIntroPage.tsx
│   ├── CaptureIntroPage.css
│   ├── CapturePage.tsx
│   └── CapturePage.css
├── hooks/              # Hooks personalizados
│   └── useImageUpload.ts
├── styles/             # Estilos globais
│   └── global.css
├── App.tsx
├── App.css
└── main.tsx
```

## 🎨 Sistema de Design

### 🎨 **Cores:**

- **Primary Blue**: `#1e3a8a`
- **Secondary Blue**: `#3b82f6`
- **Teal**: `#14b8a6`
- **Orange**: `#ff6b35` (botões de ação)
- **Gray Scale**: Tons de cinza para textos e backgrounds

### 🧩 **Componentes:**

Todos os componentes seguem um padrão consistente:

- **Props tipadas** com TypeScript
- **Estilos CSS modulares** com variáveis CSS
- **Design responsivo** para mobile e desktop
- **Estados de hover** e interação
- **Animações suaves** com transições

## 🛠️ Como Executar

1. **Instale as dependências:**

```bash
npm install
```

2. **Execute o servidor de desenvolvimento:**

```bash
npm run dev
```

3. **Acesse a aplicação:**

```
http://localhost:5173
```

## 📱 Rotas Disponíveis

- **`/`** - Redireciona para `/capture-intro`
- **`/capture-intro`** - Tela de introdução com dicas
- **`/capture`** - Tela de captura de documentos

## 🔄 Fluxo de Navegação

1. **Página de Introdução** (`/capture-intro`)

   - Exibe dicas para captura de documentos
   - Botão "Continuar" redireciona para `/capture`

2. **Página de Captura** (`/capture`)
   - **Estado inicial**: Mostra botões de captura
   - **Após seleção**: Oculta botões, mostra área de preview
   - **Botão voltar**: Restaura botões de captura

## 🎯 Funcionalidades de Upload

### 📸 **Seleção de Imagens:**

- **Filtro automático** para arquivos de imagem (`image/*`)
- **Validação de tamanho** (máximo 4MB)
- **Preview responsivo** na moldura dedicada
- **Nome do arquivo** exibido abaixo da imagem

### 🔄 **Gerenciamento de Estado:**

- **Hook personalizado** `useImageUpload` para lógica de upload
- **Estados controlados** para imagem, nome e status
- **Limpeza de memória** automática ao remover imagens
- **Validação em tempo real** antes do envio

## 🔧 Scripts Disponíveis

- **`npm run dev`** - Servidor de desenvolvimento
- **`npm run build`** - Build para produção
- **`npm run preview`** - Preview da build
- **`npm run lint`** - Executa o linter

## 📦 Dependências Principais

- **React 18** - Biblioteca principal
- **TypeScript** - Tipagem estática
- **Vite** - Build tool e servidor de desenvolvimento
- **React Router DOM** - Roteamento
- **ESLint** - Linting com configuração TypeScript

## 🚀 Próximos Passos Sugeridos

- **Implementar captura de câmera** para o botão "Tirar foto"
- **Integração com APIs** de upload de arquivos
- **Validação avançada** de documentos
- **Testes unitários** para componentes
- **PWA** para uso offline
