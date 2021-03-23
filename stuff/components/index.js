function $(e) {
    return document.getElementById(e)
}

let scrollDown = $('getStarted')

scrollDown.onclick = () => {
    window.scroll(0, 700)
}