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
        let y = sort()
        for (let i = 0; i < 8; i++) {
                let g = document.getElementsByClassName('bar');
                let j = document.getElementsByClassName('barlabel');
                let u = y[i] + 'px'
                j[i].innerHTML = y[i]
                g[i].style.height = u
        }
    }
}

function change(h, r) {
    h.style.opacity = '0'
    setTimeout(function() {
        h.innerText = r.replace('px', '')
        h.style.opacity = '1'
    }, 200)
}

  
  function sortItems(array) { 
    var length = array.length; 

    for(var i = 1, j; i < length; i++) { 
      var temp1 = array[i]; 
      for(var j = i - 1; j >= 0 && array[j] > temp1; j--) { 
        array[j+1] = array[j]; 
      } 
      array[j+1] = temp1; 
    } 
  return array; 
  } 

function sort() {
    let array = new Array()
    for (let i = 0; i < 8; i++) {
        let g = document.getElementsByClassName('bar');
        array.push(parseInt(g[i].innerText));
    }
    return sortItems(array)
}