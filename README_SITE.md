# 🎨 Site de Manutenção Profissional - Documentação

## ✨ Funcionalidades Implementadas

### 🌟 Efeitos Visuais e Animações

#### 1. **Partículas Flutuantes Animadas**
- 50 partículas flutuando pelo fundo da página
- Animação suave com velocidades e tamanhos aleatórios
- Cores adaptáveis ao tema (claro/escuro)

#### 2. **Orbs de Fundo Animados**
- Dois orbs grandes com gradientes coloridos
- Animação de flutuação suave e contínua
- Efeito blur para criar atmosfera moderna

#### 3. **Ondas Animadas**
- Efeito de onda no rodapé da página
- Animação sutil e contínua
- Gradiente roxo translúcido

#### 4. **Efeitos de Hover nos Cards**
- **Service Cards**: Efeito shimmer com brilho radial
- **Project Cards**: Efeito de luz deslizante horizontal
- **Testimonial Cards**: Gradiente ascendente no hover
- **Stat Items**: Expansão radial de fundo colorido

#### 5. **Animações de Entrada**
- Cards aparecem com fade-in e slide-up
- Delay escalonado para efeito cascata
- Stats com animação de escala

#### 6. **Contador Animado**
- Números das estatísticas contam de 0 até o valor final
- Animação suave de 2 segundos
- Ativado quando o usuário rola até a seção

### 🎯 Botão de Ações Flutuante (FAB)

Localizado no canto inferior direito com 3 opções:

#### 1. **🌙/☀️ Modo Claro/Escuro**
- Alterna entre tema escuro e claro
- Salva preferência no localStorage
- Transições suaves em todos os elementos
- Cores adaptadas para ambos os modos

#### 2. **💬 WhatsApp**
- Abre conversa direta no WhatsApp
- Link configurável no JavaScript

#### 3. **⬆️ Voltar ao Topo**
- Scroll suave até o início da página
- Fecha o menu FAB automaticamente

**Características do FAB:**
- Botão principal com ícone "+"
- Rotação de 45° ao abrir
- Menu expansível com animação
- Fecha ao clicar fora
- Design glassmorphism

### ❓ FAQ (Perguntas Frequentes)

Botão fixo no lado direito da tela:

**Características:**
- Posicionado verticalmente no meio da tela
- Texto "FAQ" em orientação vertical
- Modal em tela cheia ao clicar
- 6 perguntas com respostas expansíveis
- Design dark mode elegante
- Animações de abertura/fechamento
- Fecha ao clicar fora do modal

**Perguntas Incluídas:**
1. Qual a área de atendimento?
2. Vocês atendem emergências?
3. Qual o prazo para orçamento?
4. Vocês emitem nota fiscal?
5. Oferecem garantia nos serviços?
6. Quais formas de pagamento aceitam?

### 🎨 Modo Claro/Escuro

**Modo Escuro (Padrão):**
- Fundo: #0A0A0A
- Texto: Branco
- Cards: Vidro escuro translúcido

**Modo Claro:**
- Fundo: #F5F5F5
- Texto: Preto
- Cards: Vidro claro translúcido
- Partículas mais sutis
- Orbs com opacidade reduzida

### 📱 Seções do Site

1. **Header Fixo**
   - Navegação suave entre seções
   - Menu mobile responsivo
   - Backdrop blur

2. **Hero Section**
   - Título com gradiente animado
   - Botões de ação principais
   - 3 estatísticas com contadores animados

3. **Serviços**
   - 3 cards: Elétrica, Hidráulica, Aquecedores
   - Ícones grandes e coloridos
   - Efeitos de hover elaborados

4. **Projetos**
   - Grid de 3 projetos
   - Imagens com gradientes
   - Categorias destacadas

5. **Depoimentos**
   - 3 avaliações de clientes
   - Sistema de estrelas
   - Cards com borda superior colorida

6. **Formulário de Orçamento**
   - Campos: Nome, Telefone, Email, Serviço, Descrição
   - Envio direto para WhatsApp
   - Design moderno com glassmorphism

7. **Footer**
   - Informações da empresa
   - Links de contato
   - Horário de atendimento

### 🎯 Recursos Adicionais

#### Scrollbar Personalizada
- Cor gradiente laranja/amarelo
- Design moderno e minimalista
- Hover com inversão de gradiente

#### Scroll Suave
- Navegação suave entre seções
- Animação nativa do navegador

#### Responsividade
- Design adaptável para mobile
- Menu hambúrguer em telas pequenas
- Grid responsivo em todas as seções
- FAB e FAQ ajustados para mobile

### 🛠️ Tecnologias Utilizadas

- **HTML5**: Estrutura semântica
- **CSS3**: 
  - Variáveis CSS para temas
  - Flexbox e Grid
  - Animações e transições
  - Glassmorphism
  - Backdrop filters
- **JavaScript Vanilla**:
  - Manipulação do DOM
  - Intersection Observer API
  - LocalStorage para preferências
  - Event Listeners

### 📝 Configuração

#### Alterar Número do WhatsApp
No arquivo `script.js`, linha 108:
```javascript
const phoneNumber = '5521999999999'; // Substitua pelo número real
```

#### Personalizar Cores
No arquivo `styles.css`, seção `:root`:
```css
--gradient-primary: linear-gradient(135deg, #FF6B35 0%, #F7931E 50%, #FF6B35 100%);
--gradient-secondary: linear-gradient(135deg, #6C63FF 0%, #9D50BB 100%);
```

### 🚀 Como Usar

1. Abra o arquivo `index.html` com o **Live Server** (Go Live)
2. Ou abra diretamente no navegador
3. Teste o modo claro/escuro clicando no botão FAB
4. Explore todas as animações rolando a página
5. Teste o FAQ e o formulário de orçamento

### 🎨 Paleta de Cores

**Gradientes Principais:**
- Laranja/Amarelo: #FF6B35 → #F7931E
- Roxo: #6C63FF → #9D50BB
- Accent: #FF6B35 → #6C63FF

**Modo Escuro:**
- Background: #0A0A0A
- Texto: #FFFFFF

**Modo Claro:**
- Background: #F5F5F5
- Texto: #1A1A1A

### ✨ Destaques Técnicos

- ✅ 100% Responsivo
- ✅ Performance otimizada
- ✅ Animações suaves (60fps)
- ✅ Acessibilidade considerada
- ✅ SEO-friendly
- ✅ Cross-browser compatible
- ✅ Sem dependências externas (exceto fontes)

---

**Desenvolvido com 💙 usando HTML, CSS e JavaScript puro**
