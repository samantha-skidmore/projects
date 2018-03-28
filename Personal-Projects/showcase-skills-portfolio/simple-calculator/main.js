var addSubmit = document.getElementById("addSubmit");
var subSubmit = document.getElementById("subSubmit");
var multSubmit = document.getElementById("multSubmit");

var addOutput = document.getElementById("addOutput");
var subOutput = document.getElementById("subOutput");
var multOutput = document.getElementById("multOutput");

function add () {
    var addNum1 = Number(document.getElementById("addNum1").value);
    var addNum2 = Number(document.getElementById("addNum2").value);
    addOutput.innerHTML = addNum1 + addNum2;

}
function subtract () {
    var subNum1 = Number(document.getElementById("subNum1").value);
    var subNum2 = Number(document.getElementById("subNum2").value);
    subOutput.innerHTML = subNum1 - subNum2;

}
function multiply () {
    var multNum1 = Number(document.getElementById("multNum1").value);
    var multNum2 = Number(document.getElementById("multNum2").value);
    multOutput.innerHTML = multNum1 * multNum2;

}

