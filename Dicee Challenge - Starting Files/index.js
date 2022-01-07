var randomNumber1 = Math.floor(Math.random() * 6) + 1;// random number from 1-6 

var randomImage = "images/dice" + randomNumber1 + ".png";//random image according to randomNumber1
var image1 = document.querySelectorAll("img")[0];//selecting first image
image1.setAttribute("src", randomImage); // image 1 attributes changed

//------------------------------------------------------------------------------------------------------------

var randomNumber2 = Math.floor(Math.random() * 6) + 1;// random number from 1-6 

var randomImage1 = "images/dice" + randomNumber2 + ".png";//random image according to randomNumber1
var image2 = document.querySelectorAll("img")[1];//selecting first image
image2.setAttribute("src", randomImage1); // image 1 attributes changed

// changing title
if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "🚩 Player 1 wins!";
}
else if(randomNumber2 > randomNumber1){
    document.querySelector("h1").innerHTML = "Player 2 wins! 🚩";
}
else{
    document.querySelector("h1").innerHTML = "This is a tie! 🪢";
}