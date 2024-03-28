let player = {
    name: "Per",
    chips: 200
}

let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
let playerEl = document.getElementById("player-el")

playerEl.textContent = player.name + ": $" + player.chips

function getRandomCard() {
    let cardValue = Math.floor(Math.random() * 13) + 1;
    let cardName;
    switch (cardValue) {
        case 1:
            cardName = 'Ace';
            break;
        case 11:
            cardName = 'jack';
            break;
        case 12:
            cardName = 'queen';
            break;
        case 13:
            cardName = 'king';
            break;
        default:
            cardName = cardValue.toString();
    }
    return {
        value: cardValue,
        name: cardName,
        image: `images/${cardName}.png` // Path to your card images
    };
}

function restartCard()
 {
    var audio = document.getElementById("click-sound");
    audio.play();
    cards = [ ];
    sum = " ";
    hasBlackJack = false;
    isAlive = false;
    message = "";
    renderGame();
}

function startGame()
 {
    var audio = document.getElementById("click-sound");
    audio.play();
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard.value + secondCard.value
    renderGame()
}

function renderGame() {
    cardsEl.innerHTML = ""; // Clear existing cards
    for (let i = 0; i < cards.length; i++) {
        let cardImg = document.createElement("img");
        cardImg.src = cards[i].image;
        cardsEl.appendChild(cardImg);
    }
    
    sumEl.textContent = "Sum: " + sum;
    if (sum <= 20) {
        message = "Do you want to draw a new card?";

    } else if (sum === 21) {
        message = "You've got Blackjack!";
        hasBlackJack = true;
    } else {
        message = "You're out of the game!";
        isAlive = false;
    }
    messageEl.textContent = message;
}


function newCard()
 {
    var audio = document.getElementById("click-sound");
    audio.play();
    if (isAlive && !hasBlackJack) {
        let card = getRandomCard();
        sum += card.value;
        cards.push(card);
        renderGame();
    }
}
