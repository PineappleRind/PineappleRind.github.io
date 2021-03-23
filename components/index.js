function a(c) {
    return document.getElementById(c);
}
let b = a('getStarted');
b.onclick = () => {
    window.scroll(0, 700);
};