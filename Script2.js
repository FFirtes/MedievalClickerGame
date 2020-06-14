alert("In version 3.0: \n -Added new style - SHOP! \n -Fixed bug with ENTER! \n -Edit X2 Resources production! \n -Added purchase of Resources! \n -Added link on official Discord!");
//переменные
var resInt = 0
var resInt2 = 0
var resop = 1
var monInt = 0
var monInt2 = 0
var monop = 1
var popInt = 0
var popInt2 = 0
var popop = 1
var domInt = 0
var domInt2 = 1
var domop = 1
var need_upgr = 2
var doubl = 2
var minus = 0.5
var nul = 0
//инфа
function res(){
   resInt2 = resInt + resop
    resInt = resInt2;
    document.getElementById("res").innerHTML =""+ resInt2 +"";
}
function money(){
   monInt2 = monInt + monop
    monInt = monInt2;
    document.getElementById("money").innerHTML =""+ monInt2 +"";
}
function pop(){
   popInt2 = popInt + popop
    popInt = popInt2;
    document.getElementById("pop").innerHTML =""+ popInt2 +"";
}
function Game(){
  alert("WIP and about Game: \n -- \nAbout Game: \n | This is Clicker game | \n This is Game created only with JS, HTML and CSS languages! \n -- \nCreator: \n FFirtes \n -- \nProgrammer: \n FFirtes \n i_hz_cho_i \n -- \nWIP \n -Countries with their bonuses \n -Game Over \n -Saves \n -More upgrades");
}
//магазик
function doubled(){
    if(popInt2 >= need_upgr){
    popInt2 = popInt - need_upgr
    popInt = popInt2 
    resop = doubl
    doubl = doubl+2
    need_upgr = need_upgr*2
    alert(`You upgrade production Resources \n Next lvl upgrade is ${doubl}X`);
    }
    else {
        alert(`${need_upgr} People need to upgrade`)
    }
    document.getElementById("res").innerHTML = resInt2;
    document.getElementById("pop").innerHTML = popInt2;
}
function sell(){
   if(resInt2 >= 50){
       alert("You sell 50 resourses");
       resInt2 = resInt - 50
       resInt = resInt2
       monInt2 = monInt + 10
       monInt = monInt2
   }
   else {
       alert("You need resourses");
   }
   document.getElementById("res").innerHTML = resInt2;
document.getElementById("money").innerHTML = monInt2;
}
function buy(){
   if(monInt2 >= 10){
       alert("You buy 25 Resourses");
       resInt2 = resInt + 25
       resInt = resInt2
       monInt2 = monInt - 10
       monInt = monInt2
   }
   else {
       alert("You need 10 Money for Buy");
   }
   document.getElementById("res").innerHTML = resInt2;
document.getElementById("money").innerHTML = monInt2;
}
function build(){
if(resInt2 >= 100 && monInt2 >= 20){
    resInt2 -= 100
    monInt2 -= 20
    popInt2 += 1
    domInt2 -= 3
    alert("House is build!");
    }
   else {
        alert("You not build a house!") 
    }
    document.getElementById("pop").innerHTML =""+ popInt2 +"";
    document.getElementById("money").innerHTML =""+ monInt2 +"";
    document.getElementById("res").innerHTML =""+ resInt2 +"";
    document.getElementById("dom").innerHTML =""+ domInt2 +"";
}

function Give(){
	if(resInt2 >= 20 && monInt2 >= 20)
    {
    resInt2 -= 20
    monInt2 -= 20
    domInt2 += 1
    alert("Dominion is improved!");
    }
    else {
        alert("You need 20 resourses and 20 money!")
    }
    document.getElementById("dom").innerHTML =""+ domInt2 +"";
    document.getElementById("money").innerHTML =""+ monInt2 +"";
    document.getElementById("res").innerHTML =""+ resInt2 +"";
}
/*
function People(){
  if(domInt2 <= 0){
    alert("You lost! Your Dominion is" + domInt2 + "\n Your score is: \n Resourses: " + resInt2 + " \n Money: " + monInt2 + " \n Population: " + popInt2 + " \n Please restart the game.");
  }
}
*/