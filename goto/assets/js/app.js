var startBtn = document.getElementById('startBtn');
var entry = [];
var map = {}; // You could also use an array
var asking = false;
var paintingID;
var tempEntry = {};
var score = 0;

const startGame = () => {
  console.log('start game');
  document.getElementById('startCon').innerHTML = '';
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

  tempEntry = randPaint;
  tempEntry.time = 0;
  document.getElementById('painting').src = img;
};
startBtn.addEventListener('click', startGame);
4;

const macho = setInterval(() => {
  if (asking) {
    tempEntry.time++;
  }
  console.log(tempEntry);
}, 100);

onkeydown = onkeyup = function (e) {
  e = e || event; // to deal with IE
  map[e.keyCode] = e.type == 'keydown';

  if (asking) {
    /* insert conditional here */
    if (map[90]) {
      // Z
      check(2);
    } else if (map[88]) {
      // X
      check(1);
    } else if (map[67]) {
      // C
      check(3);
    } else if (map[86]) {
      // V
      check(4);
    } else if (map[9]) {
      // tab
      check(5);
    } else if (map[72]) {
      // h
      check(6);
    } else if (map[71]) {
      // G
      check(60);
    } else if (map[18] && map[87]) {
      // alt+w
      check(7);
      console.log('alt+w');
    } else if (map[18] && map[65]) {
      // alt+a
      check(8);
      console.log('alt+a');
    } else if (map[18] && map[83]) {
      // alt+s
      check(9);
      console.log('alt+s');
    } else if (map[18] && map[68]) {
      // alt+d
      check(10);
      console.log('alt+d');
    } else if (map[18] && map[70]) {
      // alt+f
      check(11);
      console.log('alt+f');
    } else if (map[18] && map[67]) {
      // alt+v
      check(12);
      console.log('alt+v');
    } else if (
      map[65] ||
      map[83] ||
      map[68] ||
      map[70] ||
      map[81] ||
      map[87] ||
      map[69] ||
      map[82]
    ) {
      // all misclicks
      check(1000);
      console.log('hiey');
    }
  }
};

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

  console.log(entry);
  if (entry.length < questions) {
    gameFrame();
  } else {
    clearInterval(macho);
    console.log(entry);
    let totalTime = 0;
    let totalCorrect = 0;
    for (var i = 0; i < questions; i++) {
      totalTime = totalTime + entry[i].time;
      if (entry[i].correct) {
        totalCorrect++;
        score += 1000;
      }
      score -= entry[i].time * 20;
    }
    document.getElementById('time').innerHTML =
      'correct: ' + totalCorrect + '/' + entry.length;
    document.getElementById('correct').innerHTML = 'time: ' + totalTime;
    document.getElementById('score').innerHTML = 'score: ' + score;

    const painting = document.getElementById('painting');
    document.getElementById('shower').style.display = 'block';
    if (score <= 14000) {
      painting.src = './assets/images/ui/f.png';
    } else if (score <= 15000) {
      painting.src = './assets/images/ui/d.png';
    } else if (score <= 16000) {
      painting.src = './assets/images/ui/c.png';
    } else if (score < 17000) {
      painting.src = './assets/images/ui/b.png';
    } else if (score >= 17000) {
      painting.src = './assets/images/ui/a.png';
    }
  }
};
