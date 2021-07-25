var cookieMsg = document.querySelector(".box5")
function hide(){
    cookieMsg.remove();
}

var high = document.querySelector(".left span")
var low = document.querySelector(".right span")
function convert(element){
    if(element.value == "°F"){
     high.innerText = (high.innerText * 9/5) + 32;
     low.innerText = (low.innerText * 9/5) + 32;
    } else {
     high.innerText = (high.innerText - 32) * 5/9;
     low.innerText = (low.innerText - 32) * 5/9;
    }
}

