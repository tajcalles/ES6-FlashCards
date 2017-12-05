function getName (){
  const name = prompt('Welcome to ES6/Webpack Flash Cards! What is your name?');
    if (name === null || name === '') {
      alert('Please put a valid name.')
      getName();
    } else {
      let welcome = document.getElementById('welcome');
      welcome.innerText = "Good luck, " + name + '!';
    }
  }
getName();
