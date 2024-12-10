function hideElementById(elementId){
    const element = document.getElementById(elementId);

    element.classList.add('hidden');
}

function showElementById(elementId){
    const element = document.getElementById(elementId);

    element.classList.remove('hidden');
}

function setBackgroundColorById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('bg-orange-400')
}

function removeBackgroundColorById(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('bg-orange-400');
}

function getRandomAlphabet(){
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
    const alphabets = alphabetString.split('');
    // console.log(alphabets)

    const randomNum = Math.random() * 25;
    const index = Math.round(randomNum);

    const alphabet = alphabets[index]
    // console.log(index, alphabet)
    return alphabet;
}