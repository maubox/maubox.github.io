var startBtn = document.getElementById('startBtn');
var entry = [];
var map = {}; // You could also use an array
var asking = false;
var paintingID;
var tempEntry = {};
var score = 0;

const startGame = () => {
  console.log('start game');
  document.getElementById('title').innerHTML = 'Cual estoy diciendo?';
  document.getElementById('startCon').innerHTML = '';
  document.getElementById('qui').style.display = 'block';
  gameFrame();
};

const gameFrame = () => {
  setTimeout(() => {
    painter();
    asking = true;
  }, 400);
};

const painter = () => {
  const paintings = leveler;
  const randPaint = paintings[Math.floor(Math.random() * paintings.length)];
  paintingID = randPaint.code;
  const img = randPaint.painting;
  const aud = randPaint.audio;

  const audio = document.getElementById('audio');
  const audioSource = document.getElementById('audioSource');
  audioSource.src = './assets/audio/' + aud;
  audio.load();

  tempEntry = randPaint;
  tempEntry.time = 0;
  document.getElementById('painting').src = 'img';
};
startBtn.addEventListener('click', startGame);
4;

const macho = setInterval(() => {
  if (asking) {
    tempEntry.time++;
  }
  // console.log(tempEntry);
}, 100);

onkeydown = onkeyup = function (e) {
  e = e || event; // to deal with IE
  map[e.keyCode] = e.type == 'keydown';

  if (asking) {
    /* insert conditional here */
    if (map[49]) {
      // Z
      check(0);
    } else if (map[50]) {
      // X
      check(1);
    }
  }
};

document.getElementById('oneBtn').addEventListener('click', () => {
  check(0);
});

document.getElementById('twoBtn').addEventListener('click', () => {
  check(1);
});

document.getElementById('threeBtn').addEventListener('click', () => {
  check(2);
});

const check = (x) => {
  const questions = 20;
  if (paintingID === x) {
    tempEntry.correct = true;
    document.getElementById('painting').src = './assets/images/ui/correct.webp';
  } else {
    tempEntry.correct = false;
    document.getElementById('painting').src =
      './assets/images/ui/incorrect.webp';
  }
  asking = false;
  console.log('answered');
  map = {};

  tempCopy = {};
  tempCopy.correct = tempEntry.correct;
  tempCopy.time = tempEntry.time;
  tempCopy.painting = tempEntry.painting;
  entry.push(tempCopy);

  let list;
  for (var i = 0; i < entry.length; i++) {
    let rice = './assets/images/ui/incorrect.webp';
    if (entry[i].correct) {
      rice = './assets/images/ui/correct.webp';
    }
    list +=
      '<li><img width="50" height="50" src="' +
      entry[i].painting +
      '"/>: <img width="50" height="50" src="' +
      rice +
      '"/>' +
      entry[i].time +
      '</li>';
  }

  document.getElementById('gui').innerHTML = list;

  // console.log(entry);
  if (entry.length < questions) {
    gameFrame();
  } else {
    clearInterval(macho);
    // console.log(entry);
    let totalTime = 0;
    let totalCorrect = 0;
    for (var i = 0; i < questions; i++) {
      totalTime = totalTime + entry[i].time;
      if (entry[i].correct) {
        totalCorrect++;
        score += 1500;
      }
      score -= entry[i].time * 1;
    }
    document.getElementById('time').innerHTML =
      'correct: ' + totalCorrect + '/' + entry.length;
    document.getElementById('correct').innerHTML = 'time: ' + totalTime;
    document.getElementById('score').innerHTML = 'score: ' + score;

    const painting = document.getElementById('painting');
    document.getElementById('shower').style.display = 'block';

    document.getElementById('level').innerHTML = 'level: ' + level;
    const d = new Date();
    const timeScore =
      d.getMonth() + 1 + '-' + d.getDate() + '-' + d.getFullYear();
    document.getElementById('date').innerHTML = d;

    document.getElementById('title').innerHTML = 'Resultados:';
    document.getElementById('qui').style.display = 'none';
    document.getElementById('details').style.display = 'block';
    painting.src = 'broken';
  }
};
