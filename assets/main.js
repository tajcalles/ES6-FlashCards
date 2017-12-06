const cards = ["src(assets/images/cardOneFront)" : "src(assets/images/cardOneFront)",
"src(assets/images/cardTwoFront)": "src(assets/images/cardTwoBack)"];

// const frontSide = document.getElementById('front');
// const backSide = document.getElementById('back');

function generateQ() {
  let index = Math.floor(Math.random() * cards.length);
  user = cards[index];
}

function shuffleCards() {
  var j, x, i;
  for (i = cards.length; i; i--) {
    j = Math.floor(Math.random() * i);
    x = cards[i - 1];
    cards[i - 1] = cards[j];
    cards[j] = x;
  }
}
function getName (){
  const name = prompt('Welcome to ES6/Webpack Flash Cards! What is your name?');
    if (name === null || name === '') {
      alert('Please put a valid name.')
      getName();
    } else {
      let welcome = document.getElementById('welcome');
      welcome.innerText = "Have fun, " + name + '!';
    }
  }
getName();

$('#flippycard').on('click', function() {
    $backSide.style.backgroundImage = "src('assets/images/flash-card.jpg')";
    $backSide.style.backgroundSize = "600px 950px";
  })

$("#card").flip();

// $(document).ready(function(){
//   $frontSide.style.backgroundImage = "src('assets/images/flash-card.jpg')";
//   $frontSide.style.backgroundSize = "600px 950px";
//  });
