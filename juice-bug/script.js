var letters = {
  a: [
    ":_::_::_::_:     ",
    ":_:            :_:     ",
    ":_::_::_::_:     ",
    ":_:            :_:     ",
    ":_:            :_:     ",
    ":_:            :_:     ",
  ],
  b: [
    ":_::_::_:           ",
    ":_:            :_:     ",
    ":_::_::_::_:     ",
    ":_:            :_:     ",
    ":_:            :_:     ",
    ":_::_::_:           ",
  ],
  c: [
      ":_::_::_::_:    ", 
      ":_:                      ", 
      ":_:                      ", 
      ":_:                      ", 
      ":_:                      ", 
      ":_::_::_::_:   "],
  d: [
    ":_::_::_:           ",
    ":_:            :_:     ",
    ":_:            :_:     ",
    ":_:            :_:     ",
    ":_:            :_:     ",
    ":_::_::_:           ",
  ],
  e: [
    ":_::_::_::_:      ",
    ":_:                        ",
    ":_: :_::_::_:     ",
    ":_:                         ",
    ":_:                         ",
    ":_::_::_::_:        ",
  ],
  f: [
    ":_::_::_::_:      ",
    ":_:                        ",
    ":_::_::_::_:      ",
    ":_:                        ",
    ":_:                        ",
    ":_:                        ",
  ],
  g: [
    ":_::_::_::_:     ",
    ":_:                        ",
    ":_:                        ",
    ":_:      :_::_:      ",
    ":_:            :_:      ",
    ":_::_::_::_:      ",
  ],
  h: [
    ":_:            :_:      ",
    ":_:            :_:      ",
    ":_::_::_::_:      ",
    ":_:            :_:      ",
    ":_:            :_:      ",
    ":_:            :_:      ",
  ],
  i: [
    ":_::_::_:      ",
    "      :_:            ",
    "      :_:            ",
    "      :_:            ",
    "      :_:            ",
    ":_::_::_:      ",
  ],
  j: [
    ":_::_::_::_::_:    ",
    "            :_:                 ",
    "            :_:                 ",
    "            :_:                 ",
    "            :_:                 ",
    ":_::_:                       ",
  ],
  k: [
    ":_:         :_:        ",
    ":_:     :_:            ",
    ":_::_:                 ",
    ":_::_:                 ",
    ":_:     :_:            ",
    ":_:         :_:        ",
  ],
  l: [
  ":_:                        ", 
  ":_:                        ", 
  ":_:                        ", 
  ":_:                        ", 
  ":_:                        ", 
  ":_::_::_::_:      "],
  m: [
      ":_:            :_:        ",
      ":_::_::_::_:        ",
      ":_:   :_:   :_:        ",
      ":_:            :_:        ",
      ":_:            :_:        ",
      ":_:            :_:        "
  ],
  n: [
    ":_:            :_:       ",
    ":_::_:      :_:       ",
    ":_:      :_::_:       ",
    ":_:      :_::_:       ",
    ":_:            :_:       ",
    ":_:            :_:       ",
  ],
  o: [
    "      :_::_:            ",
    ":_:            :_:      ",
    ":_:            :_:      ",
    ":_:            :_:      ",
    ":_:            :_:      ",
    "      :_::_:            ",
  ],
  p: [
    ":_::_::_:             ",
    ":_:             :_:     ",
    ":_::_::_:            ",
    ":_:                        ",
    ":_:                        ",
    ":_:                        ",
    ":_:                        ",
  ],
  q: [
    `      :_::_:            `,
    `:_:            :_:      `,
    `:_:            :_:      `,
    `:_:            :_:      `,
    `:_:      :_:            `,
    `      :_:      :_:      `,
  ],
  r: [
    ":_::_::_:            ",
    ":_:             :_:     ",
    ":_::_::_:            ",
    ":_:             :_:     ",
    ":_:             :_:     ",
    ":_:             :_:     ",
  ],
  s: [
    ":_::_::_::_:        ",
    ":_:                          ",
    ":_::_::_::_:        ",
    "                  :_:        ",
    "                  :_:        ",
    ":_::_::_::_:        ",
  ],
  t: [
    ":_::_::_:        ",
    "      :_:              ",
    "      :_:              ",
    "      :_:              ",
    "      :_:              ",
    "      :_:              ",
  ],
};

let output = document.getElementById("output");
oninput = () => {
  output.innerHTML = getThing(
    document.querySelector("#text").value.toLowerCase()
  );
};

function getThing(str) {
  let res = ``;
  for (let j = 0; j < 6; j++) {
    for (let i = 0; i < str.length; i++) {
      res += letters[str[i]][j];
    }
    res += `
`;
  }
  let juiceBugs = /:_:/g;
  return res.replace(
    juiceBugs,
    ":" + document.querySelector("#emoji").value + ":"
  );
}
let copy = document.getElementById("copy");
copy.onclick = () => {
  navigator.clipboard.writeText(output.value).then(
    function () {
      copy.classList.add("✅");
      setTimeout(function () {
        copy.classList.remove("✅");
      }, 2000);
    },
    function () {
      copy.classList.add("❌");
      setTimeout(function () {
        copy.classList.remove("❌");
      }, 2000);
    }
  );
};
