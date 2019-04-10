//Dice class setup
class SixDice{
  sideOne = 1;
  sideTwo = 2;
  sideThree = 3;
  sideFour = 4;
  sideFive = 5;
  sideSix = 6;
  currentVal = 0;
}

SixDice.prototype.rollDice = function rollDice(){
  console.log('Rolling the dice...');
  var myRoll = Math.floor(Math.random()*(6 - 1 + 1)) + 1; //Using MDN setup
  return myRoll;
};

SixDice.prototype.getVal = function getVal(myRoll){
  console.log('Getting the value of the roll');
  switch (myRoll) {
    case 1:
      return this.sideOne;
      break;
    case 2:
      return this.sideTwo;
      break;
    case 3:
      return this.sideThree;
      break;
    case 4:
      return this.sideFour;
      break;
    case 5:
      return this.sideFive;
      break;
    case 6:
      return this.sideSix;
      break;
  }
};

SixDice.prototype.resetCurr = function resetCurr(){
  console.log('Reseting the currentVal');
  this.currentVal = 0;
};

//Player class setup
class Player{
  score = 0;
  rollScore = 0;
  playerDice = [];
  playerRoll = [];
  playerSel = [];
}

Player.prototype.resetRollScore = function resetRollScore(){
  this.rollScore = 0;
};

Player.prototype.resetPlayerSel = function resetPlayerSel(){
  this.playerSel = [];
};

//helper Functions
function initDice(playerDice){
  for(var i = 0; i < 6; i++){
    var myDice = new SixDice();
    playerDice[i] = myDice;
  }
};
function myRoll(playerArr, playerRollArr){
  for(var i = 0; i < playerArr.length; i++){
    var myRoll = playerArr[i].rollDice();
    var rollVal = playerArr[i].getVal(myRoll);
    playerArr[i].currentVal = rollVal;
    playerRollArr[i] = playerArr[i].currentVal;
  }
};
function populateButtons(playerRollArr){
  var leftOvers = 6 - playerRollArr.length;
  var start = 6 - leftOvers;
  for(var i = 0; i < playerRollArr.length; i++){
    var num = i + 1;
    var myId = '#diceBut' + num;
    $(myId).prop('disabled', false);
    $(myId).text(playerRollArr[i]);
  }
  if(leftOvers > 0){
    leftOverButtons(start);
  }

};
function leftOverButtons(myNum){
  for(var i = myNum; i < 6; i++){
    var num = i + 1;
    var myId = '#diceBut' + num;
    $(myId).text('X');
    $(myId).prop('disabled', true);
  }
};
//globals
let playerOne = new Player();
initDice(playerOne.playerDice);


//Front-end logic
$(document).ready(function(){
  $('#butForm').submit(function(event){
    event.preventDefault();
    console.log('butForm is being submitted');
    myRoll(playerOne.playerDice, playerOne.playerRoll);
    console.log(playerOne.playerDice);
    console.log('Your roll is: \n' + playerOne.playerRoll);
    populateButtons(playerOne.playerRoll);
  });

  $('.clickable').click(function(event){
    $(this).prop('disabled', true);
    var myVal = parseInt($(this).html());
    playerOne.playerSel.push(myVal);
  });
  $('#resetSel').click(function(){
    console.log('resetSel is clicked');
    playerOne.playerSel = [];
    for(var i = 0; i < playerOne.playerDice.length; i++){
      var num = i + 1;
      var myId = '#diceBut' + num;
      $(myId).prop('disabled', false);
    }
  });
  $('#submitVal').click(function(){
    console.log('submitVal is being clicked');
    var index = 0;
    for(var i = 0; i < playerOne.playerSel.length; i++){
      index = playerOne.playerRoll.indexOf(playerOne.playerSel[i]);
      playerOne.playerRoll.splice(index, 1);
      playerOne.playerDice.pop();
    }
    console.log(playerOne.playerRoll);
    console.log(playerOne.playerDice);
    playerOne.resetPlayerSel();
  });
});
