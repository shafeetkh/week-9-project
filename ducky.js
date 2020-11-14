window.onload = function () {
  const body = document.body;

  console.log(body);

  function createDuck(duck) {

    duck = document.createElement('div');
    duck.classList.add('duck');
    body.append(duck);

    setInterval(function () {
      duck.classList.toggle('flap');
    }, 250);

    function randomPosition(duck) {
      let randomHeight = Math.floor(Math.random() * window.innerHeight);
      let randomWidth = Math.floor(Math.random() * window.innerWidth);

      duck.style.left = `${randomWidth}px`;
      duck.style.top = `${randomHeight}px`;
    }

    function moveDuck(duck) {
      duck.style.left = `${Math.random() * window.innerWidth}px`;
      duck.style.top = `${Math.random() * window.innerHeight}px`;
    }

    setInterval(function () {
      let rand = Math.floor(Math.random() * 100);
      if (rand < 50) {
        duck.style.transform = 'scale(-1,1)';
        moveDuck(duck);
      } else {
        duck.style.transform = 'scale(1,1)';
        moveDuck(duck);
      }
    }, 1000);

    randomPosition(duck);

    duck.addEventListener('click', () => {
      duck.classList.add('shot');
      duck.classList.add('noEvents');

      const checkForWinner = () => {
        let allDucks = document.querySelectorAll('.duck');
        console.log(allDucks.length);
        if (allDucks.length === 1) {
          setTimeout(() => {
            alert('Boom! That was the last one. You win!');
          }, 500);

        }
      };
      checkForWinner();

      setTimeout(() => {
        duck.remove();
      }, 300);


    });

    return duck;
  }

  for (let duck = 0; duck < 5; duck++) {
    createDuck();
  }

  // 14. BONUS: The ducks are moving pretty erratically, can you think
  //     of a way to adjust the ducks speed based on how far needs to move?

  // 15. BONUS: Add the "left" and "right" class to the duck based on the
  //     direction the duck is flying and change the way the duck is facing

  // Done, you have accomplish another level of skill
};


