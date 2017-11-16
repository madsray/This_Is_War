$(() =>{
// console.log("hey this is working!")
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
let gamePlayP = [];
let gamePlayC = [];
const playersArray = [];
const computersArray = [];
const $deal = $('#deal');
const suits = ["S","H","D","C"];
const faces = [2,3,4,5,6,7,8,9,10,11,12,13,14];
const deckLength = 52;
const warArray = [];
  const $restart = $("<div>").attr('id',"playAgain");
// +++++++++++++++++++++Create Deck+++++++++++++++++++++++++++++++++
const createDeck = () => {
  for(let i = 0; i<suits.length; i++){
    for (let e= 0; e<faces.length;e++){
      let card = {Value: faces[e],Suit: suits[i],Image:'images/' + faces[e] + '_of_' + suits[i] + '.png'}
      warArray.push(card);
    }
  }
}
// ++++++++++++++++Shuffle Function++++++++++++++++++++++++++++++++++++
//refernced this to create the shuffle without dupliates https://stackoverflow.com/questions/15585216/how-to-randomly-generate-numbers-without-repetition-in-javascript
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
//+++++++++++++Start Game+++++++++++++++++
const startGame = () => {
  $deal.show();
createDeck();
shuffle();
splitArray();
}
startGame();
// +++++++++++++++++++Check Win++++++++++++++++++++
// const checkWin = () => {
//
//   if (playersArray.length === 0){
//     alert("You Lost!")
//     $deal.hide();
//     // const $restart = $("<div>").attr('id',"playAgain");
//     $('body').append($restart);
//
//
//   } else if (computersArray.length === 0){
//     alert("You won!")
//     $deal.hide();
//
//     $('body').append($restart);
//
//
//
//   }
// }

// ++++++++++++++++++++tie Check++++++++++++++++++++++
const tieCheck = () => {

  $(".tiebattle").remove();
  $('.currentcard').remove();
  if (playersArray.length<5 || computersArray.length<5){
    if (playersArray.length<5){
      console.log(playersArray.length);
      for (let i = 0; i<playersArray.length-1;i++){
        gamePlay=computersArray.shift();
        gamePlay=playersArray.shift();
        // tie();
      }
      tie();
    } else if (computersArray.length<5){
      console.log(playersArray.length);
      for(let e = 0; e<computersArray.length-1;e++){
        gamePlay=playersArray.shift();
        gamePlay=computersArray.shift();


        // tie();
      }
      tie();
    }
  } else {
    for (let i = 0; i<=3; i++){
      gamePlay = playersArray.shift();
      gamePlay = computersArray.shift();
    }

    tie();
  }
}
//+++++++++++++++tie function++++++++++++++++++++++++++++
const tie = () => {
  //removes tie battle button
  // $(".tiebattle").remove();
//   //pushes tie cards if player and computer have more than five cards
// gamePlay.push(computersArray[0],computersArray[1],computersArray[2]);
// gamePlay.push(playersArray[0],playersArray[1],playersArray[2]);
//removes current tie cards
// $('.currentcard').remove();
//the fourth card is then flipped over to compare
const $imageP= $('<img>').attr('src',playersArray[0].Image).addClass("currentcard");
$('#player').append($imageP);
const $imageC= $('<img>').attr('src',computersArray[0].Image).addClass("currentcard");
$('#computer').append($imageC);
//this pushes the fourth card into the game play array
// gamePlay.push(playersArray[0],computersArray[0]);
compareWar(playersArray,computersArray);
}



const compareWar = (playersArray,computersArray) => {

if (computersArray[0].Value>playersArray[0].Value){
  for (let i = 0; i<gamePlay.length;i++){
  computersArray = gamePlay.shift();
  gamePlay = []

};

  // computersArray.splice(computersArray[0],1);
  // playersArray.splice(playersArray[0],1);

} else if(computersArray[0].Value<playersArray[0].Value){
  for (let i = 0; i<gamePlay.length;i++){
  playersArray = gamePlay.shift();
  gamePlay = [];
}

  // computersArray.splice(computersArray[0],1);
  // playersArray.splice(playersArray[0],1);
  // console.log("Player after player wins tie:" + playersArray)
  // console.log("computer after player looses tie:" + computersArray)
} else if (computersArray[0].Value===playersArray[0].Value){
  computersArray.splice(computersArray[0],1);
  playersArray.splice(playersArray[0],1);
  tieCheck();
}
}
//+++++++++++++hitCard+++++++++++++++++++++
    const dealCard = () => {
      $('.currentcard').remove();

      const $imageP=
        $('<img>').attr('src',playersArray[0].Image).addClass("currentcard");
      $('#player').append($imageP);
      const $imageC= $('<img>').attr('src',computersArray[0].Image).addClass("currentcard");
      $('#computer').append($imageC);
      gamePlayP = playersArray.shift();
      gamePlayC = computersArray.shift();
      console.log(gamePlayP);
      console.log(gamePlayC);

  if (gamePlayP.Value>gamePlayC.Value){
      alert('Player Wins Battle!');

        playersArray.push(gamePlayP[0]);
        playersArray.push(gamePlayC[0]);

    gamePlayP = [];
    gamePlayC = [];

  } else if (gamePlayP.Value<gamePlayC.Value){
    alert("Computer Wins Battle!");

    computersArray.push(gamePlayC[0]);

  computersArray.push(gamePlayP[0]);

  gamePlayP = [];
  gamePlayC = [];

  } else if (computersArray[0].Value === playersArray[0].Value){
    alert("tie");
    const $tie = $("<div>").text("Tie Battle!").addClass("tiebattle");
    $('body').append($tie);
    $tie.on('click', tieCheck);
  }
}
//++++++++++++++clicks+++++++++++++++++++++++
$deal.on('click', dealCard);
$deal.on('click', () => {
  $('#pScore').text("Player's Score: " + playersArray.length);
  console.log(playersArray.length);
  $('#cScore').text("Computer's Score: " + computersArray.length);
  console.log(computersArray.length);
})
// $restart.on('click',startGame);
//++++++++++++check+++++++++++++++++++++
console.log(playersArray);
console.log(computersArray);
// console.log(gamePlay);

});
