function $(id) {
    return document.getElementById(id)
}

let input = $('dark')
let theBody = $('body')
function darkmode() {
    if (input.checked === false) {
        document.body.classList.remove('dark')
    } else {
        document.body.classList.add('dark')
    }
}

input.onclick = () => {
    darkmode()
}