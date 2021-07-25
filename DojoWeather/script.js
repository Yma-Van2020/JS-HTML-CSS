var cookieMsg = document.querySelector(".box5")
function hide(){
    cookieMsg.remove();
}

var high = document.querySelectorAll(".left span")
var low = document.querySelectorAll(".right span")
function convert(element){

    for(let j = 0; j < low.length;j++){
        if(element.value == "°F"){
         low[j].innerText = (low[j].innerText * 9/5) + 32;
         high[j].innerText = (high[j].innerText * 9/5) + 32;
        } else {
         low[j].innerText = (low[j].innerText - 32) * 5/9;
         high[j].innerText = (high[j].innerText - 32) * 5/9;
        }

}}

