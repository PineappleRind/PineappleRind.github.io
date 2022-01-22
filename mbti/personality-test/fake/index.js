if (localStorage.getItem("result")) {
  switchit(
    `<h1>don\'t take this again </h1><p>don\'t try to beat me, you ${localStorage.getItem(
      "resultWord"
    )} ${localStorage.getItem("result")}</p>`
  );
}
onkeydown = (e) => {
  if (e.key == "A") localStorage.clear();
};

var introvert = undefined;
let already = false;
let ind = Math.floor(Math.random() * 13);
var PQ = {
  start: function () {
    startQuiz();
  },
  next: function () {
    if (inc == questions.length) return PQ.finish();
    inc++;
    if (inc != ind) switchit(base);
    else {
      switchit(`
<h1>#${inc} out of ${questions.length}</h1>
<p>You need time to recharge after a social event.</p>
<div class="slidecontainer">
<label>Not like me</label><input oninput="check(this)"  min="0" type="range" value="50" class="slider" max="100" id="myRange"><label>A lot like me</label>
</div>
<button onclick="PQ.next()">Next</button>
<small>${kaomoji[Math.floor(Math.random() * kaomoji.length)]}</small>
`);
    }
  },
  refresh: function () {
    base = `
<h1>#${inc + 1} out of ${questions.length}</h1>
<p>${questions[inc]}</p>
<div class="slidecontainer">
<label>Not like me</label><input oninput="check(this)"  min="0" type="range" value="50" class="slider" max="100" id="myRange"><label>A lot like me</label>
</div>
<button onclick="PQ.next()">Next</button>
<small>${kaomoji[Math.floor(Math.random() * kaomoji.length)]}</small>
`;
  },
  finish: function () {
    let rand;
    if (introvert == true)
      rand = exresults[Math.floor(Math.random() * exresults.length)];
    else rand = inresults[Math.floor(Math.random() * inresults.length)];
    localStorage.setItem("result", rand.type);
    localStorage.setItem("resultWord", rand.word);
    switchit(`
<h1>Your results</h1>
<p>You're an <b>${rand.type}</b><p>
<p>${rand.description}<p>
<p>${rand.type}s can be described as:</p>
<ul>
<li>${rand.pro[0]}</li>
<li>${rand.pro[1]}</li>
<li>${rand.pro[2]}</li>
<li>${rand.pro[3]}</li>
</ul>
`);
  },
};
function startQuiz() {
  inc++;
  switchit(base);
  PQ.refresh();
}

function switchit(html) {
  document.getElementsByClassName("body")[0].classList.add("going");
  setTimeout(() => {
    document.getElementsByClassName("body")[0].remove();
  }, 400);
  let newBod = document.createElement("DIV");
  newBod.classList.add("body");
  newBod.classList.add("going");
  newBod.innerHTML = html;
  document.body.appendChild(newBod);
  setTimeout(function () {
    newBod.classList.remove("going");
  });
  PQ.refresh();
}

function shuffle(array) {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {
    // Pick a remaining element...
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

function check(el) {
  if (el.value > 40) introvert = true;
  else introvert = false;
}
