var root = "./";

function shuffle(array) {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}
var questions = [
  {
    name: "what happened on May 20, 1989 in Tiananmen Square?",
    answers: [
      {
        name: "nothing",
        score: true,
      },
      {
        name: "something",
        score: false,
      },
    ],
    result: "nothing happened on May 20, 1989 in Tiananmen Square",
  },
  {
    name: "what is Taiwan?",
    answers: [
      {
        name: "an independent country",
        score: false,
      },
      {
        name: "never heard of it",
        score: true,
      },
      {
        name: "a territory of china",
        score: true,
      },
    ],
  },
  {
    name: "how long did you play video games this week?",
    answers: [
      {
        name: "6 hours or more",
        score: false,
      },
      {
        name: "4 hours",
        score: false,
      },
      {
        name: "2 hours or less",
        score: true,
      },
      {
        name: "i don't play video games",
        score: true,
      },
    ],
  },
  {
    name: "which one is the glorious leader?",
    answers: [
      {
        name: "Xi Jinping",
        score: true,
      },
      {
        name: "Vladimir Putin",
        score: false,
      },
      {
        name: "Joe Biden",
        score: false,
      },
    ],
  },
  {
    name: "what brand phone do you have?",
    answers: [
      {
        name: "apple",
        score: false,
      },
      {
        name: "huawei",
        score: true,
      },
      {
        name: "samsung",
        score: false,
      },
    ],
    result: "chinese brand phones are best",
  },
  {
    name: `what do you think of this picture? <br> <img class="xi" src="${root}pooh.png">`,
    answers: [
      {
        name: "amusing",
        score: false,
      },
      {
        name: "unacceptable",
        score: true,
      },
      {
        name: "funny",
        score: false,
      },
      {
        name: "bing chilling",
        score: false,
      },
    ],
  },
  {
    name: "how many kids do you have?",
    answers: [
      {
        name: "no kids",
        score: true,
      },
      {
        name: "1",
        score: true,
      },
      {
        name: "2",
        score: true,
      },
      {
        name: "more than 3",
        score: false,
      },
    ],
  },
];
questions = shuffle(questions);
const $ = document.querySelectorAll.bind(document);

let quesiter = 0,
  container = document.querySelector(".container"),
  socCred = 0,
  endScreen = function () {
    if (socCred < 300) {
      play(1);
      emoji(1);
      document.body.classList.add("ohnorun");
      return `
        <h1>you have failed the test.</h1><p>your social credit score is ${socCred}. ${
        Math.random > 0.5
          ? "Xi Jinping will personally order you to be banned from China. "
          : "you have been sentenced to a lifetime ban from china by our supreme Xi Jinping. "
      } you are not loyal enough to our glorious nation.`;
    } else {
      emoji(0, 3);
      document.body.classList.add("passed");
      return `<h1>you have been proven to be a loyal citizen.</h1><p>your social credit score is ${socCred}. glory to the ccp!</p>`;
    }
  };

function play(n) {
  $("audio")[+!n].pause();
  $("audio")[n].play();
}

function nosound() {
  window.play = (n) => null;
}

function beginTest() {
  play(0);
  let switchTo = 0;
  if (questions.length != 1) switchSlides(switchTo);
  else switchSlides(endScreen());
}

function switchSlides(question) {
  container.classList.add("transitioning");
  if (questions.length === 0) {
    setTimeout(function () {
      container.innerHTML = endScreen();
      container.classList.remove("transitioning");
    }, 600);
  } else {
    quesiter++;
    setTimeout(function () {
      container.innerHTML = getQuestionHTML(question);
      container.classList.remove("transitioning");
    }, 600);
  }
}

function getQuestionHTML(ind) {
  let questionHTML = `
    <small>question ${quesiter}</small><br><h1>${questions[ind].name}</h1><div class="buttons">`;
  for (let i = 0; i < questions[ind].answers.length; i++) {
    questionHTML += `<button onclick="answer(${questions[ind].answers[i].score},${ind})">${questions[ind].answers[i].name}</button>`;
  }
  questionHTML += `</div>`;
  return questionHTML;
}
const emoji = (type, num) => {
  let i = 0;
  let src = root + (type === 0 ? "thumbsup.png" : "pop.png");
  if (num)
    do {
      worker(i);
    } while (i++ < num - 1);

  function worker(i) {
    if (i >= num) return;
    let x = Math.floor(Math.random() * (window.innerWidth - 300));
    let y = Math.floor(Math.random() * (window.innerHeight - 300));
    let emoji = document.createElement("IMG");
    emoji.src = src;
    emoji.style.left = x + "px";
    emoji.style.top = y + "px";
    emoji.classList.add("chinese-emoji");
    document.body.appendChild(emoji);
  }
  worker();
};

function answer(positive, i) {
  let incnum = 100 + Math.round(Math.random() * 50);
  if (!positive) incnum *= -1;
  emoji(+!positive);
  socCred += incnum;
  msg(incnum, positive, questions[i].result);
  $(".counter")[0].innerHTML = `social credit: ${socCred}`;
  questions.shift();
}

function msg(mesg, pos, result) {
  let toast = document.createElement("DIV");
  toast.classList.add("toast");
  toast.innerHTML = `${pos === true ? "+" : ""}${mesg} SOCIAL CREDIT <br><p>${
    result || ""
  }</p><br><button onclick="switchSlides(0);purge(${pos})"">NEXT</button>`;

  document.body.appendChild(toast);
}

function purge(pos) {
  let emojis = $(".chinese-emoji");
  if (pos === false) emojis.forEach((e) => e.remove());
  else emojis[0].remove();
  document.querySelector(".toast").remove();
}
