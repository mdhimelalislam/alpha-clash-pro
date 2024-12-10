/* function play(){
    const homeSection = document.getElementById('home-screen')
    // console.log(homeSection.classList)
    homeSection.classList.add('hidden')
    
    // show playground
    const playGround = document.getElementById('play-ground');
    playGround.classList.remove('hidden')
} */
    function handleKeyboardButtonPress(event){
        const playerPressed = event.key;
        console.log('player pressed', playerPressed);

        const currentAlphabetElement = document.getElementById('current-alphabet');
        const currentAlphabet = currentAlphabetElement.innerText;
        const expectedAlphabet = currentAlphabet.toLowerCase();
        console.log(playerPressed, expectedAlphabet)

        if (playerPressed === expectedAlphabet) {
            console.log('You get a point');

            const currentScoreElement = document.getElementById('current-score');
            const currentScoreText = currentScoreElement.innerText;
            const currentScore = parseInt(currentScoreText);

            const newScore = currentScore + 1;

            currentScoreElement.innerText = newScore;
            removeBackgroundColorById(expectedAlphabet);
            continueGame();
        } else {
            console.log('You lost your life');

            const currentLifeElement = document.getElementById('current-life');
            const currentLifeText = currentLifeElement.innerText;
            const currentLife = parseInt(currentLifeText);

            const newLife = currentLife - 1;

            currentLifeElement.innerText = newLife;
        }
    
    }

    
    document.addEventListener('keyup', handleKeyboardButtonPress);


    


    function continueGame(){
        const alphabet = getRandomAlphabet();
        console.log('Your Alphabet', alphabet);

        const currentAlphabetElement = document.getElementById('current-alphabet');
        currentAlphabetElement.innerText = alphabet;

        setBackgroundColorById(alphabet);
    }

    function play(){
        hideElementById('home-screen');
        showElementById('play-ground');
        continueGame();
    }