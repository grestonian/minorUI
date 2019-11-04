var btn = document.getElementById("button");
btn.onclick = function() {myFunction()};

function myFunction() {

  const main = document.querySelector('.main');
  // const logo = document.querySelector('.logo-alone1');
  // const logo = document.querySelector('.logo-alone1');
  const logo1 = document.querySelector('.logo-alone1');
  const logo2 = document.querySelector('.logo-alone2');
  const logo3 = document.querySelector('.logo-alone3');
  const logo4 = document.querySelector('.logo-alone4');
  const logo5 = document.querySelector('.logo-alone5');
  const line = document.querySelector('.line');
  const motto = document.querySelector('.motto');

  main.classList.toggle('main-tog');
  line.classList.toggle('line-tog');
  motto.classList.toggle('motto-tog');
  // logo.classList.toggle('logo-tog');
  logo1.classList.toggle('logo-tog1');
  logo2.classList.toggle('logo-tog2');
  logo3.classList.toggle('logo-tog3');
  logo4.classList.toggle('logo-tog4');
  logo5.classList.toggle('logo-tog5');
//   line.classList.toggle('line-tog');

  if(btn.innerText === "Begin") {
    btn.innerHTML = "<span>Go Back</span>";
  }
  else
    btn.innerHTML = "<span>Begin</span>";
  

}