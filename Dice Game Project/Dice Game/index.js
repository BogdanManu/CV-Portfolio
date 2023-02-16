//  Varianta scurta  

var randomNumber1 = Math.floor(Math.random() * 6) + 1;   // 1-6 number
var randomDiceImage = "dice" + randomNumber1 + ".png";   // dice1.png - dice6.png 

var randomImageSource = "/Dicee Challenge - Starting Files/Dicee Challenge - Starting Files/images/" + randomDiceImage;  //images/dice1.png - images/dice6.png;

document.querySelectorAll("img")[0].setAttribute("src", randomImageSource); //changing the source image 
console.log(randomNumber1);


var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomImageSource2 = "/Dicee Challenge - Starting Files/Dicee Challenge - Starting Files/images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);
console.log(randomNumber2);

if(randomNumber1 > randomNumber2) {
      document.querySelector("h1").innerHTML = "🚩Player 1 Wins!"
}
else if(randomNumber1 < randomNumber2) {
   document.querySelector("h1").innerHTML = "Player 2 Wins!🚩"
}
else{
    document.querySelector("h1").innerHTML = "It's a TIE!";
}



//   VARIANTA lunga -  cod repetitiv;

// var randomNumber1 = Math.floor(Math.random() * 6) + 1;
// var randomNumber2 = Math.floor(Math.random() * 6) + 1;

// console.log(randomNumber1);

// function randomDice1(randomNumber1) {

//      if (randomNumber1 === 1){
//         document.querySelector(".img1").setAttribute("src", "/Dicee Challenge - Starting Files/Dicee Challenge - Starting Files/images/dice1.png");
//      }
//      else if(randomNumber1 === 2){
//         document.querySelector(".img1").setAttribute("src", "/Dicee Challenge - Starting Files/Dicee Challenge - Starting Files/images/dice2.png");
//      }
//      else if(randomNumber1 === 3){
//         document.querySelector(".img1").setAttribute("src", "/Dicee Challenge - Starting Files/Dicee Challenge - Starting Files/images/dice3.png");
//      }
//      else if(randomNumber1 === 4){
//         document.querySelector(".img1").setAttribute("src", "/Dicee Challenge - Starting Files/Dicee Challenge - Starting Files/images/dice4.png");
//      }
//      else if(randomNumber1 === 5){
//         document.querySelector(".img1").setAttribute("src", "/Dicee Challenge - Starting Files/Dicee Challenge - Starting Files/images/dice5.png");
//      }
//      else if(randomNumber1 === 6){
//         document.querySelector(".img1").setAttribute("src", "/Dicee Challenge - Starting Files/Dicee Challenge - Starting Files/images/dice6.png");
//      }
//      else{
//         return;
//      }
// }

// randomDice1(randomNumber1);

// console.log(randomNumber2);

// function randomDice2(randomNumber2) {

//    if (randomNumber2 === 1){
//       document.querySelector(".img2").setAttribute("src", "/Dicee Challenge - Starting Files/Dicee Challenge - Starting Files/images/dice1.png");
//    }
//    else if(randomNumber2 === 2){
//       document.querySelector(".img2").setAttribute("src", "/Dicee Challenge - Starting Files/Dicee Challenge - Starting Files/images/dice2.png");
//    }
//    else if(randomNumber2 === 3){
//       document.querySelector(".img2").setAttribute("src", "/Dicee Challenge - Starting Files/Dicee Challenge - Starting Files/images/dice3.png");
//    }
//    else if(randomNumber2 === 4){
//       document.querySelector(".img2").setAttribute("src", "/Dicee Challenge - Starting Files/Dicee Challenge - Starting Files/images/dice4.png");
//    }
//    else if(randomNumber2 === 5){
//       document.querySelector(".img2").setAttribute("src", "/Dicee Challenge - Starting Files/Dicee Challenge - Starting Files/images/dice5.png");
//    }
//    else if(randomNumber2 === 6){
//       document.querySelector(".img2").setAttribute("src", "/Dicee Challenge - Starting Files/Dicee Challenge - Starting Files/images/dice6.png");
//    }
//    else{
//       return;
//    }
// }

// randomDice2(randomNumber2);

// if(randomNumber1 > randomNumber2) {
//       document.querySelector("h1").innerHTML = "Player 1 Wins!"
// }
// else if(randomNumber1 < randomNumber2) {
//    document.querySelector("h1").innerHTML = "Player 2 Wins!"
// }
// else{
//    document.querySelector("h1").innerHTML = "It's a TIE!";
// }
///////////////////////////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////

