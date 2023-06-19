// Write your solution here!
let cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
    let newCat = (cats.push(name))
    return newCat
}
// destructivelyAppendCat("Ralph");


function destructivelyPrependCat(name) {
    let newCat = (cats.unshift(name));
    return newCat;
}
// destructivelyPrependCat("Bob")

function destructivelyRemoveLastCat(name) {
    let newCat = (cats.pop(name));
    return newCat
}
// destructivelyRemoveLastCat("Garfield");

function destructivelyRemoveFirstCat(name) {
   let newCat = (cats.shift(name));
    return newCat;
}
// destructivelyRemoveFirstCat("Milo");

function appendCat(name) {
    let cats = ["Milo", "Otis", "Garfield"];
    let newCats = cats.concat(name);
    return newCats;
}
let newCatBroom = appendCat("Broom");
console.log(newCatBroom); // Output: ["Milo", "Otis", "Garfield", "Broom"]


function prependCat(name) {
    let newCats = [name, ...cats];
    return newCats;
}

let newCatName = prependCat("Arnold");
console.log(newCatName); // Output: ["Arnold", "Milo", "Otis", "Garfield"]

function removeLastCat() {
    let newCats = cats.slice(0, -1);
    return newCats;
}
let newCatArray = removeLastCat();
console.log(newCatArray); // Output: ["Milo", "Otis"]

function removeFirstCat() {
    let newCats = cats.slice(1);
    return newCats;
}
let newRemainingCats = removeFirstCat()
console.log(newRemainingCats);