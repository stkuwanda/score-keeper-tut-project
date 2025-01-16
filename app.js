// alert('it\'s working!'); // test script
const p1Button = document.querySelector('#p1Button');
const p2Button = document.getElementById('p2Button');
const p1Score = document.querySelector('#p1Score');
const p2Score = document.querySelector('#p2Score');

let p1ScoreTracker = 0,
	p2ScoreTracker = 0,
	winningScore = 5,
	isGameOver = false;

p1Button.addEventListener('click', function () {
	if (!isGameOver)
		if (winningScore !== p1ScoreTracker) {
			p1Score.innerText = ++p1ScoreTracker;

			if (p1ScoreTracker === winningScore) {
				isGameOver = true;
			}
		}
});

p2Button.addEventListener('click', function () {
	if (!isGameOver)
		if (winningScore !== p2ScoreTracker) {
			p2Score.innerText = ++p2ScoreTracker;

			if (p2ScoreTracker === winningScore) {
				isGameOver = true;
			}
		}
});
