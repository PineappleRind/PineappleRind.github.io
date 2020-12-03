let n = document.querySelector("main");
let s = document.querySelector("nav");
let r, t, c;
t = document.querySelector(".nav-toggle");
r = {
    d: document.querySelector(".nav-toggle"),
    l: function(e) {
        e.preventDefault(), this.d.classList.toggle("expanded")
    }
};

c = document.querySelector(".nav-mobile");

let f = document.querySelector(".footer");

function showFooter() {
    f.style.display = 'block';
}

function nav() {
    if (c.style.width !== '100%') {
       c.style.width = '100%';
    } else {
        c.style.width = '0%';
    }
}

setTimeout(function() {
    showFooter();
}, 800)


t.addEventListener("click", function(e){
    r.l(e);
    nav();
})