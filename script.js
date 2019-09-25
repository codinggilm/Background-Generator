var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");


function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";
	css.textContent = body.style.background + ";";
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

   // Color Randomiser

var rancol = document.querySelector("button");


function RandomColor1() {
	 a = Math.round(Math.random()*1000000);
    rancol = "#" + a;
    color1.value = rancol;
    body.style.background = "linear-gradient(to right, "+ color1.value + ", "+ color2.value +")"; 
    css.textContent = body.style.background +";"; 
}


function RandomColor2() {
	    a = Math.round(Math.random()*1000000);
    rancol = "#" + a;
    color2.value =rancol;
    body.style.background = "linear-gradient(to right, "+ color1.value + ", "+ color2.value +")"; 
    css.textContent = body.style.background +";";
}


function setRandomGradient() {
  	RandomColor1();
  	RandomColor2();
}



rancol.addEventListener("click", setRandomGradient);