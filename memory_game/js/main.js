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

var flipCard = function(){
	var cardId = Number(this.getAttribute('data-id'));
	console.log("User flipped " + cards[cardId].rank);
	console.log(cards[cardId].cardImage);
	console.log(cards[cardId].suit);
	cardsInPlay.push(cards[cardId].rank);
	this.setAttribute('src', cards[cardId].cardImage);
	checkForMatch();
}

var createBoard = function(){
	for (var i = 0; i < cards.length; i++) {
		var cardElement = document.createElement('img');
		cardElement.setAttribute('src', 'images/back.png');
		cardElement.setAttribute("data-id", i);
		cardElement.addEventListener('click', flipCard);
		document.getElementById('game-board').appendChild(cardElement);
	}
}

createBoard();