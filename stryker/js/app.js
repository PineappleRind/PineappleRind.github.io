let n = document.querySelector("main");
let s = document.querySelector("nav");
let r, t, c, g;
t = document.querySelector(".nav-toggle");
r = {
    d: document.querySelector(".nav-toggle"),
    l: function(e) {
        e.preventDefault(), this.d.classList.toggle("expanded")
    }
};

g = document.getElementById('donateBtn');

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

var i;
for (i = 0; i < 70; i++) {
    let snow = document.createElement('snow');
    document.body.appendChild(snow);
}
let h;
h = document.getElementById('modalDonate');

function donateModal() {
    h.style.display = 'block';
}

g.addEventListener('click', function() {
    donateModal();
});
    
setTimeout(function() {
    showFooter();
}, 800)


t.addEventListener("click", function(e){
    r.l(e);
    nav();
})