# 🃏 Jogo de Cartas Blackjack (21)

## 🎯 Objetivo do Projeto

Criar um jogo interativo de **Blackjack** utilizando **HTML**, **CSS** e **JavaScript**, com foco em:

- Lógica de programação
- Manipulação do DOM
- Experiência do usuário

---

## 🧩 Estrutura do Jogo

- **Cartas** representadas como objetos com:
  - `naipe` (♠, ♥, ♦, ♣)
  - `valor` (A, 2–10, J, Q, K)
- **Baralho** armazenado em um array
- **Mão do jogador** e **mão da casa** também organizadas em arrays

---

## 🛠️ Funcionalidades Principais

- Criação e embaralhamento automático do baralho
- Distribuição de cartas iniciais
- Cálculo de pontuação:
  - **Ás** vale 11, mas se ultrapassar 21, passa a valer 1 automaticamente
- Lógica de decisão:
  - Jogador pode "Pedir Carta" ou "Parar"
  - Casa joga automaticamente após o jogador
- Determinação automática do vencedor

---

## 🎮 Entrada e Saída de Dados

### Entrada:
- **Botões interativos**:
  - `Pedir Carta`
  - `Parar`

### Saída:
- Cartas visuais atualizadas na tela
- Exibição de **pontuação atual**
- Mensagens de:
  - Vitória
  - Derrota
  - Empate
  - Estouro (acima de 21)

---

## ⚙️ Decisões de Projeto

- Valor do **Ás ajustável** (11 → 1) automaticamente, se necessário
- Interface simples e responsiva
- Regras básicas do Blackjack seguidas

---

## ✅ Testes Realizados

- ✅ Distribuição de cartas **sem repetição**
- ✅ Cálculo de pontuação com **múltiplos Áses**
- ✅ Testes de fluxo completo de jogo
- ✅ Testes de **responsividade** da interface
- ✅ Verificação de **casos limite** (ex: pontuação exata 21, estouro)
- 🔧 Apenas ajustes visuais menores foram necessários

---

## 📁 Tecnologias Usadas

- HTML5
- CSS3 (opcional, para estilização)
- JavaScript (puro)

---


## 🚀 Como Rodar o Projeto

1. Clone este repositório
2. Abra o arquivo `index.html` no seu navegador
3. Jogue e divirta-se! 😄

---

## 📌 Melhorias Futuras

- Animações de cartas
- Suporte a múltiplos jogadores
- Sistema de apostas
- Modo escuro

---


> *“A sorte favorece os bem preparados!”* 🍀
