let n = document.querySelector("main");
let s = document.querySelector("nav");



let f = document.querySelector(".footer");

function showFooter() {
    f.style.display = 'block';
}

setTimeout(function() {
    showFooter();
}, 800)

if (n.scrollTop() > s.scrollHeight()) {
    s.style.backgroundColor = 'rgba(0,0,0,0.7)';
}