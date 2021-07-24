

var name1 = document.querySelector(".card-body h1")
function changeName(){
   var newName = prompt("please input another name");
   name1.innerText = newName
}

var connectionReqNum = document.querySelector("#num1")
var person1 = document.querySelector(".person1")
function removeUser1(){
  person1.remove();
  connectionReqNum.innerText--;
}

var connectionReqNum = document.querySelector("#num1")
var person2 = document.querySelector(".person2")
function removeUser2(){
  person2.remove();
  connectionReqNum.innerText--;
}

var connectionReqNum = document.querySelector("#num1")
var connectionNum = document.querySelector("#num2")
var person1 = document.querySelector(".person1")
var count1 = 500;
function removeAccep1(){
   person1.remove();
   connectionReqNum.innerText--;
   count1++;
   connectionNum.innerText =  count1 + "+"
}

var connectionReqNum = document.querySelector("#num1")
var connectionNum = document.querySelector("#num2")
var person2 = document.querySelector(".person2")
function removeAccep2(){
   person2.remove();
   connectionReqNum.innerText--;
   count1++;
   console.log(count1)
   connectionNum.innerText =  count1 + "+"
}