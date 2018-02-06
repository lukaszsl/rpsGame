//new game button
const newGameBtn = document.querySelector('#js-newGameBtnElement');
newGameBtn.addEventListener('click', newGame);

//player selection
const pickRock = document.querySelector('#js-rockBtn'),
			pickPaper = document.querySelector('#js-paperBtn'),
			pickScissors = document.querySelector('#js-scissorsBtn');

pickRock.addEventListener('click', playerPick('rock'));
pickPaper.addEventListener('click', playerPick('paper'));
pickScissors.addEventListener('click', playerPick('scissors'));

//initial values
let player = {
			name: '',
			score: 0
		},
		computer = {
			score: 0
		}

//display game elements
const pickElem = document.querySelector('#js-playerPickElement'),
			resultsElem = document.querySelector('#js-resultsTableElement');

function setGameElements(gameState) {
	switch(gameState) {
		case 'started':
		// display appropriate elements
			newGameBtn.style.display = 'none';
			resultsElem.style.display = 'block';
		break;
		case 'ended':
		// display appropriate elements
		break;
		case 'notStarted':
			resultsElem.style.display = 'none';
		// display appropriate elements
		break;
	}
}

setGameElements('notStarted');

function newGame() {
	player.name = prompt('Please enter your name', 'player name');
	if(player.name) {
		player.score = computer.score = 0;
	}
	setGameElements('started');
}

//player choice
function playerPick(playerPick) {
	//show player pick
}
