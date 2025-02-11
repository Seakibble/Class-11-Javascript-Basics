const upperLimit = 100

let num

let $input = document.getElementById('input')
let $guess = document.getElementById('guess')
let $restart = document.getElementById('restart')
let $output = document.getElementById('output')

let responsesCorrect = [
    'Yup!',
    'ABSOLUTE!',
    'Okai do!'
]

let responsesLow = [
    'Liiiiiittle higher',
    'Pretty small',
    'You can go higher'
]

let responsesHigh = [
    'Too MASSIVE',
    'Compensating much?',
    'You can lower',
]


function Check() {
    $output.classList.remove('incorrect')
    $output.classList.remove('correct')

    if ($input.value == num) {
        Win()
    } else if ($input.value < num) {
        $output.innerText = PickRandom(responsesLow)
        $output.classList.add('incorrect')
    } else {
        $output.innerText = PickRandom(responsesHigh)
        $output.classList.add('incorrect')
    }
}

function Win() {
    $output.innerText = PickRandom(responsesCorrect)
    $output.classList.add('correct')

    $guess.classList.add('hidden')
    $restart.classList.remove('hidden')
}

function PickRandom(array) {
    let index = Math.random() * array.length
    index = Math.floor(index)

    return array[index]
}

function Restart() {
    RollNumber()

    $output.innerText = "Guess a new number!"

    $guess.classList.remove('hidden')
    $restart.classList.add('hidden')
}

function RollNumber() {
    num = Math.random() * upperLimit + 1
    num = Math.floor(num)

    $output.innerText = "Guess a number from 1 to " + upperLimit + "."
}


RollNumber()