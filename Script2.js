alert("In version 4.0:\n -Delete Resources, but added Stone, Wood, Food! \n -Added Points of Research! \n -Edit Shop!")
var stoneInt2 = 0
var stoneInt = 0
var stoneop = 1
var woodInt = 0
var woodInt2 = 0
var woodop = 1
var foodInt = 0
var foodInt2 = 0
var foodop = 1
var monInt = 0
var monInt2 = 0
var monop = 1
var popInt = 0
var popInt2 = 0
var popop = 1
var domInt = 0
var domInt2 = 1
var domop = 1
var resInt = 0
var resInt2 = 0
var resop = 1
var need_upgr = 2
var doubl = 2
//инфа
function stone() {
  stoneInt2 = stoneInt + stoneop
  stoneInt = stoneInt2;
  document.getElementById("stone").innerHTML = ""+ stoneInt2 +"";
}
function wood() {
  woodInt2 = woodInt + woodop
  woodInt = woodInt2;
  document.getElementById("wood").innerHTML = ""+ woodInt2 +"";
}
function food() {
  foodInt2 = foodInt + foodop
  foodInt = foodInt2;
  document.getElementById("food").innerHTML = ""+ foodInt2 +"";
}
function Game() {
  alert("WIP and about Game:\n -- \nAbout Game: \n | This is Clicker game | \n This is Game created only with JS, HTML and CSS languages! \n -- \nCreator: \n FFirtes \n -- \nProgrammer: \n FFirtes \n i_hz_cho_i \n The Slaylord \n -- \nWIP \n -Countries with their bonuses \n -Game Over \n -Saves \n -More upgrades");
}
//магаз
function SellStone() {
  if (stoneInt2 >= 20) {
    stoneInt2 = stoneInt - 20
    stoneInt = stoneInt2
    monInt2 = monInt + 1
    monInt = monInt2
    alert("You sell 20 Stone for 1 Money!")
  } else {
    alert("You need 20 Stone for sell!")
  }
  document.getElementById("stone").innerHTML = "" + stoneInt2 + "";
  document.getElementById("money").innerHTML = "" + monInt2 + "";
}
function SellWood() {
  if (woodInt2 >= 30) {
    woodInt2 = woodInt - 30
    woodInt = woodInt2
    monInt2 = monInt + 2
    monInt = monInt2
    alert("You sell 30 Wood for 2 Money!")
  } else {
    alert("You need 30 Wood for sell!")
  }
  document.getElementById("wood").innerHTML = "" + woodInt2 + "";
  document.getElementById("money").innerHTML = "" + monInt2 + "";
}
function SellFood() {
  if (foodInt2 >= 50) {
    foodInt2 = foodInt - 50
    foodInt = foodInt2
    monInt2 = monInt + 5
    monInt = monInt2
    alert("You sell 50 Food for 5 Money!")
  } else {
    alert("You need 50 Food for sell!")
  }
  document.getElementById("food").innerHTML = "" + foodInt2 + "";
  document.getElementById("money").innerHTML = "" + monInt2 + "";
}
function build() {
  if (stoneInt2 >= 30 && woodInt2 >= 20 && foodInt2 >= 75) {
    stoneInt2 = stoneInt - 30
    stoneInt = stoneInt2
    woodInt2 = woodInt - 20
    woodInt = woodInt2
    foodInt2 = foodInt - 75
    foodInt = foodInt2
    popInt2 = popInt + 1
    popInt = popInt2
    domInt2 = domInt - 2
    domInt = domInt2
    alert("You built a house!")
  } else {
    alert("You need 30 Stone, 20 Wood, 75 Food!")
  }
  document.getElementById("stone").innerHTML = "" + stoneInt2 + "";
  document.getElementById("wood").innerHTML = "" + woodInt2 + "";
  document.getElementById("food").innerHTML = "" + foodInt2 + "";
  document.getElementById("pop").innerHTML = "" + popInt2 + "";
  document.getElementById("dom").innerHTML = "" + domInt2 + "";
}
function Give() {
  if (foodInt2 >= 50 && monInt2 >= 20) {
    foodInt2 = foodInt - 50
    foodInt = foodInt2
    monInt2 = monInt - 20
    monInt = monInt2
    domInt2 = domInt + 5
    domInt = domInt2
    alert("You improve the Dominion!")
  } else {
    alert("You need 50 Food, 20 Meney!")
  }
  document.getElementById("food").innerHTML = "" + foodInt2 + "";
  document.getElementById("money").innerHTML = "" + monInt2 + "";
  document.getElementById("dom").innerHTML = "" + domInt2 + "";
}
function Points() {
	if(foodInt2 >= 100 && woodInt2 >= 40 && stoneInt2 >= 10){
		foodInt2 = foodInt - 100
		foodInt = foodInt2
		woodInt2 = woodInt - 40
		woodInt = woodInt2
		stoneInt2 = stoneInt - 10
		resInt2 = resInt + 3
       alert("You Research the world!");
	}
     else{
		 alert("You need 100 Food, 40 Wood, 10 Stone for Research the world!")
	 }
	 document.getElementById("stone").innerHTML = "" + stoneInt2 + "";
  document.getElementById("wood").innerHTML = "" + woodInt2 + "";
  document.getElementById("food").innerHTML = "" + foodInt2 + "";
  document.getElementById("point").innerHTML = "" + resInt2 + "";
}