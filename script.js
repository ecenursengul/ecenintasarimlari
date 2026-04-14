let deneme = 20;

console.log(deneme);

let x;

console.log(x);

let benim_kedim;

console.log(benim_kedim);

x = 30;

benim_kedim = 50;

const coding = 80;

console.log(coding);

let greeting = "Hello"

let name = "Alice"

let isStudent = true;

let hasJob = false;

let mario = "100";

console.log(mario);

let space = " "

let h = greeting + space + name

console.log (h);

let citys = ["İstanbul", "Paris", "Geneve", "Tbilisi", "İzmir"];
console.log (citys[0]);

let person = {
    firstName: "Ece",
    secondName: "Nur",
    lastName: "ŞENGÜL",
    age: 19,
    birthday: "8 June 2006",
    hobbies: ["Languages", "Travelling", "Pilates", "Folk Dances"],
    adress: {
        street: "Alipaşa St",
        city: "Tekirdağ,Çorlu",
        country: "Turkey"
    }
};

console.log(person.lastName);
console.log(person.adress.city);
console.log(person.hobbies[3]);

for (let i = 0; i < 5; i++){
    console.log(i);
}

for (let i = 0; i < citys.length; i++){
    console.log(citys[i]);
}

let hour = 18 ;
if (hour < 12){
    console.log("Good morning!");
} else {
    console.log("Good afternoon!");
}

let age = 25;
if (age >= 18) {
    if (age < 21){
        console.log("You rae an adult but not yet allowed to drink.");
    } else {
        console.log("You are an adult and allowed to drink.");
         }
    } else {
        console.log("You are a minor.");
    }

    let number = 16;
    if (number <= 18) {
        if (number < 13){
            console.log("You are a child.");
        } else {
            console.log("You are a teenager.");
             }
        } else {
            console.log("You are an adult.");
    }
    
    function e () {
        let y = 20;
        console.log(y);
    }

    e();

    function exampleConst (){
        const z = 30;
        z = 40;
        console.log(z);
    }

    function greet(name) {
        console.log(`Hello, ${name}!`);
    }
    greet('Ece');

    const add = function (a,b) {
        return a + b;
    };
    console.log(add(5,3));

    let basePrice = 50;
    let discount = 0.2;

    let finalPrice = basePrice - (basePrice * discount);
    console.log (finalPrice);

    const multiply = (x,y)=> x * y;
    console.log(multiply (4,6));
    console.log(multiply(8,4));

    let elementById = document.getElementById('myElement');
    let elementByClass = document.getElementsByClassName('myClass');
    let elementByTag = document.getElementsByTagName('div');
    let elementByQuery = document.querySelector('.myClass');

function addItalic() {
    let myParagraph = document.getElementById('myParagraph');
    myParagraph.classList.add('italic');
    
}