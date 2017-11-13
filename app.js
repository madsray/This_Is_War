$(() =>{

console.log("hey this is working!")
//++++++++++++++++++++++++++++++++++++++++++++++++
//create deal button to be click able
//deal button splits cards randomly between computer array and Player array
//text changes showing amount of players and computers cards in their pile
//create player card as button
//when player clicks card flip over both Cards
//if computers card is greater push cards into computers array
//if players card is greater push cards into players array
//if cards are tied. flip over another card
//check to see if computer has any remaining cards
//check to see if player has any remaining Cards
//if computer doesn't player wins
//if player doesn't computer wins
//++++++++++++++++++++++++++++++++++++++++++++++++++++++

// +++++++++++++++++++set variable+++++++++++++++++++++++++++++
// const cardDeck = [];
// const playersArray = [];
// const computersArray = [];
// const player = playersArray[0];
// const computer = computersArray[0];
// const $deal = $('#deal');
const suits = ["S","H","D","C"];
class Card {
  constructor(suit,face){
    this.suit = suits[Math.floor(Math.random()*4)];
    this.face = Math.floor(Math.random()*13);
    this.image = 'images/' + this.face + '_of_' + this.suit + '.png';
    this.value = this.face;
  }
}
const card1 = new Card();
const card2 = new Card();
const card3 = new Card();
const card4 = new Card();
const card5 = new Card();
const card6 = new Card();
const card7 = new Card();
const card8 = new Card();
const card9 = new Card();
const card10 = new Card();
const card11 = new Card();
const card12 = new Card();
const card13 = new Card();
const card14 = new Card();
const card15 = new Card();
const card16 = new Card();
const card17 = new Card();
const card18 = new Card();
const card19 = new Card();
const card20 = new Card();
const card21 = new Card();
const card22 = new Card();
const card23 = new Card();
const card24 = new Card();
const card25 = new Card();
const card26 = new Card();
const card27 = new Card();
const card28 = new Card();
const card29 = new Card();
const card30 = new Card();
const card31 = new Card();
const card32 = new Card();
const card33 = new Card();
const card34 = new Card();
const card35 = new Card();
const card36 = new Card();
const card37 = new Card();
const card38 = new Card();
const card39 = new Card();
const card40 = new Card();
const card41 = new Card();
const card42 = new Card();
const card43 = new Card();
const card44 = new Card();
const card45 = new Card();
const card46 = new Card();
const card47 = new Card();
const card48 = new Card();
const card49 = new Card();
const card50 = new Card();
const card51 = new Card();
const card52 = new Card();
console.log(card47);
// const warArray = [
//
// ];


//++++++++++++Dealing Cards+++++++++++++++++++++++++
//https://github.com/MisterTeeRoland/war/blob/master/game.js
//  const splitArray=() => {
// 	splitCards(cardDeck);
// }



//function to split shuffled deck in half
//  const splitCards = (cardDeck) => {
// 	let i = 0;
//
// 	//push a card to each "hand" array
// 	while (i != cardDeck.length) {
// 		playersArray.push(cardDeck[i]);
// 		computersArray.push(cardDeck[(i+1)]);
// 		i+=2;
// 	}
//
// }
// +++++++++++++++++Class+++++++++++++++++++++++====++++++++



// ++++++++++++++++game play+++++++++++++++++++++++++++++

//++++++++++++++clicks+++++++++++++++++++++++
// $deal.on('click', fillArray);
// // $card.on('click', playGame);
//
// // for ()
//
//
// //++++++++++++check+++++++++++++++++++++
// // console.log(fillArray);
//
//
// console.log(playersArray);
// console.log(computersArray);











});
