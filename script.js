
// Dynamic Greeting
window.onload = function() {
let greetingElement = document.getElementById("dynamic-greeting");
let greetings = ["Hello, welcome to my world!", "Let's explore technology together!", "Your journey to innovation starts here!"];

setInterval(function() {
greetingElement.innerHTML = greetings[Math.floor(Math.random() * greetings.length)];
}, 3000); // Changes every 3 seconds

// Random Quote Feature
const quotes = [
"World Is Nothing Without Physics!",
// "Innovation distinguishes between a leader and a follower.",
// "Do not wait for the perfect moment; take the moment and make it .",
"Stop Dreaming Set Up Goals!",
// "",
// "Mohit Is A Nigga!",
// "Ekam Is Dumb XD!"
];

let randomQuoteElement = document.getElementById("random-quote");
randomQuoteElement.innerHTML = quotes[Math.floor(Math.random() * quotes.length)];
};

