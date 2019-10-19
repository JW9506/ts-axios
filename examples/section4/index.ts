class Greeter {
  greeting: string;
  constructor(message: string) {
    this.greeting = message;
  }
  greet() {
    return `Hello ${this.greeting}`;
  }
}

const greeter = new Greeter("World");
console.log(greeter.greet());

console.log();
console.log();
console.log();
console.log();

interface Card {
  suit: string;
  card: number;
}

interface Deck {
  suits: string[];
  cards: number[];
  createCardPicker(): () => Card;
}

const deck: Deck = {
  suits: ["hearts", "spades", "clubs", "diamonds"],
  cards: Array(52),
  createCardPicker(this: Deck) {
    return () => {
      let pickedCard = Math.floor(Math.random() * 52);
      let pickedSuit = Math.floor(pickedCard / 13);
      return {
        suit: this.suits[pickedSuit],
        card: (pickedCard % 13) + 1
      };
    };
  }
};

const cardPicker = deck.createCardPicker();
for (let i = 0; i < 3; i++) {
  let c = cardPicker();
  console.log(`Card ${c.card} of ${c.suit}`);
}
