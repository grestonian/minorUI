document.getElementById("button").onclick = function() {myFunction()};

function myFunction() {
  const main = document.querySelector('.main');
  const logo = document.querySelector('.logo');
  const line = document.querySelector('.line');
  const motto = document.querySelector('.motto');

  main.classList.toggle('main-tog');
  logo.classList.toggle('logo-tog');
  line.classList.toggle('line-tog');
  motto.classList.toggle('motto-tog');

}