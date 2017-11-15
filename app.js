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

const gamePlay = [];
const playersArray = [];
const computersArray = [];
const $deal = $('#deal');
const suits = ["S","H","D","C"];
const faces = [2,3,4,5,6,7,8,9,10,11,12,13,14];
const deckLength = 52;
const warArray = [];

const createDeck = () => {
  for(let i = 0; i<suits.length; i++){
    for (let e= 0; e<faces.length;e++){
      let card = {Value: faces[e],Suit: suits[i],Image:'images/' + faces[e] + '_of_' + suits[i] + '.png'}
      warArray.push(card);
    }
  }
}

function shuffle() {
    for (let i = warArray.length - 1; i > 0; i--) {
        const shuffle = Math.floor(Math.random() * (i + 1));
        [warArray[i], warArray[shuffle]] = [warArray[shuffle], warArray[i]];
    }
}


//++++++++++++Dealing Cards+++++++++++++++++++++++++
// https://github.com/MisterTeeRoland/war/blob/master/game.js
 const splitArray=() => {
	splitCards(warArray);
}



// function to split shuffled deck in half
 const splitCards = (warArray) => {
	let i = 0;

	//push a card to each "hand" array
	while (i != warArray.length) {
		playersArray.push(warArray[i]);
		computersArray.push(warArray[(i+1)]);
		i+=2;
	}

}

const startGame = () => {
createDeck();
shuffle();
splitArray();
}
startGame();

//+++++++++++++hitCard+++++++++++++++++++++
const dealCard = () => {
$('.currentcard').remove();
  const $imageP=
   $('<img>').attr('src',playersArray[0].image).addClass("currentcard");
  $('#player').append($imageP);
  const $imageC= $('<img>').attr('src',computersArray[0].image).addClass("currentcard");
  $('#computer').append($imageC);
  gamePlay.push(playersArray[0]);
  gamePlay.push(computersArray[0]);
  if (playersArray[0].value>computersArray[0].value){
    alert('Player Wins Battle!');
    playersArray.push(gamePlay[0],gamePlay[1]);
    console.log("computersB" , computersArray);
    console.log("playersB", playersArray);
    computersArray.splice(computersArray[0],1);
    playersArray.splice(playersArray[0],1);
    console.log("computersA" , computersArray);
    console.log("playersA", playersArray);
    // removeCard();
  } else if (computersArray[0].value>playersArray[0].value){
    alert("Computer Wins Battle!");
    computersArray.push(gamePlay[0],gamePlay[1]);
    console.log("computersB" , computersArray);
    console.log("playersB", playersArray);
    computersArray.splice(computersArray[0],1);
    playersArray.splice(playersArray[0],1);
    console.log("computersA" , computersArray);
    console.log("playersA", playersArray);
  } else if (computersArray[0].value === playersArray[0].value){
    alert("tie");
    //fix this++++++++++++++++ gamePlay.push(computersArray[0],computersArray[1],computersArray[2]);
    // gamePlay.push(playersArray[0],playersArray[1],playersArray[2]);
    // $('.currentcard').remove();
    // const $imageP= $('<img>').attr('src',playersArray[3].image);
    // $('#player').append($imageP);
    // const $imageC= $('<img>').attr('src',computersArray[3].image);
    // $('#computer').append($imageC);
    // gamePlay.push(playersArray[3],computersArray[3]);
    // if (computersArray[3].value>playersArray[3].value){
    //   computersArray.push(gamePlay);
    // } else if(computersArray[3].value<playersArray[3].value){
    //   playersArray.push(gamePlay);
    // }
  }
}


//++++++++++++++clicks+++++++++++++++++++++++

 $deal.on('click', dealCard);
$deal.on('click', () => {
  $('#pScore').text("Player's Score: " + playersArray.length);
  $('#cScore').text("Computer's Score: " + computersArray.length);
})
//++++++++++++check+++++++++++++++++++++

console.log(playersArray);
console.log(computersArray);
// console.log(gamePlay);











});
