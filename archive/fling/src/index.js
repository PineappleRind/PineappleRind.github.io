const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay)) // Sleep function for preventing errors based on element creation
var animiter = 0
async function Fling(element, obj) {
    if (typeof element !== 'string') var foundElement = element
    else var foundElement = document.querySelector(element)
    if ((obj.from === undefined && obj.to === undefined) && obj.letters !== true) {
        foundElement.style.opacity = '0';
    }
    foundElement.style.display = 'inline-block';
    let fdelay = 10
    if (obj.delay !== undefined) {
        fdelay = obj.delay
    }
    if (typeof obj.duration !== undefined) {
        var fduration = parseInt(obj.duration)
    } else {
        var fduration = 500
    }

    if ((obj.from !== undefined && obj.to !== undefined) && obj.letters !== true) {
        customStyle(element,obj.from,obj.to)
    }

    let str = foundElement.textContent;
    foundElement.style.display = 'block';
    if (obj.letters === true) {
        foundElement.innerHTML = '';
        for (var x = 0; x < str.length; x++) {
            var c = str.charAt(x);
            var span = document.createElement("SPAN");
            span.innerHTML = c;
            span.style.opacity = '0'
            span.setAttribute('id', 'span' + x)
            if ((isCustom(obj.from,obj.to) === true)) {
                customStyle(span,obj.from,obj.to,obj.letters)
            }

            foundElement.appendChild(span);
            if (isCustom(obj.from,obj.to) === false) {
                addStyle(span, obj.effect, obj.letters, obj.duration, obj.from,obj.to,obj.delay);
            }
        }
        await sleep(fdelay)
    } else {
        setTimeout(function() {
            if (obj.from !== undefined && obj.to !== undefined) {
                element.style.animationName = 'fling'+ animiter
                element.style.animationDuration = fduration + 'ms'
            } else {
                addStyle(element, obj.effect, obj.letters, obj.duration)
            }
        })
    }
    effects(foundElement, obj.effect, str, fdelay, obj.letters, fduration)
}
function isCustom(a,b) {
    if (a !== undefined && b !== undefined) return true;
    else return false;
}
function customStyle(elem,from,to,letters) {
    if (letters !== true) animiter++
    let style = `<style>
    @keyframes fling${animiter} {
        from {${from}}
        to{${to}}
    }
    </style>
    `
    elem.setAttribute('style',from)
    document.head.insertAdjacentHTML('beforeend',style)
}
function effects(element, effect, str, delay, letters, duration) {
    if (effect === 'slide') { // Slide text effect
        if (letters === true) {
            for (let i = 0; i < str.length; i++) {
                setTimeout(function() {
                    let x = document.getElementById(`span${i}`);
                    x.style.transform = 'translateY(0px)';
                    x.style.opacity = '1'
                }, i * duration / 10)
            }
        } else if (letters === false) {
            setTimeout(function() {
                element.style.transform = 'translateY(0px)'
                element.style.opacity = '1'
            }, Math.max(duration, delay))
        }
    }
    if (effect === 'scale') { // Scale text effect
        if (letters === true) {
            for (let i = 0; i < str.length; i++) {
                setTimeout(function() {
                    let x = document.getElementById('span' + i);
                    x.style.transform = 'scale(1)';
                    x.style.opacity = '1'
                }, i * duration/10)
            }
        } else {
                setTimeout(function() {
                    element.style.transform = 'scale(1)';
                    element.style.opacity = '1'
                }, delay)
        }
    }
    if (effect === 'opacity') { // Scale text effect
        if (!0 === letters)
            for (let e = 0; e < str.length; e++) setTimeout(function() {
                document.getElementById("span" + e).style.opacity = "1"
            }, e * duration / 10);
        else setTimeout(function() {
            element.style.opacity = "1"
        }, delay);
    }
    if (effect === 'rotate'){
        if (letters === true) {
            for (let i = 0; i < str.length; i++) {
                setTimeout(function() {
                    let x = document.getElementById('span' + i);
                    x.style.transform = 'rotateZ(0deg)';
                    x.style.opacity = '1'
                }, i * duration/10)
            }
        } else if (letters === false) {
            setTimeout(function() {
                element.style.transform = 'rotateZ(0deg)';
                element.style.opacity = '1'
            }, Math.max(duration, delay))
        }
    }
}

function addStyle(e, r, t, u, del) {
    if (t === false) {
            if (!u) e.style.transition = 0.5 + 's'
            else e.style.transition = u / 1000 + 's'
    } else {
        e.style.whiteSpace = 'pre'
        e.style.display = 'inline-block'
        if (isCustom() === true) {
            e.setAttribute('style',u)
            setTimeout(function() {
                e.setAttribute('style','')
                e.style.animationName = 'fling' + animiter
                e.style.animationDuration = `${u}ms`
            }, parseInt(del))
        }
        if (!u) e.style.transition = 0.5 + 's'
        else e.style.transition = u / 1000 + 's'
    }
    if (r === 'slide') {
        e.style.transform = 'translateY(10px) scale(1)';
    } else if (r === 'scale') {
        e.style.transform = 'scale(0)';
    } else if (r === 'rotate') {
        e.style.transform = 'rotateZ(10deg)'
    }
}

function attribute() {
    let allElems = document.querySelectorAll('[data-fling]');
    for (let i = 0; i < allElems.length; i++) {
        let ob = {};

        let r = allElems[i]
        let y = r.getAttribute('data-fling')
        let u = r.getAttribute('data-fling-letters')
        let cusf = r.getAttribute('data-fling-from');
        let cust = r.getAttribute('data-fling-to');
        if (u === null || u === '') {
            var lettersob = false;
        } else {
            var lettersob = true
        }
        if (cusf === null || cusf === '') {
            cusf = false;
        } else {
            ob.from = cusf
        }

        if (cust === null || cust === '') {
            cust = false
        } else {
            ob.to = cust
        }
        let k = r.getAttribute('data-fling-delay')
        if (k === null || k === '') {
            var delayob = 100
            ob.delay = delayob;
        }
        let p = r.getAttribute('data-fling-duration')
        if (p === null || p === '') {
            ob.duration = 500;
        } else {
            ob.duration = r.getAttribute('data-fling-duration');
        }
        ob.effect = y;
        ob.letters = lettersob;
        setTimeout(function(){Fling(r, ob);})
    }
}
attribute()
