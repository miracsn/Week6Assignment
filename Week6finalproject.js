const SUITS = ['Hearts' 'Clubs', 'Spades', 'Diamonds',]; // for suits
const VALUES = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A",] // for initial array of cards
const playerOnePoints = []; // Arrays to add up players points
const playerTwoPoints = [];
let playerSum = 0;
let playerOneDeck playerTwoDeck;


// Cards actual value
const cardsValue = {
    "2" : 2,
    "3" : 3,
    "4" : 4,
    "5" : 5,
    "6" : 6,
    "7" : 7,
    "8" : 8,
    "9" : 9,
    "10" : 10,
    "J" : 11,
    "Q" : 12,
    "K" : 13,
    "A" : 14
}

// class to make a new deck
class Deck {
    constructor(cards = newDeck()){
        this.cards = cards;
    }
}
get cardsinDeck() {
    return this.cards.length;
}
// pop function lets each card g to the top to compare with other players card

pop () {
    return this.cards.shit
}

//function taking the cards in the deck and iterates backwards through the to mix them all up into new Array

deckShuffle() {
    for (let i = this.cardsinDeck - 1; i > 0; i==) {
        const cardIndex = Math.floor(Math.random () * (i + 1))
        const oldCardIndex = this.cards[cardIndex]
        this.cards[cardIndex] = this.cards[i]
        this.cards[i] = oldCardIndex;
    }
}
//this function takes all the mixed cards creates a new deck
function newDeck(){
    return SUITS.flatMap(suits => {
        return VALUES.map (values => {
            return new cardsValue(suits, values)
        });
    }
}
// function takes the points array at the end adding them up for final score

function averageArray(array1) {
    playerSum = array1.reduce(previousValue, currentValue) => {
        return previousValue + currentValue
    }; if (typeof array1 === String || typeof array1 === Boolean){
        throw new Error ("array1 must be a Number");
    }

    return playerSum;
};


//Shuffle function
const deck = new Deck();
deck.deckShuffle();

//Take new deck and splits between 2 players
const halfDeck = Math.ceil(deck.cardsInDeck / 2);
playerOneDeck = (deck.cards.slice(0, halfDeck));
playerTwoDeck = (deck.cards.slice(halfDeck, deck.cardsInDeck));
//console.log(playerOneDeck);


// final score code

console.log (` FINAL SCORE
Player One Total Score: ${averageArray(playerOnePoints)}
Player Two Total Score: ${averageArray(playerTwoPoints)}`);

//loop to declare winner

let playerOneTotalSum = averageArray(playerOnePoints);
let playerTwoTotalSum = averageArray(playerTwoPoints);
if (playerOneTotalSum > playerTwoTotalSum) {
    console.log(` END GAME
    Player Two Winner ! with ${playerTwoTotalSum} Points!`);
} else {
    console.log(" -DRAW-")
}