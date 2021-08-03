function text(){
  var welcomeButton = document.getElementById("welcome-button")
  var welcome = document.getElementById("welcome")
  welcome.innerHTML = "welcome"
  welcomeButton.style.display="none"
}

function bigImg(x){
 x.style.width = "64px";
}

function bigImg(x) {
  x.style.width = "200px";
  x.style.height = "100"
}
function normalImg(x) {
  x.style.width = "100px";
}

document.getElementById("myBtn").addEventListener("click", function() {
  alert("Disclaimer I'm in no way a pro at this lol");
});