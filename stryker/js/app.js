let n = document.querySelector("main");
let s = document.querySelector("nav");
let r, t;
t = document.querySelector(".nav-toggle");
r = {
    d: document.querySelector(".nav-toggle"),
    l: function(e) {
        e.preventDefault(), this.d.classList.toggle("expanded")
    }
};



let f = document.querySelector(".footer");

function showFooter() {
    f.style.display = 'block';
}

setTimeout(function() {
    showFooter();
}, 800)

if (n.scrollTop >= s.scrollHeight) {
    s.style.backgroundColor = 'rgba(0,0,0,0.7)';
}

t.addEventListener("click", function(e){
    r.l(e);
})