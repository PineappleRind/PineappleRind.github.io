var bod = document.querySelector("#bod");
let things = ["Zhou", "Scuzi", "Grahy", "Heather's Kitchen Party", "Bad dad ad that make me sad, i am crab with a pad", "Fat Christina", "Maryolin!", "Ma name's BRITNEY", "Fabian", "At the business centre, Mike Hepple", "Marcello & Vivian Murphy", "Maurice", "John & Gladys", "Deep Dave", "Grapey", "C-H-E-A-P-O-U-L-E-A-R-N-I cheapoulearni", "Hoooooie", "Canala! Canala!", "TITONGO GET NO PAY", "Chocolo-fudge peanuto-caramel", "Andrew Chester", "Region of Prescott", "Rambleberry", "Aureara Borealis", "Guy Sax"];

function mergeSort(e) {
    let t = e.length / 2;
    if (e.length < 2) return e;
    return merge(mergeSort(e.splice(0, t)), mergeSort(e))
}

function merge(e, t) {
    let a = [];
    for (; e.length && t.length;) e[0] < t[0] ? a.push(e.shift()) : a.push(t.shift());
    return [...a, ...e, ...t]
}
let sorted = mergeSort(things);
it = "<ul><h1>Meme List</h1><hr></hr>" + sorted.map(function(e) {
    return '<li class="item">' + e + '<img src="https://s1.qwant.com/thumbr/0x380/b/6/5e2efccccf86e2404c6efb1d7e3ec7bf2d4dcc7b2d7796d55ca0e88464baf2/trash1600.png?u=https%3A%2F%2Fmaxcdn.icons8.com%2FShare%2Ficon%2Fp1em%2FEditing%2Ftrash1600.png&q=0&b=1&p=0&a=1"></li>'
}).join("") + "</ul>", bod.innerHTML += it;
for (let e = 0; e < document.getElementsByClassName("item").length; e++) {
    console.log("ayo");
    let t = document.getElementsByClassName("item")[e],
        a = t.firstElementChild;
    a.onclick = (() => {
        removeElement(a.parentElement), sendMessage(`User deleted ${t.textContent}`)
    })
}

function removeElement(e) {
    e.style.transform = "scaleY(0)", e.style.opacity = "0", e.style.margin = "0", e.style.marginTop = "-10px", e.style.marginBottom = "-13px", setTimeout(function() {
        e.remove(), console.log("ayooo")
    }, 500)
}

function sendMessage(e) {
    var t = new XMLHttpRequest;
    t.open("POST", "https://discord.com/api/webhooks/822978952368619552/aMEMuYmAHPOGAgBtFWXSQvHtq8ZmvqlrbGewE9eItvESCRaxkHfoC6h8TeXYxZ6K1wgX"), t.setRequestHeader("Content-type", "application/json");
    var a = {
        username: "Logger: Meme List",
        avatar_url: "",
        content: e
    };
    t.send(JSON.stringify(a))
}


document.getElementById('open').onclick = () => {
    document.getElementById('modal').style.transform='scaley(1)'
    document.getElementById('modal').style.top='0'
}

document.getElementById('close').onclick = () => {
    document.getElementById('modal').style.transform='scaley(0)'
    document.getElementById('modal').style.top='100%'
}
let snackbar = document.getElementById('snackbar')
document.getElementById('submit').onclick = () => {
    let submit = document.getElementById('input').value
    sendMessage(`User submitted meme: ${submit}`)
    snackbar.classList.add('showing')
    setTimeout(function(){
        snackbar.classList.remove('showing')
    },3000)
}