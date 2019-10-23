/*
var cardOne = "Queen";
var cardTwo = "Queen";
var cardThree = "King";
var cardFour = "King";


console.log("User Flipped " + cardOne);
console.log("User Flipped " + cardThree);
*/
var cards = [
{
	rank: "queen",
	suit: "hearts",
	cardImage: "images/queen-of-hearts.png"
},
{
	rank: "queen",
	suit: "diamonds",
	cardImage: "images/queen-of-diamonds.png"
},
{
	rank: "king",
	suit: "hearts",
	cardImage: "images/king-of-hearts.png"
},
{
	rank: "king",
	suit: "diamonds",
	cardImage: "images/king-of-diamonds.png"
}
];
var cardsInPlay = [];
function checkForMatch() {
	if (cardsInPlay.length === 2) {
		if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("You found a match!");
		}
		else {
		alert("Sorry, try again.");
		}
	}
}
function flipCard(cardID) {
	console.log("User flipped " + cards[cardID].rank + ".");
	cardsInPlay.push(cards[cardID].rank);
	checkForMatch();
	console.log(cards[cardID].cardImage);
	console.log(cards[cardID].suit);
}
flipCard(0);
flipCard(2);

