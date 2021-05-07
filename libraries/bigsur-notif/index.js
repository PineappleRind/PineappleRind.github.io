class Notif {
    constructor(title, description, appname, date,image) {
        if (!image) image = 'https://support.apple.com/library/content/dam/edam/applecare/images/en_US/il/attention-icon.png'
        if (!appname) appname = 'INFO'
        if (!date) date = 'now'
        createNotif(title, description, appname, date,image)
    }
}
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
        getid('notifs').insertAdjacentHTML('afterbegin', notifBase)
        let one = 'notif-close-'+id
        let two = getid(one).parentElement
        getid(one).onclick = () => {
            closeNotif(two,getid('notifs'))
            console.log('notif-' + id)
        }
}

function closeNotif(notif,notifcont) {
    setTimeout(function(){
        if (notif.nextElementSibling) {
            notifcont.style.transform = 'translateY(-' + (notif.offsetHeight + 13) + 'px)'
            notif.style.transform = 'translateY(' + (notif.offsetHeight + 13) + 'px)'
        }

        notif.style.opacity = '0'
    })
    notifcont.style.transition = 'all 0.5s ease 0s'
    setTimeout(function(){
        notif.remove()
        notifcont.style.transition = '0s'
        notifcont.style.transform = 'translateY(0px)'
    },500)
}