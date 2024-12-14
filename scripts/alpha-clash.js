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
        if(playerPressed === 'Escape'){
            gameOver();
        }

        if(playerPressed === 'Enter'){
            play();
        }
        const currentAlphabetElement = document.getElementById('current-alphabet');
        const currentAlphabet = currentAlphabetElement.innerText;
        const expectedAlphabet = currentAlphabet.toLowerCase();
        console.log(playerPressed, expectedAlphabet)

        if (playerPressed === expectedAlphabet) {
            const currentScore = getTextElementValueById('current-score');
            const updatedScore = currentScore + 1;
            setTextElementValueById('current-score', updatedScore);

            /* const currentScoreElement = document.getElementById('current-score');
            const currentScoreText = currentScoreElement.innerText;
            const currentScore = parseInt(currentScoreText);

            const newScore = currentScore + 1;

            currentScoreElement.innerText = newScore; */
            removeBackgroundColorById(expectedAlphabet);
            continueGame();
        } else {
            console.log('You lost your life');

            const currentLife = getTextElementValueById('current-life');
            const updatedLife = currentLife - 1;
            setTextElementValueById('current-life', updatedLife);

            if (updatedLife === 0) {
                gameOver();
            }

            /* const currentLifeElement = document.getElementById('current-life');
            const currentLifeText = currentLifeElement.innerText;
            const currentLife = parseInt(currentLifeText);

            const newLife = currentLife - 1;

            currentLifeElement.innerText = newLife; */
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
        hideElementById('final-score')
        showElementById('play-ground');

        // reset score and life
        setTextElementValueById('current-life', 5);
        setTextElementValueById('current-score', 0);

        continueGame();
    }

    function gameOver(){
        hideElementById('play-ground');
        showElementById('final-score');

        const lastScore = getTextElementValueById('current-score');
        setTextElementValueById('last-score', lastScore);

        const currentAlphabet = getElementTextById('current-alphabet');
        removeBackgroundColorById(currentAlphabet);
    }