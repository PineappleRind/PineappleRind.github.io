let r = document.querySelector("#goDown");
let n = document.querySelector("main");

onscroll = e => {
    hideArrow();
}

function hideArrow() {
    if (n.scrollTop == '0') {
        r.style.display = 'block';
    } else if (n.scrollTop > '1') {
        r.style.display = 'none';
    }
    console.log(n.scrollTop)
}