function $(e) {
    return document.getElementById(e)
}
const delay = x => new Promise(res => setTimeout(res, x));

(async () => {
    for (let i = 0; i < 100; i++) {
        let bar = `<div class="bar" id="bar${i}" style="height:${Math.floor(Math.random() *500)}px;"></div>`
        document.body.insertAdjacentHTML('afterbegin', bar)
        await delay(2);
        if (i == 99) {
            $('comparisons').innerHTML = 'Sorting...';
            setTimeout(function() {
                sort()
               
            }, 100)
        }
    }
})();
let comparisons = 0;
async function sort() {
    for (let p = 0; p < 100; p++) {
        for (let i = 0; i < 99; i++) {
                    let r = document.getElementsByClassName('bar')[i];
                    let s = document.getElementsByClassName('bar')[i + 1];
                    if (parseInt(r.style.height.replace('px', '')) < parseInt(s.style.height.replace('px', ''))) {
                        swapDiv(s);
                        comparisons++
                        await delay(1)
                        $('comparisons').innerHTML = 'Comparisons: <span id="number">' + comparisons + '</span>';
                        $('number').innerHTML = comparisons;
                    }
                    if (i >= 99) {
                        $('number').style.animationName = 'bounce'
                        for (let o = 0; o < document.getElementsByClassName('bar').length; o++) {
                            document.getElementsByClassName('bar')[i].style.background = 'lime'
                        }
                    }

        }
    }
}

function swapDiv(elm) {
    var previous = findPrevious(elm);
    if (previous) {
        elm.parentNode.insertBefore(elm, previous)
    } 
}

function findPrevious(elm) {
    do {
        elm = elm.previousSibling;
    } while (elm && elm.nodeType != 1);
    return elm;
}