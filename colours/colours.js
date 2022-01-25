function Ripple(obj) {
    if (obj.element.length > 0) {
        for (let i = 0; i < obj.element.length; i++) {
            __addRipple(obj, obj.element[i])
        }
    } else __addRipple(obj, obj.element)

    function __addRipple(obj, el) {
        console.log(el)
        el.style.cssText += `overflow: hidden; position: relative;`
        el.onclick = e => {
            let bounds = el.getBoundingClientRect();
            const rippleStyles = {
                left: e.clientX - bounds.left + 'px',
                top: e.clientY - bounds.top + 'px',
                animationDuration: obj.duration + 's'
            }
            let ripple = document.createElement('DIV')
            ripple.classList.add('ripple')
            if (obj.color) rippleStyles.background = obj.color
            Object.assign(ripple.style)
            el.appendChild(ripple)
            setTimeout(function() {
                ripple.remove()
            }, obj.duration * 1000)
        }
    }
}
onload = () => {
    let cards = document.querySelectorAll('.card')
    for (let i = 0; i < cards.length; i++) {
        cards[i].onmouseup = () => {
            let url = cards[i].getAttribute('redir')
            setTimeout(function() {
                window.open(url, '_blank').focus();
            }, 0.5 * 1000)
            Ripple({
                element: cards[i],
                duration: 0.8,
                color: `rgba(255,255,255,0.3)`
            })
        };
    }
}
document.querySelector('.colourscont').classList.add('showing-lol')