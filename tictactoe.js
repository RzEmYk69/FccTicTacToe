document.addEventListener("DOMContentLoaded", function(event) {
var label = document.getElementById("label");
var xBtn = document.getElementById("xBtn");
var oBtn = document.getElementById("oBtn");
var resetBtn = document.getElementById("resetBtn");
var buttons = document.getElementById("buttons");
var fields = document.getElementById("board");
var field1 = document.getElementById("field1");
var field2 = document.getElementById("field2");
var field3 = document.getElementById("field3");
var field4 = document.getElementById("field4");
var field5 = document.getElementById("field5");
var field6 = document.getElementById("field6");
var field7 = document.getElementById("field7");
var field8 = document.getElementById("field8");
var field9 = document.getElementById("field9");


var player;
var AIplayer;
var board = [1,2,3,4,5,6,7,8,9];
var gameStatus = false;

label.innerHTML = "Choose X or O";
resetBtn.style.display = 'none';

xBtn.addEventListener("click", function(){
  player = "X";
  AIplayer ="O";
  buttons.style.display = 'none';
  label.innerHTML = "Click on a field";
  gameStatus = true;
},false);

oBtn.addEventListener("click", function(){
  player = "O";
  AIplayer="X";
  buttons.style.display = 'none';
  label.innerHTML = "Click on a field";
  gameStatus=true;
  AImove();
},false);

function AImove() {
  var possibleMoves=[];
  for (var i=0; i<board.length;i++) {
    if (board[i] !== "X" && board[i]!=="O")
      possibleMoves.push(board[i]);
  }
  var howManyPossibleMoves = possibleMoves.length;
  var AIchooses = (Math.floor(Math.random()*(howManyPossibleMoves)));
  for (var j=0; j<board.length;j++) {
    if (possibleMoves[AIchooses]===board[j]) {
      var AIfield = "field"+(j+1);
      //console.log("AI:",AIfield);
      move(AIfield,AIplayer);
    }

  }
}

function move(field,mark) {
  switch(field) {
  case "field1":  field1.innerHTML = mark;
                  board[0] = mark;
                  break;
  case "field2":  field2.innerHTML = mark;
                  board[1] = mark;
                  break;
  case "field3":  field3.innerHTML = mark;
                  board[2] = mark;
                  break;
  case "field4":  field4.innerHTML = mark;
                  board[3] = mark;
                  break;
  case "field5":  field5.innerHTML = mark;
                  board[4] = mark;
                  break;
  case "field6":  field6.innerHTML = mark;
                  board[5] = mark;
                  break;
  case "field7":  field7.innerHTML = mark;
                  board[6] = mark;
                  break;
  case "field8":  field8.innerHTML = mark;
                  board[7] = mark;
                  break;
  case "field9":  field9.innerHTML = mark;
                  board[8] = mark;
                  break;
  }
}

function checkWin(p) {
  if (board[0]===p && board[1]===p && board[2]===p) return false;
  if (board[3]===p && board[4]===p && board[5]===p) return false;
  if (board[6]===p && board[7]===p && board[8]===p) return false;
  if (board[0]===p && board[3]===p && board[6]===p) return false;
  if (board[1]===p && board[4]===p && board[7]===p) return false;
  if (board[2]===p && board[5]===p && board[8]===p) return false;
  if (board[0]===p && board[4]===p && board[8]===p) return false;
  if (board[2]===p && board[4]===p && board[6]===p) return false;
  return true;
}

function checkTie() {
  var howManyEmptyFields=0;
  for (var i=0; i<board.length; i++) {
    if (board[i]!=="X" & board[i]!=="O") howManyEmptyFields++;
  }
  if (howManyEmptyFields===0) {
    label.innerHTML = "No one wins.Tie!";
    showResetBtn();
    return false;
  }
  howManyEmptyFields=0;
  return true;
}

function checkField(field) {
  switch(field) {
  case "field1":  if (board[0] !== "X" && board[0] !== "O") return true;
                  break;
  case "field2":  if (board[1] !== "X" && board[1] !== "O") return true;
                  break;
  case "field3":  if (board[2] !== "X" && board[2] !== "O") return true;
                  break;
  case "field4":  if (board[3] !== "X" && board[3] !== "O") return true;
                  break;
  case "field5":  if (board[4] !== "X" && board[4] !== "O") return true;
                  break;
  case "field6":  if (board[5] !== "X" && board[5] !== "O") return true;
                  break;
  case "field7":  if (board[6] !== "X" && board[6] !== "O") return true;
                  break;
  case "field8":  if (board[7] !== "X" && board[7] !== "O") return true;
                  break;
  case "field9":  if (board[8] !== "X" && board[8] !== "O") return true;
                  break;
  }

  return false;
}

function showResetBtn() {
  buttons.style.display = 'unset';
  xBtn.style.display = "none";
  oBtn.style.display = 'none';
  resetBtn.style.display = 'unset';
}

fields.addEventListener("click", function(a) {
    var field = a.target.id;

    var emptyFiled = false;
    emptyField = checkField(field);
    //console.log(emptyField,field);

    if (gameStatus===true && emptyField===true) {
      move(field,player);
      gameStatus = checkWin(player);
      if (gameStatus===false) {
        label.innerHTML = "Human player wins!";
        showResetBtn();
        }
      if (gameStatus===true) checkTie();
    }
    if (gameStatus===true && emptyField===true) {
      AImove();
      gameStatus = checkWin(AIplayer);
    if (gameStatus===false) {
      label.innerHTML = "AI player wins!";
      showResetBtn();
    }
    if (gameStatus===true) checkTie();
    //emptyField=false;
    }

},false);

resetBtn.addEventListener("click", function() {

  label.innerHTML = "Choose X or O";
  resetBtn.style.display = 'none';
  xBtn.style.display = "unset";
  oBtn.style.display = 'unset';
  field1.innerHTML="";
  field2.innerHTML="";
  field3.innerHTML="";
  field4.innerHTML="";
  field5.innerHTML="";
  field6.innerHTML="";
  field7.innerHTML="";
  field8.innerHTML="";
  field9.innerHTML="";
  board = [1,2,3,4,5,6,7,8,9];
},false);











}); //end
