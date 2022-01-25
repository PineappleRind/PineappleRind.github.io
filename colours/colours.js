function Ripple(obj) {
	obj.element.style.overflow = 'hidden'
    obj.element.style.position = "absolute"
    obj.element.onclick = e => {
    	let bounds = obj.element.parentElement.getBoundingClientRect();
    	let x = e.clientX - bounds.left;
    	let y = e.clientY - bounds.top;
        let ripple = document.createElement('DIV')
        ripple.classList.add('ripple')
        ripple.style.left = x + 'px'
        ripple.style.top= y+'px'
        ripple.style.animationDuration = obj.duration + 's'
        if (obj.color) ripple.style.background = obj.color
        obj.element.appendChild(ripple)
        setTimeout(function(){
        	ripple.remove()
        },obj.duration*1000)
    }
}
