function Ripple(obj) {
    if (obj.element.length > 0) {
        for (let i = 0; i < obj.element.length; i++) {
            __addRipple(obj, obj.element[i])
        }
    } else __addRipple(obj, obj.element)

    function __addRipple(obj, el) {
        console.log(el)
        el.style.overflow = 'hidden'
        el.style.position = "relative"
        el.onclick = e => {
            let bounds = el.getBoundingClientRect();
            let x = e.clientX - bounds.left;
            let y = e.clientY - bounds.top;
            let ripple = document.createElement('DIV')
            ripple.classList.add('ripple')
            ripple.style.left = x + 'px'
            ripple.style.top = y + 'px'
            ripple.style.animationDuration = obj.duration + 's'
            if (obj.color) ripple.style.background = obj.color
            el.appendChild(ripple)
            setTimeout(function () {
                ripple.remove()
            }, obj.duration * 1000)
        }
    }
}

onload = () => {
    let elementsArr = []
    let cards = document.querySelectorAll('.card')
    for (let i = 0; i < cards.length; i++) {
        elementsArr.push(cards[i])
        cards[i].onmouseup = () => {
            let url = cards[i].getAttribute('redir')
            setTimeout(function () {
                window.open(url, '_blank').focus();
            }, 0.5 * 1000)
        }
    }
    document.querySelector('.colourscont').classList.add('showing-lol')
    Ripple({
        element: elementsArr,
        duration: 0.8,
        color: `rgba(255,255,255,0.3)`
    })
}