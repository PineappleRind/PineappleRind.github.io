var backgrounds = [// PRUDENT
  `
  linear-gradient(rgb(4, 0, 227), transparent),
  linear-gradient(to top left, rgb(128, 0, 255), transparent),
  linear-gradient(to top right, rgb(0, 121, 196), transparent), black
  `, // Red/orange
  `
  linear-gradient(rgb(227, 0, 4), transparent),
  linear-gradient(to top left, rgb(255, 0, 128), transparent),
  linear-gradient(to top right, rgb(196, 121, 0), transparent), black
  `, // Green/blue
  `
  linear-gradient(rgb(4, 100, 0), transparent),
  linear-gradient(to top left, rgb(0, 128, 255), transparent),
  linear-gradient(to top right, rgb(0, 196, 121), transparent), black
  `, // Yellow/green
  `
  linear-gradient(rgb(4, 100, 0), transparent),
  linear-gradient(to top left, rgb(128, 130, 0), transparent),
  linear-gradient(to top right, rgb(0, 170, 121), transparent), black
  `,
  // Yellow/orange
  `
  linear-gradient(rgb(180, 160, 0), transparent),
  linear-gradient(to top left, rgb(255, 80, 0), transparent),
  linear-gradient(to top right, rgb(230, 170, 0), transparent), black
  `
]

function $(t) {
  return document.querySelectorAll(t)
}
for (let t = 0; t < 3; t++) {
  let l = $(".glass")[t];
  console.log(l), l.onclick = (() => {
      classAdj(l)
  })
}

function classAdj(t) { // t paramater is the card that was clicked
  for (let l = 0; l < $(".glass").length; l++) {
      let o = $(".glass")[l]; // all of the cards
      o !== t && move(o), o === t && // if the card selected in the for loop wasn't the card clicked, focus card clicked
      (o.style.transform = "translateX(0px) translateY(0px)", 
      o.style.zIndex = '2', 
      o.style.cursor = 'default',
      o.style.opacity = "1")
  }
}
var bool = true;// to stop both cards moving towards the same side

function move(t) {
  false == bool ? // if toggle boolean is false, move card right:
  
  (t.style.transform = "translateX(170px) translateY(-5px)", 
  t.style.opacity = "0.3", 
  t.style.cursor = 'w-resize',
  t.style.zIndex = '1', 
  bool = true) 

  : // if toggle boolean is true, move card left:

  (t.style.transform = "translateX(-170px) translateY(5px)", 
  t.style.cursor = 'e-resize',
  t.style.opacity = "0.3", 
  t.style.zIndex = '1', 
  bool = false) // reset toggle boolean
}

function getindex(t) {
  for (var l = 0; null != (t = t.previousSibling);) l++;
  return Math.floor(l / 2)
}


function chooseColor() {
  return backgrounds[Math.floor(Math.random() * backgrounds.length)]
}
document.body.style.background = chooseColor()