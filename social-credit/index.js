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
        name: "what's the best number of kids to have?",
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

let quesiter = 0, container = document.querySelector('.container'), socCred = 0
function beginTest() {
    switchSlides(Math.floor(Math.random() * questions.length))
}
function switchSlides(question) {
    quesiter++
    container.classList.add('transitioning')
    setTimeout(function(){
        container.innerHTML = getQuestionHTML(question)
        questions = removeInd(question)
        container.classList.remove('transitioning')
    },600)
}

function removeInd(value) {
    var index = questions.indexOf(value);
    if (index > -1) {
        questions.splice(index, 1);
    }
    return questions;
  }

function getQuestionHTML(ind) {
    let questionHTML = `
    <small>question ${quesiter}</small><br><h1>${questions[ind].name}</h1>`
    for (let i = 0; i < questions[ind].answers.length; i++) {
        questionHTML += `<button onclick="answer(${questions[ind].answers[i].score})">${questions[ind].answers[i].name}</button>`
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
function answer(positive) {
    if (positive === true) {
        createChinaEmoji()
        let incnum = (10) + Math.round(Math.random() * 50)
        socCred += incnum
        msg(incnum)
    } else {
        createPopEmoji()
        let decnum = (1000) + Math.round(Math.random() * 50)
        socCred += incnum - (incnum*2)
        msg(incnum - (incnum*2))
    }
}
function msg(mesg) {
    let toast = document.createElement('DIV')
    toast.classList.add('toast')
    toast.innerHTML = '+'+mesg+' SOCIAL CREDIT'
    document.body.appendChild(toast)
}
function purge() {
    document.querySelector('.chinese-emoji').remove()
    document.querySelector('.toast').remove()
}