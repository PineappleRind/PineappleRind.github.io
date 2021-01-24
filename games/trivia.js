let loadingNumber = document.getElementById('loadingNumber');
let counter = 0;

function loading() {
    counter = counter + 1;
    loadingNumber.innerHTML = counter + '%';
}
setInterval(function() {
    if (counter < 100) {
        loading();
    }
}, 5)
let firstBtn = document.getElementById('firstBtn');
firstBtn.addEventListener('click', function() {
    changeContents(second)
})

let second = `<h1>Step 1</h1> <h3> Please choose how many players </h3> <hr> <select id="players"> <option value="1">One player</option> <option value="2">Two players</option> </select>`


function changeContents(content) {
    document.getElementById('mainDiv').classList.add('is-not-showing');
    setTimeout(function() {
        document.getElementById('mainDiv').innerHTML = content;
        document.getElementById('mainDiv').classList.remove('is-not-showing');
    }, 1000)
}
