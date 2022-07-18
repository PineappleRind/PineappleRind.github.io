const $ = (str, t) => document['querySelector' + (t ? 'All' : '')](str);

let el = $('svg');
let waves = [];

for (let i = 0; i < el.childNodes.length; i++) {
    if (el.childNodes[i].tagName === 'path') waves.push(el.childNodes[i]);
}

let positions = {};
let allEls = $('[animate]', 'all');

function updatePos() {
    allEls = $('[animate]', 'all');
    for (const el of allEls) {
        let tag = el.getAttribute('animate');
        if (!tag) continue;
        positions[tag] = el.getBoundingClientRect();
        el.style.position = 'fixed'
    }
}
onchange = updatePos
updatePos()

function animate(element, from, to, dur, del) {
    
    let resolved = resolve(element, from, to);
    console.log(resolved)
    const [x1, y1] = resolved[0], [x2, y2] = resolved[1];

    element.style.left = x1 + 'px';
    element.style.top = y1 + 'px';
    element.style.transition = dur + 'ms cubic-bezier(.9,0,.2,1)';
    setTimeout(() => {
        element.style.left = x2 + 'px';
        element.style.top = y2 + 'px';
    }, del);
    return;
}

function resolve(el, ...args) {
    let res = [],
        i = 0,
        attr = el.getAttribute('animate');
    for (let arg of args) {
        res.push([]);
        if (arg === 'default') res[i] = [positions[attr].left, positions[attr].top];
        else if (arg === 'middle') res[i] = [
            (window.innerWidth / 2) - (positions[attr].width / 2),
            (window.innerHeight / 2) - (positions[attr].height / 2)
        ];
        else res[i] = arg
        console.log(positions[attr])
        i++;
    }
    return res;
}
animate(
    allEls[0],
    'middle',
    'default',
    2000,
    3000
);