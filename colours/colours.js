function Ripple(obj) {
	if (obj.element.length > 0) {
		for (let i = 0; i < obj.element.length; i++) {
			__addRipple(obj, obj.element[i])
		}
	} else __addRipple(obj, obj.element)

	function __addRipple(obj, el) {
		console.log(el)
		el.style.overflow = 'hidden'
		el.style.position = 'relative'
		el.onclick = e => {
			let bounds = el.getBoundingClientRect();
			let ripple = document.createElement('DIV')
			ripple.classList.add('ripple')
			if (obj.color) ripple.style.background = obj.color
			ripple.style.left = e.clientX - bounds.left + 'px';
			ripple.style.top = e.clientY - bounds.top + 'px';
			ripple.style.animationDuration = obj.duration + 's';
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
