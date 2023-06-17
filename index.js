// Write your solution here!
let cats = ["Milo", "Otis", "Garfield"];

function beforeEach() {
    cats.length = 0;
    cats.push('Milo', 'Otis', 'Garfield')
    console.log(cats);
}
beforeEach();


function destructivelyAppendCat(name) {
    let cats = ["Milo", "Otis", "Garfield"];
    cats.push(name);
    
}
destructivelyAppendCat("Ralph");
console.log(cats);


function destructivelyPrependCat(name) {
    let cats = ["Milo", "Otis", "Garfield"];
    cats.unshift(name);
    console.log(cats);
}
destructivelyPrependCat("Bob")

function destructivelyRemoveLastCat() {
    let cats = ["Milo", "Otis", "Garfield"];
    cats.pop();
    console.log(cats);
}
destructivelyRemoveLastCat("Garfield");

function destructivelyRemoveFirstCat() {
    let cats = ["Milo", "Otis", "Garfield"];
    cats.shift();
    console.log(cats);
}
destructivelyRemoveFirstCat("Milo");



function appendCat(name) {
    let cats = ["Milo", "Otis", "Garfield"];
    let newCats = cats.concat(name);
    return newCats;
}
let newCatBroom = appendCat("Broom");
console.log(newCatBroom); // Output: ["Milo", "Otis", "Garfield", "Broom"]


function prependCat(name) {
    let cats = ["Milo", "Otis", "Garfield"];
    let newCats = [name, ...cats];
    return newCats;
}

let newCatName = prependCat("Arnold");
console.log(newCatName); // Output: ["Arnold", "Milo", "Otis", "Garfield"]

function removeLastCat() {
    let cats = ["Milo", "Otis", "Garfield"];
    let newCats = cats.slice(0, -1);
    return newCats;
}
let newCatArray = removeLastCat();
console.log(newCatArray); // Output: ["Milo", "Otis"]

function removeFirstCat() {
    let cats = ["Milo", "Otis", "Garfield"];
    let newCats = cats.slice(1);
    return newCats;
}
let newRemainingCats = removeFirstCat()
console.log(newRemainingCats);