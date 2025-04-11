let playerHand = [];
let dealerHand = [];
let deck = [];
let playerBank = 100;

function createDeck() {
    const suits = ['♠', '♥', '♦', '♣'];
    const values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    deck = [];
    for (let suit of suits) {
        for (let value of values) {
            deck.push({ value, suit });
        }
    }
    deck.sort(() => Math.random() - 0.5);
    
}

function getCardValue(card) {
    if (['J', 'Q', 'K'].includes(card.value)) return 10;
    if (card.value === 'A') return 1;
    return parseInt(card.value);
}

function calculateHand(hand) {
    return hand.reduce((sum, card) => sum + getCardValue(card), 0);
}

function hit() {
    playerHand.push(deck.pop());
    updateUI();
    if (calculateHand(playerHand) > 21) {
        document.getElementById('result').innerText = 'Você estourou!';
        playerBank -= 10;
        updateBank();
    }
}

function stand() {
    while (calculateHand(dealerHand) < 17) {
        dealerHand.push(deck.pop());
    }
    updateUI(true); // Revela a mão da mesa
    determineWinner();
}


function determineWinner() {
    const playerScore = calculateHand(playerHand);
    const dealerScore = calculateHand(dealerHand);
    let result = '';
    if (dealerScore > 21 || playerScore > dealerScore) {
        result = 'Você venceu!';
        playerBank += 10;
    } else if (playerScore === dealerScore) {
        result = 'Empate!';
    } else {
        result = 'A Mesa venceu!';
        playerBank -= 10;
    }
    document.getElementById('result').innerText = result;
    updateBank();
}

function updateUI(revealDealer = false) {
    document.getElementById('player-cards').innerText =
        `Suas cartas: ${playerHand.map(c => c.value + c.suit).join(', ')}`;

    if (revealDealer) {
        document.getElementById('dealer-cards').innerText =
            `Cartas da Mesa: ${dealerHand.map(c => c.value + c.suit).join(', ')}`;
    } else {
        let firstCard = dealerHand[0];
        document.getElementById('dealer-cards').innerText =
            `Cartas da Mesa: ${firstCard.value + firstCard.suit} `;
    }
}


function updateBank() {
    document.getElementById('player-bank').innerText = `Seu saldo: ${playerBank}`;
}

function restartGame() {
    createDeck();
    playerHand = [deck.pop(), deck.pop()];
    dealerHand = [deck.pop()];
    document.getElementById('result').innerText = '';
    updateUI();
    updateBank();
}


createDeck();
restartGame();
