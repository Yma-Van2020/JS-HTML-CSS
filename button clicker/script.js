
function hide (element) {
  element.remove();
}

function changeText (element) {
  element.value = 'logout'
}

let like = 13
var element = document.querySelector('#first-like')
function addLike () {
  like++
  element.value = like + " likes"
  alert('Ninjia was liked')
}

var element2 = document.querySelector('#second-like')
let like2 = 37
function addLike2 () {
  like2++
  element2.value = like2 + " likes"
  alert('Ninjia was liked')
}
