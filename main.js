// Function ----------->

function sum(num1, num2) {
    console.log("Sum =", num1 + num2);
}

sum(10, 20);

// IIFE ----------------->

(function (num1, num2) {
    console.log("Sum using IIFE", num1 - num2);
})(20, 10);

// Call() and Apply() ------>

let animal = {
    name: 'dog',
    eat(a, b) {
        console.log(this.name + " is eating" + " " + a + " " + b);
    }
};
let human = {
    name: 'Ravi',
}
animal.eat(5, 'bones');
animal.eat.call(human, 10, 'chips');
// animal.eat.apply(human,10,'chips');  ==>error
animal.eat.apply(human, [10, 'chips']);

// Bind() ----------------->

let human_eat = animal.eat.bind(human);
human_eat(5, 'Apples');

// Arrow Function ------------>

let ob = {
    name: 'Albert',
    display() {
        console.log('a', this);
        var an_display = () => {
            console.log('b', this);
        }
        an_display();
    }
};
ob.display();

// Higher Order functions -------->

function display() {
    console.log('Hi');
}
setInterval(display, 1000);
clearInterval(1);

//class -------------------------->

class Car {
    constructor(name, year) {
        this.name = name;
        this.year = year;
    }
}

const myCar1 = new Car("Ford", 2014);
const myCar2 = new Car("Audi", 2019);

// Constructor ------------------->

class Car {
    constructor(name, year) {
        this.name = name;
        this.year = year;
    }
    age(x) {
        return x - this.year;
    }
}

const date = new Date();
let year = date.getFullYear();

const myCars = new Car("Ford", 2014);

// Inheritance ------------------->

class Car {
    constructor(brand) {
        this.carname = brand;
    }
    present() {
        return 'I have a ' + this.carname;
    }
}

class Model extends Car {
    constructor(brand, mod) {
        super(brand);
        this.model = mod;
    }
    show() {
        console.log(this.present() + ', it is a ' + this.model);
    }
}

let myCar = new Model("Ford", "Mustang");
myCar.show();

// Exception Handling ---------->

function a(age) {
    if (age < 18) {
        try {
            throw new Error("You are under age");
        }
        catch (error) {
            console.log(error);
        }
        finally {
            console.log("Program is ended !!!");
        }
    } else {
        console.log("You can Vote");
    }
}

a(13);

// DOM ------------------------------>

console.log(document);
console.dir(document);
console.log(window);

// DOM Animation -------------------->

function myMove() {
    let id = null;
    const elem = document.getElementById("animate");
    let pos = 0;
    clearInterval(id);
    id = setInterval(frame, 5);
    function frame() {
        if (pos == 350) {
            clearInterval(id);
        } else {
            pos++;
            elem.style.top = pos + "px";
            elem.style.left = pos + "px";
        }
    }
}

// Closure ---------------------------->

function parent() {
    var x = 10;

    return function child() {
        var y = 10;
        console.log(x + y);

        return function gChild() {
            var z = 10;
            console.log(x + y + z);
        }
    }
}

parent()()();

// Currying ---------------------------->

let mul = (x) => (y) => console.log(x * y);
let mulBy10 = mul(10);

mulBy10(1);
mulBy10(2);
mulBy10(3);
mulBy10(4);
mulBy10(5);
mulBy10(6);
mulBy10(7);
mulBy10(8);
mulBy10(9);
mulBy10(10);

// Promise ------------------------------->

const promise = new Promise((resolve, reject) => {
    if (true) {
        console.log(resolve("It Worked !"));
    } else {
        console.log(reject("It Broked :("));
    }
})

promise.then(result => result + "!");

// Map() ---------------------------------->

let arry = [1, 2, 3, 4];
let newArr = arry.map(item => item * 2);
console.log("New Array =", newArr);

// Filter() ------------------------------->

let fil = newArr.filter(num => num > 6);
console.log("Array after filter", fil);

// Reduce() ------------------------------>

let red = newArr.reduce((acc, num) => acc + num, 5);
console.log(red);

// Color Picker---------------------------->

var noOfSquares = 6;
var arr = [];
var picked;
var squares = document.getElementsByClassName("square");
var targetColor = document.getElementById("targetColor");
var message = document.getElementById("message");
var head = document.querySelector("h2");
var reset = document.getElementById("NewColor");

init();

function init() {
    arr = generateRandomColor(noOfSquares);
    picked = arr[randomPickedColorIndex()];
    console.log("arr[randomPickedColorIndex()]", arr[randomPickedColorIndex()]);
    targetColor.textContent = picked;

    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = arr[i];
        var pickedValue = picked.toString();
        var pickedValueSpaced = pickedValue.replaceAll(',', ', ');
        squares[i].addEventListener("click", function () {
            if (pickedValueSpaced === this.style.backgroundColor) {
                message.textContent = "Correct";
                message.style.color = "green";
                changeColor(this.style.backgroundColor);
                reset.textContent = "Play Again ?";
            } else {
                message.textContent = "Try Again";
                message.style.color = "red";
                this.style.backgroundColor = "#fff";
            }
        });
    }
}

reset.addEventListener("click", resetIn);

function randomPickedColorIndex() {
    console.log("Math.floor(Math.random()*arr.length)", Math.floor(Math.random() * arr.length));
    return Math.floor(Math.random() * arr.length);
}

function generateRandomColor(limit) {
    var color = [];
    for (var i = 0; i < limit; i++) {
        color.push(rgbGenerator());
    }
    return color;
}

function rgbGenerator() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);

    return "rgb(" + r + "," + g + "," + b + ")";
}

function changeColor(color) {
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = color;
    }
    head.style.backgroundColor = color;
}

function resetIn() {
    arr = generateRandomColor(noOfSquares);
    picked = arr[randomPickedColorIndex()];
    targetColor.textContent = picked;
    message.textContent = "";
    head.style.backgroundColor = "steelblue";

    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = arr[i];
    }
}
