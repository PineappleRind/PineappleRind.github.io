function $(id) {
    return document.getElementsByClassName(id)
}

onload = () => {
    loadBtns()
}

function loadBtns() {
    for (let j = 0; j < $("btn").length; j++) {
        setTimeout(function(){
            setTimeout(function(){
                $("btn")[j].classList.remove('hidden')
            },500 * j)
        },1000)
    }
}
