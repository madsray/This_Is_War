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
const $tie = $("<div>").text("Tie Battle!").addClass("tiebattle");
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
const checkWin = () => {

  if (playersArray.length === 0){
    alert("You Lost!")
  } else if (computersArray.length === 0){
    alert("You won!")
  }
}

// ++++++++++++++++++++tie Check++++++++++++++++++++++
const tieCheck = () => {

  // $(".tiebattle").remove();
  // $('.currentcard').remove();
  if (playersArray.length<5 || computersArray.length<5){
    if (playersArray.length<5){
      console.log(playersArray.length);
      for (let i = playersArray.length-1; i<playersArray.length;i++){
        // gamePlayC=computersArray.shift();
        // gamePlayP=playersArray.shift();
        gamePlayC.push(computersArray[i]);
        gamePlayP.push(playersArray[i]);
        // tie();
      }
      checkCards2();
    } else if (computersArray.length<5){
      console.log(playersArray.length);
      for(let e = computersArray.length-1;e<computersArray.length;e++){
        gamePlayC.push(computersArray[e]);
        gamePlayP.push(playersArray[e]);


        // tie();
      }
      checkCards2();
    }
  } else {

    for (let i = 0; i<3; i++){

      gamePlayP.push(playersArray[i]);
      gamePlayC.push(computersArray[i]);

    }
      playersArray.shift();
      playersArray.shift();
      playersArray.shift();
      computersArray.shift();
      computersArray.shift();
      computersArray.shift();
      const $imageP=
        $('<img>').attr('src',playersArray[0].Image).addClass("currentcard");
      $('#player').append($imageP);
      const $imageC= $('<img>').attr('src',computersArray[0].Image).addClass("currentcard");
      $('#computer').append($imageC);
    checkCards2();
  }
}

//+++++++++++++hitCard+++++++++++++++++++++
    const dealCard = () => {
      $tie.hide();
      $deal.show();

      checkWin();
      $('.currentcard').remove();

      const $imageP=
        $('<img>').attr('src',playersArray[0].Image).addClass("currentcard");
      $('#player').append($imageP);
      const $imageC= $('<img>').attr('src',computersArray[0].Image).addClass("currentcard");
      $('#computer').append($imageC);
      gamePlayP.push(playersArray[0]);
      gamePlayC.push(computersArray[0]);

      playersArray.shift();
      computersArray.shift();
      console.log(gamePlayP[0].Value);
      console.log(gamePlayC[0].Value);
      checkCards();
    }
const checkCards = () => {


  if (gamePlayP[0].Value>gamePlayC[0].Value){
      // alert('Player Wins Battle!');
swal('Player Wins Battle!')

        playersArray.push(gamePlayP[0]);
        playersArray.push(gamePlayC[0]);


        gamePlayP = [];
        gamePlayC = [];

  } else if (gamePlayP[0].Value<gamePlayC[0].Value){
    swal('Computer Wins Battle!')
    computersArray.push(gamePlayC[0]);
    computersArray.push(gamePlayP[0]);

    gamePlayP = [];
    gamePlayC = [];

} else if (gamePlayP[0].Value === gamePlayC[0].Value){
  swal('Tie!')
    const $tie = $("<div>").text("Tie Battle!").addClass("tiebattle");
    $('body').append($tie);
    // $tie.on('click', tieCheck);
    $tie.on('click', tieCheck);
  }
}
const checkCards2 = () => {


  if (gamePlayP[1].Value>gamePlayC[1].Value){
      swal('Player Wins Battle!')
      for (let i = 0; i<gamePlayC.length;i++){

        playersArray.push(gamePlayC[i]);
      }
      for (let i = 0; i<gamePlayP.length; i++){

        playersArray.push(gamePlayP[i]);
      }

        gamePlayP = [];
        gamePlayC = [];

  } else if (gamePlayP[1].Value<gamePlayC[1].Value){
    swal('Computer Wins Battle!')
    for (let i = 0; i<gamePlayC.length;i++){

      computersArray.push(gamePlayC[i]);
    }
    for (let i = 0; i<gamePlayP.length; i++){

      computersArray.push(gamePlayP[i]);
    }

    gamePlayP = [];
    gamePlayC = [];

} else if (gamePlayP[1].Value === gamePlayC[1].Value){
    swal('Tie!')
    const $tie = $("<div>").text("Tie Battle!").addClass("tiebattle");
    $('body').append($tie);
    // $tie.on('click', tieCheck);
    $tie.on('click', tieCheck);
  }
}
//++++++++++++++clicks+++++++++++++++++++++++
$tie.on('click', tieCheck);
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
