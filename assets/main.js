const questions = [ "Who was the creator of Javascript?", "True or False. . . Inheritance is a way to have a child class inherit functions from a parent class" ];
const answers = [ "Brendan Eich", "True"];
const frontSide = document.getElementById('front');
const backSide = document.getElementById('back');

function generateQ() {
  let index = Math.floor(Math.random() * questions.length);
  user = questions[index];
}

function getName (){
  const name = prompt('Welcome to ES6/Webpack Flash Cards! What is your name?');
    if (name === null || name === '') {
      alert('Please put a valid name.')
      getName();
    } else {
      let welcome = document.getElementById('welcome');
      welcome.innerText = "Happy studying, " + name + '!';
    }
  }
getName();

$('#flippycard').on('click', function() {
    $backSide.style.backgroundImage = "src('assets/images/flash-card.jpg')";
    $backSide.style.backgroundSize = "600px 950px";
  })

$("#card").flip();

$(document).ready(function(){
  $frontSide.style.backgroundImage = "src('assets/images/flash-card.jpg')";
  $frontSide.style.backgroundSize = "600px 950px";
 });
