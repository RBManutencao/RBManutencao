# ⚡ Manutenção Pro - Site Profissional

Site moderno e responsivo para serviços de manutenção elétrica, hidráulica e instalação de aquecedores.

## 🚀 Características

### ✨ Design e Visual
- Design moderno com partículas animadas no fundo
- Modo claro/escuro com alternância suave
- Animações e transições elegantes
- Totalmente responsivo para mobile, tablet e desktop
- Efeitos de hover interativos em todos os cards

### 📱 Funcionalidades

#### 1. Navegação Intuitiva
- Menu fixo no topo com navegação suave
- Menu hambúrguer responsivo para mobile
- Scroll suave entre seções

#### 2. Hero Section
- Título impactante com destaque animado
- Botões de ação (Orçamento e WhatsApp)
- Estatísticas animadas com contadores

#### 3. Seção Sobre
- 4 cards de features (Experiência, Garantia, Pontualidade, Satisfação)
- Seção "Por que escolher" com benefícios
- Design com glassmorphism

#### 4. Serviços
- 3 serviços principais detalhados
- Cards expansivos com listas de serviços
- Ícones grandes e coloridos

#### 5. Portfólio
- Grid de projetos realizados
- Cards com gradientes coloridos
- Categorização por tipo de serviço

#### 6. Depoimentos
- 3 avaliações de clientes
- Sistema de estrelas
- Layout de cards elegante

#### 7. Calculadora de Orçamento (3 Steps)
- **Step 1:** Seleção visual do tipo de serviço
- **Step 2:** Detalhes do serviço (descrição, urgência, localização)
- **Step 3:** Resumo + dados de contato
- Indicador de progresso dos steps
- Envio direto para WhatsApp com mensagem formatada

#### 8. Contato
- Grid com informações de contato
- Telefone, WhatsApp, Email, Localização

#### 9. FAQ (Lateral)
- Botão fixo no lado direito da tela
- Modal com perguntas e respostas
- Accordion expansível
- 5 perguntas frequentes

#### 10. Floating Action Button (FAB)
- Botão flutuante no canto inferior direito
- 3 opções:
  - 🌙 Alternar entre modo claro/escuro
  - 💬 Abrir WhatsApp direto
  - ⬆️ Voltar ao topo da página
- Menu expansível com animação

## 📁 Estrutura do Projeto

```
projeto/
├── index.html      # Página principal
├── styles.css      # Estilos CSS
├── script.js       # JavaScript
└── README.md       # Documentação
```

## 🎨 Tecnologias Utilizadas

- **HTML5** - Estrutura semântica
- **CSS3** - Design moderno com:
  - CSS Variables para temas
  - Flexbox e Grid Layout
  - Animações e Transições
  - Glassmorphism
  - Backdrop Filters
- **JavaScript Vanilla** - Interatividade:
  - Intersection Observer API
  - Local Storage para preferências
  - Manipulação DOM
  - Event Listeners

## 🛠️ Como Usar

### 1. Abrir o Site
Simplesmente abra o arquivo `index.html` no navegador ou use Live Server no VS Code.

### 2. Configurar WhatsApp
No arquivo `script.js`, linha 198, altere o número do WhatsApp:
```javascript
const whatsappNumber = '5521999999999'; // Substitua pelo seu número
```

### 3. Personalizar Conteúdo
Edite o `index.html` para alterar:
- Textos e descrições
- Serviços oferecidos
- Depoimentos
- Informações de contato

### 4. Personalizar Cores
No `styles.css`, altere as variáveis CSS no `:root`:
```css
:root {
    --accent: #FF6B35;        /* Cor principal */
    --accent-hover: #F7931E;  /* Cor de hover */
}
```

## 📱 Recursos Mobile

- Menu hambúrguer responsivo
- Cards adaptáveis
- Steps verticais no calculador
- Botões full-width
- Touch-friendly
- Otimizado para telas pequenas

## ⚙️ Funcionalidades Técnicas

### Animações
- Contadores animados nas estatísticas
- Partículas flutuantes no fundo
- Scroll reveal nos cards
- Transições suaves

### Performance
- CSS otimizado
- Animações com GPU acceleration
- Images lazy loading ready
- Código minificável

### Acessibilidade
- Semântica HTML5
- Contraste adequado de cores
- Navegação por teclado
- Labels descritivos

## 🎯 Seções do Site

1. **Início** - Hero com CTA
2. **Sobre** - Apresentação e diferenciais
3. **Serviços** - Detalhamento dos serviços
4. **Portfólio** - Trabalhos realizados
5. **Depoimentos** - Avaliações de clientes
6. **Orçamento** - Calculadora multi-step
7. **Contato** - Informações de contato
8. **FAQ** - Perguntas frequentes

## 💡 Dicas de Uso

### Para Go Live
1. Instale a extensão "Live Server" no VS Code
2. Clique com botão direito em `index.html`
3. Selecione "Open with Live Server"

### Para Deploy
O site é estático e pode ser hospedado em:
- GitHub Pages
- Netlify
- Vercel
- Any static hosting

### Cache do Navegador
Se fizer alterações e não ver mudanças:
- Pressione `Ctrl + Shift + R` (hard refresh)
- Ou `Ctrl + F5`
- Ou abra em aba anônima

## 📞 Suporte

Para alterações ou dúvidas, consulte os comentários no código ou edite diretamente os arquivos.

## 🎨 Paleta de Cores

- **Primária:** #FF6B35 (Laranja)
- **Secundária:** #F7931E (Amarelo Alaranjado)
- **Fundo Dark:** #0A0A0A
- **Fundo Light:** #F5F5F5
- **Texto:** #FFFFFF / #1A1A1A

## ✅ Checklist de Personalização

- [ ] Alterar número do WhatsApp
- [ ] Atualizar informações de contato
- [ ] Substituir nome da empresa
- [ ] Adicionar logo (se houver)
- [ ] Personalizar serviços
- [ ] Atualizar depoimentos
- [ ] Ajustar cores da marca
- [ ] Adicionar imagens ao portfólio
- [ ] Revisar textos e descrições
- [ ] Testar em mobile

## 📄 Licença

Projeto livre para uso e modificação.

---

**Desenvolvido com ❤️ usando HTML, CSS e JavaScript puro**
