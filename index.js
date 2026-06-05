let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;

let messageEl = document.getElementById("message");
let cardsEl = document.getElementById("cards");
let sumEl = document.getElementById("sum");

function getRandomCard() {
    let randomNumber = Math.floor(Math.random() * 13) + 1;

    if (randomNumber > 10) {
        return 10; // J, Q, K
    } else if (randomNumber === 1) {
        return 11; // Ace
    } else {
        return randomNumber;
    }
}

function startGame() {
    isAlive = true;
    hasBlackJack = false;

    let firstCard = getRandomCard();
    let secondCard = getRandomCard();

    cards = [firstCard, secondCard];
    sum = firstCard + secondCard;

    renderGame();
}

function renderGame() {
    cardsEl.textContent = "Cards: ";

    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " ";
    }

    sumEl.textContent = "Sum: " + sum;

    if (sum < 21) {
        messageEl.textContent = "Do you want to draw a new card?";
    } else if (sum === 21) {
        messageEl.textContent = "🎉 Blackjack!";
        hasBlackJack = true;
    } else {
        messageEl.textContent = "💀 You're out of the game!";
        isAlive = false;
    }
}

function newCard() {
    if (isAlive && !hasBlackJack) {
        let card = getRandomCard();

        cards.push(card);
        sum += card;

        renderGame();
    }
}