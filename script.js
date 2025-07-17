var numbers = document.querySelectorAll('.number');
var operands = document.querySelectorAll('.operand');
var currDisplay = document.querySelector('.current-display');
var preDisplay = document.querySelector('.previous-display');
var del = document.querySelector('.del');
var clear = document.querySelector('.clear');
var equal = document.querySelector('.equal');

let operation;

function chooseOperation(operand){
    if(currDisplay.innerHTML == "0") return;
    operation = operand;
    currDisplay.innerHTML += operand;
    preDisplay.innerHTML = currDisplay.innerHTML;
    currDisplay.innerHTML = "0";
}

function compute(){
    let result;
    var num1 = parseFloat(preDisplay.innerHTML);
    var num2 = parseFloat(currDisplay.innerHTML);

    if(isNaN(num1) || isNaN(num2)) return;

    if(operation == "+"){
       result = num1 + num2;
    } else if (operation == "-"){
        result = num1 - num2;
    } else if (operation == "x"){
        result = num1 * num2;
    } else if (operation == "/"){
        result = num1 / num2;
    }

    currDisplay.innerHTML = result;
    preDisplay.innerHTML = "";
}

numbers.forEach(number => {
    number.addEventListener('click', () => {
        if(number.innerHTML != "0" && number.innerHTML != "." && currDisplay.innerHTML == "0") {
            currDisplay.innerHTML = number.innerHTML;
            return;
        }

        if(number.innerHTML == "0" &&  currDisplay.innerHTML == "0") return;

        if(number.innerHTML == "." &&  currDisplay.innerHTML.includes('.')) return;
        
        currDisplay.innerHTML += number.innerHTML;
    })
});

del.addEventListener('click', () => {
    currDisplay.innerHTML = currDisplay.innerHTML.slice(0,-1);
})

clear.addEventListener('click', () => {
    currDisplay.innerHTML = "0";
    preDisplay.innerHTML = "";
})

operands.forEach(operand => {
    operand.addEventListener("click", () => {
         chooseOperation(operand.innerHTML);
    })
});

equal.addEventListener("click", ()=>{
    compute();
})