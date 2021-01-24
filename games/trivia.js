let loadingNumber = document.getElementById('loadingNumber');
let counter = 0;

function loading() {
    counter = counter + 1;
    loadingNumber.innerHTML = counter + '%';
}
setInterval(function() {
    if (counter < 100) {
        loading();
    }
}, 5)
let second = `<h1>Step 1</h1> <h3> Please choose how many players </h3> <hr> <select id="players"> <option value="1">One player</option> <option value="2">Two players</option> </select> <br> <button class="btn" id="playersBtn" disabled>Next</button>`

let firstBtn = document.getElementById('firstBtn');
firstBtn.addEventListener('click', function() {
    changeContents(second)
    let select = document.getElementById('players');
    let selectResult = select.options[select.selectedIndex].value;

    if (selectResult === '1') {
        let first = true;
    }
})

function changeContents(content) {
    document.getElementById('mainDiv').classList.add('is-not-showing');
    setTimeout(function() {
        document.getElementById('mainDiv').innerHTML = content;
        document.getElementById('mainDiv').classList.remove('is-not-showing');
    }, 1000)
}
let questions = [
    {
        question: "In a website browser address bar, what does “www” stand for?",
        correctAnswer: 'world wide web'
    },
    {
        question: "Which African country was formerly known as Abyssinia?",
        correctAnswer: 'ethiopia'
    },
    {
        question: "Which country consumes the most chocolate per capita?",
        correctAnswer: 'switzerland'
    },
    {
        question: "What was the first toy to be advertised on television?",
        correctAnswer: "mr potato head"
    },
    {
        question: "What is the tallest breed of dog in the world?",
        correctAnswer: "great dane"
    },
     {
        question: "Which Disney film features the song ‘When You Wish Upon a Star’?",
        correctAnswer: "pinocchio"
     }
];
function randomobj(obj) {
    var objkeys = Object.keys(obj)
    return objkeys[Math.floor(Math.random() * objkeys.length)]
}
alert(randomobj(questions));