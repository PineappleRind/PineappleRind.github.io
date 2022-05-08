/*
Hey
Uh
I don't know
Try deciphering this or something?
Just do whatever you were planning to do when you inspected the elements...
*/
function $(id) { return document.querySelector(id) }

function Element(obj) {
    if (!obj.html) obj.html = ''
    if (!obj.type) obj.type = ''
    let el = document.createElement(obj.type.toLowerCase())
    el.innerHTML = obj.html
    el.classList.add('fade')
    this.element = el
    if (obj.classes) if (obj.classes.pop) {
        for (const classname in obj.classes) {
            let className = obj.classes[classname]
            el.classList.add(className)
        }
    } else el.classList.add(obj.classes)
    if (obj.onclick) el.onclick = obj.onclick
    if (obj.id) el.setAttribute('id',obj.id)
    this.append = function (timeout) {
        if (!timeout) timeout = 1

        $('#container').appendChild(el)
        setTimeout(function () {
            el.classList.remove('fade')
        }, timeout)
        return el
    }
    this.appendTo = function(elto){
        el.classList.remove('fade')
        elto.appendChild(this.element)
        return this
    }
    this.fadeOut = function (bool) {
        this.element.classList.add('fade')
        return bool === true ? this.element.remove() : ''
    }
    this.fadeIn = function(){this.element.classList.remove('fade')}
}
