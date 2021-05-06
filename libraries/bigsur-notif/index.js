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
function createNotif(a,b,c,d,e) {
    let notifBase = `
        <div class="notif">
            <div class="close-notif">&times;</div>
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
    }
    else {
        getid('notifs').insertAdjacentHTML('afterbegin', notifBase)
    }
}