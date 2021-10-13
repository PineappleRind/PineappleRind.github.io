var kaomoji = [
    "(⌒_⌒;)",
    "(￢_￢;)",
    "(・_・;)",
    "|-･)",
    "☆ﾐ(o*･u･)ﾉ",
    "( ´(ｴ)ˋ )",
    "∪＾ェ＾∪",
    "／(･ × ･)＼",
    "( ͡° ͜ʖ ͡°)",
    "٩(ˊ〇ˋ*)و",
    "(⌒▽⌒)",
    "(´｡• ᵕ •｡`)",
  ];
  var questions = [
      "You find it difficult to concentrate on a single subject.",
      'Others may perceive you as "meddling" or "controlling."',
      "You would go to any length to win a debate.",
      "You have an interest in symbolism, mysticism, and the unknown.",
      "You are often the first to react to a question.",
      "You would rather sugarcoat a problem than upset someone.",
      "You greatly value social harmony and often go out of your way to maintain it.",
      "You understand a concept by logically recognizing and drawing patterns between different, already known concepts.",
      "You see so many possibilities that you have trouble committing to a single one.",
      "You believe that arriving at a truth is more important than winning an argument.",
      "You find yourself agreeing with those who argue that people's acts are justified regardless of how they get to their ultimate outcome.",
      "You have an incredible ability to sense other people's needs.",
      "You think of yourself as a sensible, realistic person.",
      "You are a fiercely independent person who takes pride in your individuality.",
    ],
    inc = 0,
    base = `
          <h1>#${inc + 1} out of ${questions.length}</h1>
          <p>${questions[inc]}</p>
          <div class="slidecontainer">
              <label>A little like me</label><input oninput="check(this)"  min="0" type="range" value="50" class="slider" max="100" id="myRange"><label>A lot like me</label>
          </div>
          <button onclick="PQ.next()">Next</button>
          <small>${kaomoji[Math.floor(Math.random() * kaomoji.length)]}</small>
      `,
    exresults = [
      {
        type: "ESFP",
        description:
          "You're like Michael Jackson. You make really dumb performances with really weird dance moves and a really weird style.",
        pro: ["Dumb", "Reckless", "Shallow", "Bubbly"],
        word: "reckless "
      },
      {
        type: "ESFJ",
        description:
          "You connect with other people so much that you are part of them. You're constantly taken advantage of.",
        pro: [
          "Emotional",
          "Warm",
          "Fuzzy",
          "Will break down with the slightest touch",
        ],
        word: "overly emotional "
      },
      {
        type: "ENTJ",
        description:
          "You're as hard as concrete. You're so stubborn. No wonder nobody wants to listen to you.",
        pro: [
          "Unemotional",
          "Hard-hearted",
          "Yells a lot",
          "Probably is a politician?",
        ],
        word: "stubborn "
      },
    ];
  
  var inresults = [
    {
      type: "ISTJ",
      description:
        "You're a chaotic robot who hates everyone around you. When anyone does anything, you lash out on them and attack them with logic.",
      pro: ["Whiny", "Emotionless", "Probably has OCD", "Evil"],
      word: "evil "
    },
    {
      type: "ISFP",
      description:
        "You're a reckless person who is definitely an artist. You become moody easily, and are dumb, lazy, and unmotivated.",
      pro: ["Lazy", "Over-competitive", "Crazy", "Overly emotional"],
      word: "crazy "
    },
  ];
  