function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function getRandomHeight() {
    let r
    r = Math.floor((Math.random() * 300) + 10);
    return r + 'px'
}

document.addEventListener("DOMContentLoaded", function(event) {
    generate()
});

document.getElementById('regenerate').onclick = () => {
    generate()
}

function generate() {
    for (let i = 0; i < 8; i++) {
        let g = document.getElementsByClassName('bar')[i];
        let r = getRandomHeight();
        g.style.height = r;
        g.style.backgroundColor = getRandomColor();
        g.number = r

        let j = document.getElementsByClassName('barlabel')[i];
        change(j, r)

    }
    document.getElementById('sort').onclick = () => {
        sortItems(document.getElementsByClassName('bar'))
    /* for (let i = 0; i < 8; i++) {
                let g = document.getElementsByClassName('bar');
                let j = document.getElementsByClassName('barlabel');
        }*/
    }
}

function change(h, r) {
    h.style.opacity = '0'
    setTimeout(function() {
        h.innerText = r.replace('px', '')
        h.style.opacity = '1'
    }, 200)
}

  function sortItems(g) { 
    let array = new Array()
    let numArray = new Array()
    for (let i = 0; i < 8; i++) {
        console.log(numArray)
        let r = parseInt(g[i].innerText)
        numArray.push(r)
        var u = numArray.sort(function(a, b){return a-b})
        console.log(u)
        let y = g[i].style.backgroundColor
        array.push(`<div class="bar" style="height: ${u[i]}px; background-color: ${y};" id="bar1"><p class="barlabel">${u[i]}</p></div>`);
        setTimeout(function(){
            document.querySelector('.bars').innerHTML = ''
    setTimeout(function(){
        document.querySelector('.bars').innerHTML = array.join('')
    },1)
    },1)
        if (i >= 8) {
            return
        }
    }
  } 