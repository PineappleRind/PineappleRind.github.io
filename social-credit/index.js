var questions = [
    {
        name: "what happened on May 20, 1989 in Tianenmen Square?",
        answers: [
            {
                name: "nothing",
                score: true
            }, {
                name: "something",
                score: false
            }
        ]
    }, {
        name: "what is Taiwan?",
        answers: [
            {
                name: "an independent country",
                score: false
            }, {
                name: "what?",
                score: true
            }, {
                name: "a territory of china",
                score: true
            }
        ]
    }, {
        name: "when can you play video games?",
        answers: [
            {
                name: "anytime you want",
                score: false
            }, {
                name: "only 5 hours a day",
                score: false
            }, {
                name: "only 1 hour a day",
                score: true
            }
        ]
    }, {
        name: "which one is the glorious leader?",
        answers: [
            {
                name: "Xi Jinping",
                score: true
            }, {
                name: "Vladimir Putin",
                score: false
            }, {
                name: "George Washington",
                score: false
            }
        ]
    }, {
        name: "which company phone do you own?",
        answers: [
            {
                name: "apple",
                score: false
            }, {
                name: "huawei",
                score: true,
            }, {
                name: "samsung",
                score: false
            }
        ]
    }, {
        name: "what iss the best number of kids to have?",
        answers: [
            {
                name: "1",
                score: true
            }, {
                name: "3",
                score: false,
            }, {
                name: "as many as you can",
                score: false
            }
        ]
    }
]

let quesiter = 0, wrongiter = 0, container = document.querySelector('.container'), socCred = 0, endScreen = function () {
    if (wrongiter > 0) {
        createPopEmoji()
        return `
        <h1>you have failed the test.</h1><p>your social credit score is ${socCred}. Xi Jinping will personally order you to be banned from China. you are not loyal enough to our glorious nation.`
    } else{
        createChinaEmoji()
        
        document.body.classList.add('passed')
        return `<h1>you have been proven to be a loyal citizen.</h1><p>your social credit score is ${socCred}. glory to the ccp!`
    }
    
}

function beginTest() {
    let switchTo = 0
    if (questions.length != 1) switchSlides(switchTo)
    else switchSlides(endScreen())
}
function switchSlides(question) {
    if (questions.length === 0) {
        container.classList.add('transitioning')
        setTimeout(function () {
            container.innerHTML = endScreen()
            container.classList.remove('transitioning')
        }, 600)
    } else {
        quesiter++
        container.classList.add('transitioning')
        setTimeout(function () {
            container.innerHTML = getQuestionHTML(question)
            container.classList.remove('transitioning')
        }, 600)
    }
}
function getQuestionHTML(ind) {
    console.log(ind)
    let questionHTML = `
    <small>question ${quesiter}</small><br><h1>${questions[ind].name}</h1>`
    for (let i = 0; i < questions[ind].answers.length; i++) {
        questionHTML += `<button onclick="answer(${questions[ind].answers[i].score},${ind})">${questions[ind].answers[i].name}</button>`
    }
    return questionHTML
}
function createChinaEmoji() {
    let x = Math.floor(Math.random() * (window.innerWidth - 300))
    let y = Math.floor(Math.random() * (window.innerHeight - 300))
    let emoji = document.createElement('IMG')
    emoji.src = 'chinese-emoji.png'
    emoji.style.left = x + 'px'
    emoji.style.top = y + 'px'
    emoji.classList.add('chinese-emoji')
    document.body.appendChild(emoji)
}
function createPopEmoji() {
    let x = Math.floor(Math.random() * (window.innerWidth - 300))
    let y = Math.floor(Math.random() * (window.innerHeight - 300))
    let emoji = document.createElement('IMG')
    emoji.src = 'eye-pop.png'
    emoji.style.left = x + 'px'
    emoji.style.top = y + 'px'
    emoji.classList.add('chinese-emoji')
    document.body.appendChild(emoji)
}
function answer(positive, i) {
    console.log(questions)
    questions.shift()
    if (positive === true) {
        createChinaEmoji()
        let incnum = (10) + Math.round(Math.random() * 50)
        socCred += incnum
        msg(incnum, positive)
    } else {
        wrongiter++
        createPopEmoji(); createPopEmoji(); createPopEmoji()
        let decnum = (1000) + Math.round(Math.random() * 50)
        socCred += decnum - (decnum * 2)
        msg(decnum - (decnum * 2), positive)
    }
}
function msg(mesg, pos) {
    let toast = document.createElement('DIV')
    toast.classList.add('toast')
    if (Math.abs(mesg) == mesg) toast.innerHTML = `+${mesg} SOCIAL CREDIT <br><button onclick="switchSlides(0);purge(${pos})"">NEXT</button>`
    else toast.innerHTML = `${mesg} SOCIAL CREDIT <br><button onclick="switchSlides(0);purge(${pos})"">NEXT</button>`

    document.body.appendChild(toast)
}
function purge(pos) {
    if (pos === false) {
        for (let i = 0; i < document.getElementsByClassName('chinese-emoji').length + 2; i++) {
            document.getElementsByClassName('chinese-emoji')[0].remove()
        }
    } else {
        document.getElementsByClassName('chinese-emoji')[0].remove()
    }
    document.querySelector('.toast').remove()
}