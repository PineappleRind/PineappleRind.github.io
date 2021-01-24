let tirana = "k";
let rome = "i";
let berlin = "c";
let paris = "r";
let sofia = tirana;

window.addEventListener("keydown", function(e) {
    if (e.key === paris) {
        window.addEventListener("keydown", function(e) {
            if (e.key === rome) {
                window.addEventListener("keydown", function(e) {
                    if (e.key === berlin) {
                        window.addEventListener("keydown", function(e) {
                            if (e.key === sofia) {
                                window.location.href = "https://www.youtube.com/watch?v=oHg5SJYRHA0";
                            }
                        })
                    }
                })
            }
        })
    }
})

let author = 'PineappleRind. '
let intro = 'Made by '
let contact = 'Email: pineapplerind.info@gmail.com'

console.log(intro + author + contact);

function redirect(link) { 
    document.body.style.animationName = 'load-out'
    setTimeout(function(){window.location.href = link; document.body.style.display = 'none'},1000)
}

const g = document.getElementById('navButtons');
const title = document.querySelector('.title');

for (let i = 0, len = g.children.length; i < len; i++) {
    g.children[i].onmouseover = function(){
        title.style.background = '#9a59b9'
    }

    g.children[i].onmouseleave = function(){
        title.style.background = '#b9598e'
    }
}

onmousemove = e => {
    let y = e.clientY/150 - 2
    let x = e.clientX/75 - 4
    title.style.transform = 'translate(' + x + 'px, ' + y + 'px)';
}