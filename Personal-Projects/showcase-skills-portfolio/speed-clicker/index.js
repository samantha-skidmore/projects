// create a click counter variable
// event listener for click buttons
// display the data

let plus = document.getElementById("plus");
let minus = document.getElementById("minus");
let counter = document.getElementById("counter");

let clickCounter = localStorage.getItem("number") || 0;
counter.innerHTML = clickCounter;

plus.onclick = () => {
    clickCounter++;
    localStorage.setItem("number", clickCounter);
    counter.innerHTML = clickCounter;
}

minus.onclick = () => {
    clickCounter--;
    localStorage.setItem("number", clickCounter);
    counter.innerHTML = clickCounter;
}
