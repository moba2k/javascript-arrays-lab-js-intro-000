var kittens = ["Milo","Otis","Garfield"]; //define your array here


// Add your functions and code here	// Add your functions and code here - dest append - push
function destructivelyAppendKitten (name) {
  return kittens.push(name);
}

var kittens = ["Milo","Otis","Garfield"]; //define your array here
// Add your functions and code here - prepend to beginn - unshift
name = "Bob";
function destructivelyPrependKitten () {
  kittens.unshift (name);
  
  return kittens
}

var kittens = ["Milo","Otis","Garfield"]; //define your array here

// Add your functions and code here - dest rem last - pop

function destructivelyRemoveLastKitten() {
  kittens.pop();

  return kittens;
}

var kittens = ["Milo","Otis","Garfield"]; //define your array here

// Add your functions and code here - dest rem first - shift

function destructivelyRemoveFirstKitten () {
  kittens.shift();

  return kittens;
}

var kittens = ["Milo","Otis","Garfield"]; //define your array here

// Add your functions and code here - append return no change

function appendKitten (name='Broom') {
  return [...kittens, name];
}

var kittens = ["Milo","Otis","Garfield"]; //define your array here

<<<<<<< HEAD
// Add your functions and code here - prepend return no change - spread

function prependKitten (name) {
  return [name, ...kittens];
=======
// Add your functions and code here - prepend return no change

function prependKitten () {
  return = [name, ...kittens];
>>>>>>> 14b2c82c672123e495e9650657084fd742a280e7
}