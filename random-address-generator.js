// Create address "component bank"
var streetNumber = ["420", "1445", "1101", "1739"];
var streetName = ["Ellen St NW", "Juniper St NE", "Monroe Dr", "Page Pl"];
var cityName = ["Athens", "Atlanta", "Marietta", "Roswell"];
var stateAbbr = ["GA", "FL", "SC", "CA"];
var zipCode = ["30318", '30309', "30076", "90210"];

// Returns a random integer between min (included) and max (included)
// Using Math.round() will give you a non-uniform distribution!
// From https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Randomly select a component
function randomComponent() {
    var x = getRandomIntInclusive(0, 3);
    return x;
}

// Assemble random components into an address
var randomAddress = [streetNumber[randomComponent()], streetName[randomComponent()] + ",", cityName[randomComponent()], stateAbbr[randomComponent()] + ",", zipCode[randomComponent()]];

// Print the address array joined with spaces
console.log(randomAddress.join(" "));