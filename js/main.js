var btn = document.getElementById("button");
btn.onclick = function() {myFunction()};

function myFunction() {

  const main = document.querySelector('.main');
  const logo = document.querySelector('.logo');
  const line = document.querySelector('.line');
  const motto = document.querySelector('.motto');
  const chtbt = document.querySelector('.chatbox');

  main.classList.toggle('main-tog');
  line.classList.toggle('line-tog');
  motto.classList.toggle('motto-tog');
  logo.classList.toggle('logo-tog');
  chtbt.classList.toggle('chatbot-tog')
  btn.classList.toggle('button-tog')

  if(btn.innerText === "Begin") {
    btn.innerHTML = "<span>Go Back</span>";
  }
  else
    btn.innerHTML = "<span>Begin</span>";
  

}