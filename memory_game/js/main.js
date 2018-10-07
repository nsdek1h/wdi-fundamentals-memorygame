var cards = [
	{
		rank: 'queen',
		cardImage: 'images/queen-of-hearts.png',
		suit: 'hearts'
	},
	{
		rank: 'queen',
		cardImage: 'images/queen-of-diamonds.png',
		suit: 'diamonds'

	},
	{
		rank: 'king',
		cardImage: 'images/king-of-hearts.png',
		suit: 'hearts'
	},
	{
		rank: 'king',
		cardImage: 'images/king-of-diamonds.png',
		suit: 'diamonds'
	}
];
var cardsInPlay = [];

var checkForMatch = function(){
	if (cardsInPlay.length === 2){
		if (cardsInPlay[0] === cardsInPlay[1]){
			alert("You found a match!");
		} else {
			alert("Sorry, try again.");
		}
	}
}

var flipCard = function(cardId){
	var cardOne;
	var cardTwo;

	console.log("User flipped " + cards[cardId].rank);
	console.log(cards[cardId].cardImage);
	console.log(cards[cardId].suit);
	cardsInPlay.push(cards[cardId].rank);
	checkForMatch();
}

flipCard(0);
flipCard(2);