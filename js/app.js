function showHome() {
  document.querySelector('#home').style.display = 'block';
  document.querySelector('#about').style.display = 'none';
}

function showAbout() {
  document.querySelector('#home').style.display = 'none';
  document.querySelector('#about').style.display = 'block';
}

showHome();