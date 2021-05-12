class Notif {
    constructor(obj) {
        if (!obj.image) obj.image = 'https://support.apple.com/library/content/dam/edam/applecare/images/en_US/il/attention-icon.png'
        if (!obj.appname) obj.appname = 'INFO'
        if (!obj.date) obj.date = 'now'
        createNotif(obj.title, obj.description, obj.appname, obj.date,obj.image)
    }
}
const css = `<style>#notifs{position:fixed;top:25px;right:10px;transition:.5s}.notif{padding:13px;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Oxygen,Ubuntu,Cantarell,'Open Sans','Helvetica Neue',sans-serif;border-radius:10px;background:rgba(255,255,255,.543);box-shadow:0 0 10px #33333333;backdrop-filter:blur(20px);display:flex;flex-direction:column;justify-content:center;width:340px;max-height:130px;cursor:default;margin:13px;transition:.5s;z-index:2;animation:comein 1s}.notif .close-notif{border-radius:50%;box-shadow:0 0 10px #33333333;background:rgba(255,255,255,.79);height:21px;width:21px;transform:translate(-20px,-40px);display:flex;align-items:center;justify-content:center;color:#000;position:absolute;font-weight:300;font-size:18px;line-height:21px;opacity:0;transition:.2s linear}.notif:hover .close-notif{opacity:1}.notif .notif-top{display:flex;justify-content:space-between}.notif .notif-top .notif-top-left h1{margin:0;color:#000;font-size:12px;text-transform:uppercase;font-weight:300;float:left}.notif .notif-top .notif-top-right h1{text-transform:capitalize;margin:0;color:#434343;font-size:11px;font-weight:400;float:right}.notif .notif-bottom h1{margin:0;color:#000;font-size:14px;font-weight:500;margin-top:5px}.notif .notif-bottom h2{margin:0;color:#1d1d1d;font-size:14px;font-weight:400;margin-top:2px}.notif .notif-top,.notif .notif-top .notif-top-left{display:flex;align-items:center}.notif .notif-top img{height:20px;margin-right:5px;border-radius:50%}@keyframes comein{from{transform:translateX(500px)}}</style>`
document.head.insertAdjacentHTML('beforeend',css)
function getid(e) {
    return document.getElementById(e)
}

var sibNum = function(n) {
    for (var e = [], i = n.parentNode.firstChild; i;) 1 === i.nodeType && i !== n && e.push(i), i = i.nextSibling;
    return e.length
};

  var id = 0
function createNotif(a,b,c,d,e) {
    id++
    if (id > 10) return;
    let notifBase = `
        <div class="notif" id="notif-${id}">
            <div class="close-notif" id="notif-close-${id}">&times;</div>
            <div class="notif-top">
                <div class="notif-top-left">
                    <img src="${e}">
                    <h1>${c}</h1>
                </div>
                <div class="notif-top-right">
                    <h1>${d}</h1>
                </div>        
            </div>  
            <div class="notif-bottom">
                <h1>${a}</h1>
                <h2>${b}</h2>
            </div>  
        </div>
        `
    if (!getid('notifs')) document.body.insertAdjacentHTML('afterbegin', '<div id="notifs"></div>')
        getid('notifs').insertAdjacentHTML('beforeend', notifBase)
        let one = 'notif-close-'+id
        let two = getid(one).parentElement
        getid(one).onclick = () => {
            closeNotif(two,getid('notifs'))
            console.log('notif-' + id)
        }
}

function closeNotif(notif,notifcont) {
    setTimeout(function(){
        if (whichChild(notif) === 0) {
            moveUp(notif,notifcont)
        } else if (whichChild(notif) >= 1 && whichChild(notif) < notifcont.childNodes.length) {
            moveUpWithoutTop(notif,document.getElementsByClassName('notif'))
        }

        notif.style.opacity = '0'
    })
    notifcont.style.transition = 'all 0.5s ease 0s'
    addTrans()
    setTimeout(function(){
        notif.remove()
        notifcont.style.transition = '0s'
        resetAll()
    },500)
}
function moveUp(notif,notifcont) {
    notifcont.style.transform = 'translateY(-' + (notif.offsetHeight + 13) + 'px)'
    notif.style.transform = 'translateY(' + (notif.offsetHeight + 13) + 'px)'
}

function moveUpWithoutTop(notif,notifs) {
    for(let i = 0; i < notifs.length; i++) {
        if (whichChild(notifs[i]) >= whichChild(notif)) {
            notifs[i].style.transform = 'translateY(-' + (notif.offsetHeight + 13) + 'px)'
        }
    }
    notif.style.transform = 'translateY(0px)'
    setTimeout(function(){
        notif.remove()
        resetAll()
    },500)
}

function whichChild(i) {
    for (var n = 0; null != (i = i.previousSibling);) ++n;
    return n
}

function resetAll() {
    var y = document.getElementsByClassName('notif')
    for(let i = 0;i<y.length;i++) {y[i].style.transform = '';y[i].style.transition="0s"}
}
function addTrans() {
    var y = document.getElementsByClassName('notif')
    for(let i = 0;i<y.length;i++) {y[i].style.transition="0.5s"}
}