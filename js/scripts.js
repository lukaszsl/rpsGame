//new game button
const newGameBtn = document.querySelector('#js-newGameBtn');
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

function newGame() {
	player.name = prompt('Please enter your name', 'player name');
}

//player choice
function playerPick(playerPick) {
	//show player pick
}
