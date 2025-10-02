const msgEl = document.getElementById('msg');

//Random Number Generator
function getRandomNumber() {
  return Math.floor(Math.random() * 100) + 1;
  }

const randomNum = getRandomNumber();
console.log(randomNum);

window.SpeechRecognition = 
  window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new window.SpeechRecognition();

//Recognition Start and Game
recognition.start();

// Get user speech 
function onSpeak(event) {
  const msg = event.results[0][0].transcript;
  writeMessage(msg);
  checkNumber(msg);
}

// Speech event listener and handler 
recognition.addEventListener('result', onSpeak);

// In the DOM, is what user speaks 
function writeMessage(msg) {
  const div = document.createElement('div');
  div.textContent = 'You said: ';
  const span = document.createElement('span');
  span.classList.add('box');
  span.textContent = msg;
  msgEl.append(div, span);
}

// Message checker for secret number
function checkNumber(msg) {
  const num = Number(msg); // msg = "hello world"
  // Edge cases 
  if (msg === 'one') {
    console.log('adjusting one to 1');
    msg = 1; 
  } else if (msg === 'two') {
    console.log('adjusting two to 2');
    msg = 2;
  }

  // Check spoken number is valid
  if (Number.isNaN(num)) {
    const div = document.createElement('div');
    div.textContent = 'That is not a valid number';
    msgEl.innerHTML = '';
    msgEl.append(div); 
    return;
  }

  // Ensure number is in range
  if (num < 1 || num > 100) {
    const div = document.createElement('div');
    div.textContent = 'Number must be between 1 and 100';
    msgEl.innerHTML = '';
    msgEl.append(div);
    return;
  }

  // Number checking and providing Feedback
  if (num === randomNum) {
    const h2 = document.createElement('h2');
    h2.textContent = `Congrats! You have guessed the number! It was ${num}` 
    
    const button = document.createElement('button');
    button.classList.add('play-again');
    button.id = 'play-again';
    button.textContent = 'Play Again';
    // Adding my listener and handler to the button
    button.addEventListener('click', () => window.location.reload());

    // InnerHTML of msgEl clear out
    msgEl.innerHTML = '';
    msgEl.append(h2, button);
  } else if (num > randomNum) {
    const div = document.createElement('div');
    div.textContent = 'GO LOWER';

    msgEl.innerHTML = '';
    msgEl.append(div);
  } else { 
    // if (num < randomNum)
    const div = document.createElement('div');
    div.textContent = 'GO HIGHER';

    msgEl.innerHTML = '';
    msgEl.append(div);
  }
}

// End speech recognition service, start up again
recognition.addEventListener('end', () => recognition.start());

// Listener and Handler button adding 
