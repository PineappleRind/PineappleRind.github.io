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
    if (!getid('notifs')) {
        document.body.insertAdjacentHTML('afterbegin', '<div id="notifs"></div>')
        getid('notifs').insertAdjacentHTML('afterbegin', notifBase)
        console.log('notif-close-'+id)
            getid('notif-close-'+id).onclick = () => {
                closeNotif(getid('notif-' + id),getid('notifs'))
                console.log('notif-' + id)
            }
    }
    else {
        getid('notifs').insertAdjacentHTML('afterbegin', notifBase)
        getid('notif-close-'+id).onclick = () => {
            closeNotif(getid('notif-' + id),getid('notifs'))
            console.log('notif-' + id)
        }
    }
}

function closeNotif(notif,notifcont) {
    notifcont.style.transform = 'translateY(-' +(notif.offsetHeight + 13) + 'px)'
    notif.style.transform = 'translateY(' + (notif.offsetHeight + 13) + 'px)'
    notif.style.opacity = '0'
    setTimeout(function(){
        notif.remove()
        notifcont.style.transition = '0s'
        notifcont.style.transform = 'translateY(0px)'
    },500)
}