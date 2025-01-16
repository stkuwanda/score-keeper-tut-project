// alert('it\'s working!'); // test script
const p1Button = document.querySelector('#p1Button');
const p2Button = document.getElementById('p2Button');
const p1Score = document.querySelector('#p1Score');
const p2Score = document.querySelector('#p2Score');

let p1ScoreTracker = 0, p2ScoreTracker = 0;

p1Button.addEventListener('click', function() {
  p1Score.innerText = ++p1ScoreTracker;
});