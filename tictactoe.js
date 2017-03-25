var label = document.getElementById("label");
var xBtn = document.getElementById("xBtn");
var oBtn = document.getElementById("oBtn");
var buttons = document.getElementById("buttons");
var fields = document.getElementById("board");
var field1 = document.getElementById("field1");
var field2 = document.getElementById("field2");
var field3 = document.getElementById("field3");

var player;
var board = [1,2,3,4,5,6,7,8,9];
var gameStatus = false;

//var move;
label.innerHTML = "Choose X or O";

xBtn.addEventListener("click", function(){
  player = "X";
  buttons.style.display = 'none';
  label.innerHTML = "Click on a field";
  gameStatus = true;
},false);

oBtn.addEventListener("click", function(){
  player = "O";
  buttons.style.display = 'none';
  label.innerHTML = "Click on a field";
  gameStatus=true;
},false);


fields.addEventListener("click", function(a) {
  var field = a.target.id;

  if (gameStatus===true) {

  switch(field) {
    case "field1":  field1.innerHTML = player;
                    if(board[0] !=="X" || board[0] !=="O") board[0] = player;
                    break;
    case "field2":  field2.innerHTML = player;
                    if(board[1] !=="X" || board[1] !=="O") board[1] = player;
                    break;
    case "field3":  field3.innerHTML = player;
                    if(board[2] !=="X" || board[2] !=="O") board[2] = player;
                    break;
    case "field4":  field4.innerHTML = player;
                    if(board[3] !=="X" || board[3] !=="O") board[3] = player;
                    break;
    case "field5":  field5.innerHTML = player;
                    if(board[4] !=="X" || board[4] !=="O")board[4] = player;
                    break;
    case "field6":  field6.innerHTML = player;
                    if(board[5] !=="X" || board[5] !=="O")board[5] = player;
                    break;
    case "field7":  field7.innerHTML = player;
                    if(board[6] !=="X" || board[6] !=="O")board[6] = player;
                    break;
    case "field8":  field8.innerHTML = player;
                    if(board[7] !=="X" || board[7] !=="O")board[7] = player;
                    break;
    case "field9":  field9.innerHTML = player;
                    if(board[8] !=="X" || board[8] !=="O")board[8] = player;
                    break;
  }
  console.log(board);
  }
},false);
