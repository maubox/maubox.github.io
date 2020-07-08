{
  // variables
  const options = [
    {
      id: 0,
      option: 'sheep',
      audio: 'sheep.mp3',
    },
    {
      id: 1,
      option: 'deep',
      audio: 'deep.mp3',
    },
  ];

  // elements
  const oneBtn = document.getElementById('oneBtn');
  const twoBtn = document.getElementById('twoBtn');
  const randNumber = Math.floor(Math.random() * options.length);

  // functions
  const loadAudio = (optionID) => {
    const audio = document.getElementById('audio');
    const audioSource = document.getElementById('audioSource');
    audioSource.src = '/assets/' + options[optionID].audio;
    audio.load();
  };
  const answer = (x) => {
    console.log(x);
  };

  // code

  oneBtn.addEventListener('click', () => {
    answer(0);
  });
  twoBtn.addEventListener('click', () => {
    answer(1);
  });

  loadAudio(randNumber);
}
