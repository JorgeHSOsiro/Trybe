function squareNumber(number) {
    let square = number * number;
    return square;
}

function halfOf(number) {
    let half = number/2;
    return half;
}

function percentOf(n1, n2) {
    let percent = (n1/n2)*100;
    return n1 + " is " + percent + " of " + n2; 
}

function areaOfCircle(radius) {
    let area = 3.14 * squareNumber(radius);
    return "A circle with radius " + radius + " is " + area.toFixed(2);
}

function doAll(number) {
    let half = halfOf(number);
    let square = squareNumber(half);
    let area = areaOfCircle(square);
    let percent = percentOf(area, square);
}
let btnSquare = document.querySelector("#square-label");
//let btnSquare = document.querySelector("#square-button");
btnSquare.addEventListener('click', function(){
    let squareIt = document.querySelector("#square-input").value;
    let result = squareNumber(squareIt) ;
    document.querySelector("#solution").innerHTML = result;
});

let btnHalf = document.querySelector("#half-label");
//let btnHalf = document.querySelector("#half-button");
btnHalf.addEventListener('click', function(){
    let halfIt = document.querySelector('#half-input').value;
    let result = halfOf(halfIt); 
    document.querySelector("#solution").innerHTML = result;
});
//let btnPercent = document.querySelector("#percent1-label #percent2-label");
let btnPercent = document.querySelector("#percent-button");
btnPercent.addEventListener('click', function(){ 
    let number1 = document.querySelector("#percent1-input").value;
    let number2 = document.querySelector("#percent2-input").value;
    document.querySelector("#solution").innerHTML = percentOf(number1, number2);
});
let btnArea = document.querySelector("#area-label");
//let btnArea = document.querySelector("#area-button");
btnArea.addEventListener('keyup', function(){
    let radius = document.querySelector("#area-input").value;
    document.querySelector("#solution").innerHTML = areaOfCircle(radius);
});