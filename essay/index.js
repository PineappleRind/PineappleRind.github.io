function $(e) {
    return document.getElementById(e)
}
let o = window,
    i = $("dark"),
    b = $("body");

function p() {
    !1 === i.checked ? b.classList.remove("dark") : b.classList.add("dark")
}
i.onclick = (() => {
    p()
}), onscroll = (() => {
    const e = o.innerHeight,
        t = o.pageYOffset,
        d = document.body.offsetHeight,
        n = parseInt(t / (d - e) * 100);
    $("progress").style.width = n + "%"
});
