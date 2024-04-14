import React, { useState } from 'react';

function Main() {
  const [secretNumber, setSecretNumber] = useState(Math.trunc(Math.random()*20) + 1);
  const [score, setScore] = useState(20);
  const [message, setMessage] = useState('Start guessing...');

  const handleAgainClick = () => {
    setScore(20);
    setSecretNumber(Math.trunc(Math.random()*20) + 1);
    setMessage('Start guessing...');
    document.querySelector('body').style.backgroundColor="#222";
    document.querySelector('.number').textContent="?";
    document.querySelector('.guess').value='';
    document.querySelector('body').style.background = 'linear-gradient(to top left, #3c3c3c 0%, #101010 100%)';

  };



  const handleCheckClick = () => {
    // Handle checking the guess here
    const guess = Number(document.querySelector('.guess').value);

    if (!guess) {
      setMessage('⛔ No number !');
    } else if (guess === secretNumber) {
      if (score > 0) {
        let highScore = score;
        setMessage('🥳 Correct Number !');
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('.highscore').textContent = highScore;
        // document.querySelector('body').style.backgroundImage='#60b347';
        document.querySelector('body').style.background = 'linear-gradient(to top left, #28b487, #7dd56f)';
      } else {
        setMessage('😭 You lost the game, try again !');
      }
    } else {
      if (score > 0) {
        setMessage(guess > secretNumber ? '📈 Too high !!' : '📉 Too low !!');
        setScore((prevScore) => prevScore - 1);
      } else {
        setMessage('😭 You lost the game, try again !');
      }
    }
  };

  return (
    <main>
      <section className="left">
        <input type="number" className="guess" />
        <button className="btn check" onClick={handleCheckClick}>Check!</button>
      </section>
      <section className="right">
        <p className="message">{message}</p>
        <p className="label-score">💯 Score: <span className="score">{score}</span></p>
        <p className="label-highscore">
          🥇 Highscore: <span className="highscore">0</span>
        </p>
        <button className="btn again" onClick={handleAgainClick}>Again!</button>
      </section>
    </main>
  );
}

export default Main;
