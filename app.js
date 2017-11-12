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
const $twoC = $('<img>').attr("src","images/2C.png");
const $twoD = $('<img>').attr("src","images/2D.png");
const $twoH = $('<img>').attr("src","images/2H.png");
const $twoS = $('<img>').attr("src","images/2S.png");
const $threeC = $('<img>').attr("src","images/3C.png");
const $threeD = $('<img>').attr("src","images/3D.png");
const $threeS = $('<img>').attr("src","images/3S.png");
const $threeH = $('<img>').attr("src","images/3H.png");
const $fourC = $('<img>').attr("src","images/4C.png");
const $fourD = $('<img>').attr("src","images/4D.png");
const $fourH = $('<img>').attr("src","images/4H.png");
const $fourS = $('<img>').attr("src","images/4S.png");
const $fiveC = $('<img>').attr("src","images/5C.png");
const $fiveD = $('<img>').attr("src","images/5D.png");
const $fiveS = $('<img>').attr("src","images/5S.png");
const $fiveH = $('<img>').attr("src","images/5H.png");
const $sixC = $('<img>').attr("src","images/6C.png");
const $sixD = $('<img>').attr("src","images/6D.png");
const $sixS = $('<img>').attr("src","images/6S.png");
const $sixH = $('<img>').attr("src","images/6H.png");
const $sevenC = $('<img>').attr("src","images/7C.png");
const $sevenD = $('<img>').attr("src","images/7D.png");
const $sevenS = $('<img>').attr("src","images/7S.png");
const $sevenH = $('<img>').attr("src","images/7H.png");
const $eightC = $('<img>').attr("src","images/8C.png");
const $eightD = $('<img>').attr("src","images/8D.png");
const $eightS = $('<img>').attr("src","images/8S.png");
const $eightH = $('<img>').attr("src","images/8H.png");
const $nineC = $('<img>').attr("src","images/9C.png");
const $nineD = $('<img>').attr("src","images/9D.png");
const $nineS = $('<img>').attr("src","images/9S.png");
const $nineH = $('<img>').attr("src","images/9H.png");
const $tenC = $('<img>').attr("src","images/10C.png");
const $tenD = $('<img>').attr("src","images/10D.png");
const $tenS = $('<img>').attr("src","images/10S.png");
const $tenH = $('<img>').attr("src","images/10H.png");
const $jH = $('<img>').attr("src","images/JH.png");
const $jS = $('<img>').attr("src","images/JS.png");
const $jD = $('<img>').attr("src","images/JD.png");
const $jC = $('<img>').attr("src","images/JC.png");
const $qS = $('<img>').attr("src","images/QS.png");
const $qD = $('<img>').attr("src","images/QD.png");
const $qC = $('<img>').attr("src","images/QC.png");
const $qH = $('<img>').attr("src","images/QH.png");
const $kD = $('<img>').attr("src","images/KD.png");
const $kS = $('<img>').attr("src","images/KS.png");
const $kH = $('<img>').attr("src","images/KH.png");
const $kC = $('<img>').attr("src","images/KC.png");
const $aC = $('<img>').attr("src","images/AC.png");
const $aS = $('<img>').attr("src","images/AS.png");
const $aH = $('<img>').attr("src","images/AH.png");
const $aD = $('<img>').attr("src","images/AD.png");
const cardArray = [
  {
    imageAssign: $twoC,
    value: 2,
    name: "twoClub"
  },
  {
    imageAssign: $twoD,
    value: 2,
    name: "twoDiambond"
  },
  {
    imageAssign: $twoS,
    value: 2,
    name: "twoSpades"
  },
  {
    imageAssign: $twoH,
    value: 2,
    name: "twoHeart"
  },
  {
    imageAssign: $threeC,
    value: 3,
    name: "threeClub"
  },
  {
    imageAssign: $threeS,
    value: 3,
    name: "threeSpade"
  },
  {
    imageAssign: $threeH,
    value: 3,
    name: "threeHeart"
  },
  {
    imageAssign: $threeD,
    value: 3,
    name: "threeDiamond"
  },
  {
    imageAssign: $fourC,
    value: 4,
    name: "fourClub"
  },
  {
    imageAssign: $fourD,
    value: 4,
    name: "fourDiamond"
  },
  {
    imageAssign: $fourS,
    value: 4,
    name: "fourSpade"
  },
  {
    imageAssign: $fourH,
    value: 4,
    name: "fourHeart"
  },
  {
    imageAssign: $fourC,
    value: 5,
    name: "fiveClub"
  },
  {
    imageAssign: $fiveS,
    value: 5,
    name: "fiveSpade"
  },
  {
    imageAssign: $fiveH,
    value: 5,
    name: "fiveHeart"
  },
  {
    imageAssign: $fiveD,
    value: 5,
    name: "fiveDiamond"
  },
  {
    imageAssign: $sixC,
    value: 6,
    name: "sixClub"
  },
  {
    imageAssign: $sixS,
    value: 6,
    name: "sixSpade"
  },
  {
    imageAssign: $sixD,
    value: 6,
    name: "sixDiamond"
  },
  {
    imageAssign: $sixH,
    value: 6,
    name: "sixHeart"
  },
  {
    imageAssign: $sevenC,
    value: 7,
    name: "sevenClub"
  },
  {
    imageAssign: $sevenH,
    value: 7,
    name: "sevenHeart"
  },
  {
    imageAssign: $sevenD,
    value: 7,
    name: "sevenDiamond"
  },
  {
    imageAssign: $sevenS,
    value: 7,
    name: "sevenSpade"
  },
  {
    imageAssign: $eightC,
    value: 8,
    name: "eightClub"
  },
  {
    imageAssign: $eightH,
    value: 8,
    name: "eightHeart"
  },
  {
    imageAssign: $eightD,
    value: 8,
    name: "eightDiamond"
  },
  {
    imageAssign: $eightS,
    value: 8,
    name: "eightSpade"
  },
  {
    imageAssign: $nineC,
    value: 9,
    name: "nineClub"
  },
  {
    imageAssign: $nineS,
    value: 9,
    name: "nineSpade"
  },
  {
    imageAssign: $nineD,
    value: 9,
    name: "nineDiamond"
  },
  {
    imageAssign: $nineH,
    value: 9,
    name: "nineHeart"
  },
  {
    imageAssign: $tenC,
    value: 10,
    name: "tenClub"
  },
  {
    imageAssign: $tenS,
    value: 20,
    name: "tenSpade"
  },
  {
    imageAssign: $tenD,
    value: 10,
    name: "tenDiamond"
  },  {
      imageAssign: $tenH,
      value: 10,
      name: "tenHeart"
    },
    {
      imageAssign: $jC,
      value: 11,
      name: "jackClub"
    },
    {
      imageAssign: $jS,
      value: 11,
      name: "jackSpade"
    },
    {
      imageAssign: $jH,
      value: 11,
      name: "jackHeart"
    },
    {
      imageAssign: $jD,
      value: 11,
      name: "jackDiamond"
    },
    {
      imageAssign: $qC,
      value: 12,
      name: "queenClub"
    },
    {
      imageAssign: $qS,
      value: 12,
      name: "queenSpade"
    },
    {
      imageAssign: $qH,
      value: 12,
      name: "queenHeart"
    },
    {
      imageAssign: $qD,
      value: 12,
      name: "queenDiamond"
    },
    {
      imageAssign: $kC,
      value: 13,
      name: "kingClub"
    },
    {
      imageAssign: $kS,
      value: 13,
      name: "kingSpade"
    },
    {
      imageAssign: $kD,
      value: 13,
      name: "kingDiamond"
    },
    {
      imageAssign: $kH,
      value: 13,
      name: "kingHeart"
    },
    {
      imageAssign: $aS,
      value: 14,
      name: "kindHeart"
    },
    {
      imageAssign: $aH,
      value: 14,
      name: "kindHeart"
    },
    {
      imageAssign: $aD,
      value: 14,
      name: "kindHeart"
    },
    {
      imageAssign: $aC,
      value: 14,
      name: "kindHeart"
    },




]











});
