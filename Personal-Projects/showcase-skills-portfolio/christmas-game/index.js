let rs = require("readline-sync");

// let userInput = "";
// let isAlive = true;
// let length = 0;
var player = "";
let gameOn = true;

while (gameOn) {
    let answer = rs.question("\nHi.  Do you want to play a game? ");
    if (answer === "no") {
        console.log("\nWell, that was a short game -- GOOD-BYE!");
        gameOn == false;
        break;
    }  else {
            var firstName = rs.question("\nWhat is your name? ");
            let player = firstName.toUpperCase();
        
            console.log("\nHi " + player +  "!  \n\nHow Well Do You Know Christmas? ");

            let firstQuestion = rs.question("\n Question #1: \n\nUsing a number, What day is Christmas? ");
            if (firstQuestion === "25") {
                console.log("YES -- HoHoHo -- Merry Christmas!!");
            } else {
                console.log("Nope.  GAME OVER--YOU LOST!");
                gameOn == false;
                break;
            } 
            let questionTree = rs.question("\nWhat is the most commonly used object that people will decorate for Christmas? \n"); 
            if (questionTree.toLowerCase() === "tree") {
                console.log("\nYES -- HoHoHo -- Merry Christmas!!");
            } else {
                console.log("\nNope.  GAME OVER -- YOU LOST!"); 
                gameOn == false;
                break;
            }
            let questionPresent = rs.question("\nWhat does Santa Claus bring to all of the good girls and boys? ");
            if (questionPresent.toLowerCase() === "presents") {
                console.log("\nYES -- HoHoHo -- Merry Christmas!!");
            } else {
                console.log("\nNope.  GAME OVER -- YOU LOST!"); 
                gameOn == false;
                break;
            }
            let questionSantaSays = rs.question("\nWhat does Santa Claus Say? ");
            if (questionSantaSays.toLowerCase() === "hohoho") {
                console.log("\nYES -- HoHoHo -- Merry Christmas!!");
            } else {
                console.log("\nNope.  GAME OVER -- YOU LOST!"); 
                gameOn == false;
                break;
            }
                let questionOrnamentP = rs.question("\nWhat letter of the alphabet should you never put in front of the word 'Ornament'? ");
            if (questionOrnamentP.toLowerCase() === "p") {
                 console.log("\nYES -- HoHoHo -- Merry Christmas!!");
            } else {
                console.log("\nNope.  GAME OVER -- YOU LOST!"); 
                gameOn == false;
                break;
            }
                let questionDecorate = rs.question("\nWhat should you decorate the Christmas Tree with before the ornaments? ");
            if (questionDecorate.toLowerCase() === "lights") {
                console.log("\nYES -- HoHoHo -- Merry Christmas!!");
            } else {
                console.log("\nNope.  GAME OVER -- YOU LOST!"); 
                gameOn == false;
                break;
            }
            let questionReindeer = rs.question("\nWho is the Most Famous Reindeer of All?  (Make sure you spell it correctly ;-) ");
            if (questionReindeer.toLowerCase() === "rudolph") {
                console.log("\nYES -- HoHoHo -- Merry Christmas!!");
            } else {
                console.log("\nNope.  GAME OVER -- YOU LOST!"); 
                gameOn == false;
                break;
            }
            let questionExit = rs.question("\nCongratulations -- YOU WON -- Have a Merry Christmas! \nType 'exit' to end the game  ");
            if (questionExit === "exit") {
            break;
            }
    }
}


