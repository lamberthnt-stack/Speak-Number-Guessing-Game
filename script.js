const msgEl = document.getElementById('msg');

// Number Generator
function getRandomNumber() {
  return Math.floor(Math.random() * 100) + 1;
}

const randomNum = getRandomNumber();
console.log('Number:', randomNum);

window.SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

let recognition = new window.SpeechRecognition();

// Recognition & Start
recognition.start();

// Speak Event Handler
function onSpeak(event) {
  const msg = event.results[0][0].transcript; 
  console.log(msg);
}

// Results of the Speak
recognition.addEventListener('result', onSpeak);

// User Speaking Info Pt1
function writeMessage(msg) {
  msgEl.innerHTML = `
    <div>You said: </div>
    <span class="box">${msg}</span>
  `;
}

// User Speaking Info Pt2
function writeMessage(msg) {
  const div = document.createElement('div');
  div.textContent = 'You said: ';
  const span = document.createElement('span');
  span.classList.add('box');
  span.textContent = msg;

  msgEl.append(div, span);
}

// Check the Secret Number
function checkNumber(msg) {
  const num = Number(msg);
}

  // See if spoken content is correct number
  if (Number.isNaN(num)) {
    const div = document.createElement('div');
    div.textContent = 'That is not a valid number';
    msgEl.append(div);

    return;
  }

  // Ensure the number is in range
  if (num < 1 || num > 100) {
    const div = document.createElement('div');
    div.textContent = 'Number must be between 1 and 100';
    msgEl.append(div);

    return;
  }

  // Providing Feedback Phase 
  if (num === randomNum) {
    const h2 = document.createElement('h2');
    h2.textContent = `Congrats! You have guessed the number! It was ${num}`;

    const button = document.createElement('button');
    button.classList.add('play-again');
    button.id = 'play-again';
    button.textContent = 'Play Again';
    // Add listener and handler to button
    button.addEventListener('click', () => window.location.reload());

    msgEl.append(h2, button);
  } else if (num > randomNum) {
    const div = document.createElement('div');
    div.textContent = 'GO LOWER';
    msgEl.append(div);
  } else {
    // Is (num < randomNum)
    const div = document.createElement('div');
    div.textContent = 'GO HIGHER';
    msgEl.append(div);
  }

// Check the Secret Number 
function checkNumber(msg) {
  let num = Number(msg);
}

  // If single digit #, then Update it
  if (msg === 'one' || msg === 'won') {
    num = 1;
  } else if (msg === 'two') {
    num = 2;
  } else if (msg === 'three') {
    num = 3;
  } else if (msg === 'four') {
    num = 4;
  } else if (msg === 'five') {
    num = 5;
  } else if (msg === 'six') {
    num = 6;
  } else if (msg === 'seven') {
    num = 7;
  } else if (msg === 'eight') {
    num = 8;
  } else if (msg === 'nine') {
    num = 9;
  }

  // Check to see if said number is valid
  if (Number.isNaN(num)) {
    const div = document.createElement('div');
    div.textContent = 'That is not a valid number';
    msgEl.innerHTML = '';
    msgEl.append(div);
    return;
  }

  // ... everything below is same as before

   const wordToNumber = {
    one: 1,
    won: 1,
    two: 2,
    to: 2,
    too: 2,
    three: 3,
    four: 4,
    for: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    ate: 8,
    nine: 9,
    ten: 10,
  };

  if (wordToNumber[msg]) {
    console.log(`adjusting ${msg} to ${wordToNumber[msg]}`);
    msg = wordToNumber[msg];
  } // Turn into number after fixations

  const num = Number(msg);
  // Check if said number is valid
  // ... remaining code below doesn't change

