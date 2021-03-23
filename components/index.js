function a(c) {
    return document.querySelector(c);
}
let b = a('#getStarted');
let c = a('.mobile');
let d = a('#close')
b.onclick = () => {
    window.scroll(0, 700);
};

c.onclick = () => {
    show(a('#mobileNav'))
}

d.onclick = () => {
    hide(a('#mobileNav'))
}

function show(e) {
    e.style.display = 'flex';
    setTimeout(function(){
        e.style.opacity = '1';
        e.style.transform = 'scale(1)'
        document.body.style.overflow = 'hidden'
    },10)
}

function hide(e) {
    e.style.opacity = '0';
        e.style.transform = 'scale(1.5)'
        document.body.style.overflow = 'scroll'
    setTimeout(function(){
        e.style.display = 'none';
    },500)
}