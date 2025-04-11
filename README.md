Jogo de cartas BlackJack (21)

Objetivo do Projeto:
Criar um jogo interativo de Blackjack usando HTML e JavaScript, focando em lógica de programação, manipulação de DOM e experiência do usuário.

Estrutura do Jogo:
	•	Cartas representadas como objetos com “naipe” e “valor”.
	•	Baralho, mão do jogador e da casa organizados em arrays.
	•	Funções principais: criar e embaralhar o baralho, distribuir cartas, calcular pontuações (com ajuste automático do Ás entre 1 e 11), e determinar o vencedor.

Entrada e Saída de Dados:
	•	Entrada via botões (“Pedir Carta”, “Parar”).
	•	Saída com atualização visual das cartas, pontuações e mensagens finais.

Decisões de Projeto:
	•	Ás assume valor 11, ajustado para 1 se a pontuação ultrapassar 21.
	•	Interface simplificada, focada na experiência do jogador.

Testes Realizados:
	•	Verificação de distribuição de cartas sem repetição.
	•	Cálculo de pontuação, especialmente com múltiplos Áses.
	•	Testes de fluxo de jogo, responsividade da interface e casos limite (como estouro de 21).
	•	Apenas ajustes menores de layout foram identificados como necessários.
