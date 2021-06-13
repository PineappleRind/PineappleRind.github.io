function $(t) {
  return document.querySelectorAll(t)
}
for (let t = 0; t < 3; t++) {
  let l = $(".glass")[t];
  console.log(l), l.onclick = (() => {
      classAdj(l)
  })
}

function classAdj(t) {
  for (let l = 0; l < $(".glass").length; l++) {
      let o = $(".glass")[l];
      o !== t && move(o), o === t && (o.style.transform = "translateX(0px) translateY(0px)", o.style.zIndex = '2', o.style.opacity = "1")
  }
}
var bool = !1;

function move(t) {
  0 == bool ? (t.style.transform = "translateX(170px) translateY(-5px)", t.style.opacity = "0.3", t.style.zIndex = '1', bool = !0) : (t.style.transform = "translateX(-170px) translateY(5px)", t.style.opacity = "0.3", t.style.zIndex = '1', bool = !1)
}

function getindex(t) {
  for (var l = 0; null != (t = t.previousSibling);) l++;
  return Math.floor(l / 2)
}