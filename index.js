let r = "r";
let i = "i";
let c = "c";
let k = "k";

window.addEventListener("keydown", function(e) {
    if (e.key === r) {
        window.addEventListener("keydown", function(e) {
            if (e.key === i) {
                window.addEventListener("keydown", function(e) {
                    if (e.key === c) {
                        window.addEventListener("keydown", function(e) {
                            if (e.key === c) {
                                window.location.href = "https://www.youtube.com/watch?v=oHg5SJYRHA0";
                            }
                        })
                    }
                })
            }
        })
    }
})

function snackbar() {
    var x = document.getElementById("snackbar");
    x.className = "appear";
    let y = document.getElementById("overlay");
    y.style.display = 'block';
    y.addEventListener("click", function() {
        y.style.opacity = '0';
        x.className = x.className.replace("appear", "");

    });
    setTimeout(function() { y.style.opacity = '1'; }, 1)
    setTimeout(function() {
        x.className = x.className.replace("appear", "");
        y.style.opacity = '0';
    }, 2000);
    setTimeout(function() {
        y.style.display = 'none';
    }, 3000);
}

function copy() {
    let text = "pr#2020";
    navigator.clipboard.writeText(text)
    let tooltip = document.getElementById('copied');
    tooltip.style.opacity = '1';
    setTimeout(function() {
        tooltip.style.opacity = '0';
    }, 1000);
}
