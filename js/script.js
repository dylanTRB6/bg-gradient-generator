var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var randomBtn = document.getElementById("randomBtn");

function updateGradient() {
    body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
    css.textContent = body.style.background + ";";
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

color1.addEventListener("input", updateGradient);
color2.addEventListener("input", updateGradient);
randomBtn.addEventListener("click", function() {
    var randomColor1 = getRandomColor();
    var randomColor2 = getRandomColor();

    // console.log(randomColor1);
    // console.log(randomColor2);
    color1.value = randomColor1;
    color2.value = randomColor2;
    body.style.background = "linear-gradient(to right, " + randomColor1 + ", " + randomColor2 + ")";
});
