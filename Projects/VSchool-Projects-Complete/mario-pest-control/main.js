
var goombaPrice = 5;
var bobombPrice = 7;
var cheepCheepPrice = 11;

var goombaQty = 12;
var bobombQty = 8;
var cheepCheepQty = 5; 

var goombaSubDisplay = document.getElementById("goombaSubtotal");
var bobombSubDisplay = document.getElementById("bobombSubtotal");
var cheepSubDisplay = document.getElementById("cheepSubtotal");
var grandDisplay = document.getElementById("grandTotal");
 
function goomba() {
    return goombaPrice * goombaQty;
}
 
function bobomb() {
    return bobombPrice * bobombQty;
}

function cheep() {
    return cheepCheepPrice * cheepCheepQty;
} 
function grandTotal() {
    return goomba() + bobomb() + cheep();
}

window.onload = function(){
    goombaSubDisplay.innerHTML = "Goomba Subtotal: " + goomba();
    bobombSubDisplay.innerHTML = "Bob-omb Subtotal: " + bobomb();
    cheepSubDisplay.innerHTML = "Cheep Subtotal: " + cheep();
    grandDisplay.innerHTML = "Grand Total: " + grandTotal();

}
 