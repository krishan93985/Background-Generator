var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.querySelector("body");
var h3 = document.getElementById("h3");

function addColorToBg() {
    body.style.background = "linear-gradient(to right," + color1.value + "," + color2.value + ")";
    h3.textContent = body.style.background;//innerHTML or createTextNode can be used
}
body.onload = addColorToBg(); //addEventListner() is not supported with load event
color1.addEventListener("input", addColorToBg);//obj.oninput is not supported
color2.addEventListener("input", addColorToBg);

