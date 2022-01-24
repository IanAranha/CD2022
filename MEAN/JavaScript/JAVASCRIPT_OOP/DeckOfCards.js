class Card{
    constructor(suit, value){
        this.suit = suit;
        this.value = value
    }
    
    showCard(){
        console.log(`${this.value} of ${this.suit}`)
    }
}

// let c1 = new Card("Diamonds", "Ace");
// c1.showCard();


class Deck{
    constructor(){
        this.deck = [];
    }

    createDeck(){
        let suits = ["Clubs", "Hearts", "Spades", "Diamonds"]
        let values =["Ace", 2,3,4,5,6,7,8,9,10,"Jack", "Queen", "King"]
        for (let suit of suits){
            for(let value of values){
                this.deck.push(new Card(suit, value))
            }
        }
        return this
    }

    shuffle(){
        let counter, j, temp;
        for(counter = this.deck.length-1; counter > 0 ; counter --){
            j = Math.floor(Math.random() * (counter+1))
            temp = this.deck[counter]
            this.deck[counter] = this.deck[j]
            this.deck[j] = temp
        }  
        return this
    }

    deal(){
        let hand = []
        while (hand.length < 2){
            hand.push(this.deck.pop())
        }
        return hand
    }
}


class Player{
    constructor(name){
        this.name=name
        this.hand = []
    }

    draw(deck){
        this.hand.push(deck.deal())
        return this
    }

    discard(){
        this.hand.pop()
        return this
    }

}

let d1 = new Deck()
console.log(d1)
d1.createDeck()
console.log(d1)
d1.shuffle().shuffle().shuffle()
console.log(d1)
console.log(d1.deal())
let p1 = new Player("Ian")
console.log(p1.name)
p1.draw(d1)
console.log(p1.hand)
p1.discard()
console.log(p1.hand)