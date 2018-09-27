var displayedImage = document.querySelector('.displayed-img');
var thumbBar = document.querySelector('.thumb-bar');
var btn = document.querySelector('button');
var overlay = document.querySelector('.overlay');

for (var i = 1; i <= 5; i++) {
  var newImage  = document.createElement('img');
  var imageName = getImageName(i);

  newImage.setAttribute('src', imageName);
  // newImage.onclick = clickHandler;
  // newImage.onclick = function(idx) { 
  //   return function() { displayedImage.setAttribute('src', getImageName(idx)); }
  // }(i);
  newImage.onclick = setDisplayedImage(i);
  thumbBar.appendChild(newImage);
}

function getImageName(i) {
  return 'images/pic' + i + '.jpg';
}

function setDisplayedImage(i) {
  return function() { displayedImage.setAttribute('src', getImageName(i)); };
}

function clickHandler(e) {
  displayedImage.setAttribute('src', e.target.src);
}

btn.onclick = function() {
  var isDark   = btn.getAttribute('class') == 'dark',
      alpha    = isDark ? 0.5 : 0.0,
      text     = isDark ? 'Lighten' : 'Darken',
      newClass = isDark ? 'light' : 'dark';

  btn.textContent = text;
  overlay.style.backgroundColor = 'rgba(0,0,0,' + alpha + ')';
  btn.setAttribute('class', newClass); 
}