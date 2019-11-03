document.getElementById("button").onclick = function() {myFunction()};

function myFunction() {
  const main = document.querySelector('.main');
  const logo = document.querySelector('.logo');
  const line = document.querySelector('.line');

  main.classList.toggle('main-tog');
  logo.classList.toggle('logo-tog');
  line.classList.toggle('line-tog');

}