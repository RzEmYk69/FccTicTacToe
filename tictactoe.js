document.addEventListener("DOMContentLoaded", function(event) {
var label = document.getElementById("label");
var oBtn = document.getElementById("oBtn");
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
},false);

function AImove() {
  var possibleMoves=[];
  for (var i=0; i<board.length;i++) {
    if (board[i] !== "X" && board[i]!=="O")
      possibleMoves.push(board[i]);
  }
  var howManyPossibleMoves = possibleMoves.length;
  var AIchooses = (Math.floor(Math.random()*(howManyPossibleMoves+1)));
  for (var i=0; i<board.length;i++) {
    if (possibleMoves[AIchooses]===board[i]) {
      var AIfield = "field"+(i+1);
      move(AIfield,AIplayer);
    }

  }
}

function move(field,mark) {
  switch(field) {
  case "field1":  field1.innerHTML = mark;
                  if(board[0] !=="X" || board[0] !=="O") board[0] = mark;
                  break;
  case "field2":  field2.innerHTML = mark;
                  if(board[1] !=="X" || board[1] !=="O") board[1] = mark;
                  break;
  case "field3":  field3.innerHTML = mark;
                  if(board[2] !=="X" || board[2] !=="O") board[2] = mark;
                  break;
  case "field4":  field4.innerHTML = mark;
                  if(board[3] !=="X" || board[3] !=="O") board[3] = mark;
                  break;
  case "field5":  field5.innerHTML = mark;
                  if(board[4] !=="X" || board[4] !=="O")board[4] = mark;
                  break;
  case "field6":  field6.innerHTML = mark;
                  if(board[5] !=="X" || board[5] !=="O")board[5] = mark;
                  break;
  case "field7":  field7.innerHTML = mark;
                  if(board[6] !=="X" || board[6] !=="O")board[6] = mark;
                  break;
  case "field8":  field8.innerHTML = mark;
                  if(board[7] !=="X" || board[7] !=="O")board[7] = mark;
                  break;
  case "field9":  field9.innerHTML = mark;
                  if(board[8] !=="X" || board[8] !=="O")board[8] = mark;
                  break;

  }
}


fields.addEventListener("click", function(a) {
    var field = a.target.id;

    if (gameStatus===true) {
      move(field,player);
      AImove();
    }

  console.log(board);


},false);











}); //end
