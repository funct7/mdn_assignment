let media    = document.querySelector('video'),
    controls = document.querySelector('.controls');

let play = document.querySelector('.play'),
    stop = document.querySelector('.stop'),
    rwd  = document.querySelector('.rwd'),
    fwd  = document.querySelector('.fwd');

let timerWrapper = document.querySelector('.timer'),
    timer        = document.querySelector('.timer span'),
    timerBar     = document.querySelector('.timer div');

media.removeAttribute('controls');
controls.style.visibility = 'visible';

play.addEventListener('click', playPauseMedia);

function playPauseMedia() {
  if (media.paused) {
    play.setAttribute('data-icon', 'u');
    media.play();
  } else {
    play.setAttribute('data-icon', 'P');
    media.pause();
  }
}

stop.addEventListener('click', stopMedia);
media.addEventListener('ended', stopMedia);

function stopMedia() {
  media.pause();
  media.currentTime = 0;
  play.setAttribute('data-icon', 'P');

  rwd.classList.remove('active');
  fwd.classList.remove('active');
  clearInterval(intervalRwd);
  clearInterval(intervalFwd);
}

rwd.addEventListener('click', mediaBackward);
fwd.addEventListener('click', mediaForward);

let intervalFwd, 
    intervalRwd;

function mediaBackward() {
  clearInterval(intervalFwd);
  fwd.classList.remove('active');

  if (rwd.classList.contains('active')) {
    rwd.classList.remove('active');
    clearInterval(intervalRwd);
    media.play();
  } else {
    rwd.classList.add('active');
    media.pause();
    intervalRwd = setInterval(windBackward, 200);
  }
}

function mediaForward() {
  clearInterval(intervalRwd);
  rwd.classList.remove('active');

  if (rwd.classList.contains('active')) {
    fwd.classList.remove('active');
    clearInterval(intervalFwd);
    media.play();
  } else {
    fwd.classList.add('active');
    media.pause();
    intervalFwd = setInterval(windForward, 200);
  }
}

function windBackward() {
  if (media.currentTime <= 3) {
    stopMedia();
  } else {
    media.currentTime -= 3;
  }
}

function windForward() {
  if (media.currentTime >= media.duration - 3) {
    stopMedia();
  } else {
    media.currentTime += 3;
  }
}

media.addEventListener('timeupdate', setTime);

function setTime() {
  let min = Math.floor(media.currentTime / 60),
      sec = Math.floor(media.currentTime - min * 60);
    
  let minVal, 
      secVal;

  if (min < 10) {
    minVal = `0${min}`;
  } else {
    minVal = `${min}`;
  }

  if (sec < 10) {
    secVal = `0${sec}`;
  } else {
    secVal = `${sec}`;
  }

  timer.textContent = `${minVal}:${secVal}`

  let barLen = timerWrapper.clientWidth * (media.currentTime / media.duration);
  timerBar.style.width = `${barLen}px`;
}