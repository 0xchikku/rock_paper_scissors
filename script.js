
const computerChoiceDisplay = document.getElementById('computer-choice');
const userChoiceDisplay = document.getElementById('user-choice');
const resultDisplay = document.getElementById('result');
const allPossibleChoicesButton = document.querySelectorAll('.button button');
const computerScore = document.getElementById('computer-score');
const userScore = document.getElementById('user-score');
const allPossibleChoices = [];
let userChoice, result;

const winCombination = {
    'Rock': ['Scissor'],
    'Paper': ['Rock'],
    'Scissors': ['Paper']
}

const score = {
    computer: 0,
    user: 0
}

const capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

allPossibleChoicesButton.forEach((possibleChoice, index) => {
    const choice = {
        id: index + 1,
        possibleChoice: capitalize(possibleChoice.id)
    }
    allPossibleChoices.push(choice);
})

const generateComputerChoice = () => {
    const randomChoice = Math.floor(Math.random() * 3);
    return allPossibleChoices[randomChoice];
}

const determineWinner = (userChoice, computerChoice) => {

    const defeatCombination = winCombination[userChoice];

    if( userChoice === computerChoice){
        result = `Draw`;
    } else if (defeatCombination.includes(computerChoice)) {
        result = `You Won!`;
        userScore.innerHTML = ++score.user;
    } else {
        result = `Computer Won!`
        computerScore.innerHTML = ++score.computer;
    }

    return result;
}

allPossibleChoicesButton.forEach( possibleChoice => {
    possibleChoice.addEventListener('click', (e) => {

        userChoice = capitalize(e.target.id);
        userChoiceDisplay.innerHTML = ` ${userChoice}`;

        const { possibleChoice: computerChoice } = generateComputerChoice();
        computerChoiceDisplay.innerHTML = computerChoice;

        result = determineWinner(userChoice, computerChoice);
        resultDisplay.innerHTML = result; 
    })
})