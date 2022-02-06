const $ = function (id) {
    return document.querySelector(id)
}
var types = {
    "infj": "https://static.neris-assets.com/images/personality-types/avatars/faces/infj-advocate-s3-v1-male.svg",
    "infp": "https://static.neris-assets.com/images/personality-types/avatars/faces/infp-mediator-s3-v1-female.svg",
    "intj": "https://static.neris-assets.com/images/personality-types/avatars/faces/intj-architect-s3-v1-male.svg",
    "intp": "https://static.neris-assets.com/images/personality-types/avatars/faces/intp-logician-s3-v1-female.svg",
    "isfj": "https://static.neris-assets.com/images/personality-types/avatars/faces/isfj-defender-s3-v1-female.svg",
    "isfp": "https://static.neris-assets.com/images/personality-types/avatars/faces/isfp-adventurer-s3-v1-female.svg",
    "istj": "https://static.neris-assets.com/images/personality-types/avatars/faces/istj-logistician-s3-v1-male.svg",
    "istp": "https://static.neris-assets.com/images/personality-types/avatars/faces/istp-virtuoso-s3-v1-male.svg",
    "enfj": "https://static.neris-assets.com/images/personality-types/avatars/faces/enfj-protagonist-s3-v1-male.svg",
    "enfp": "https://static.neris-assets.com/images/personality-types/avatars/faces/enfp-campaigner-s3-v1-female.svg",
    "entj": "https://static.neris-assets.com/images/personality-types/avatars/faces/entj-commander-s3-v1-female.svg",
    "entp": "https://static.neris-assets.com/images/personality-types/avatars/faces/entp-debater-s3-v1-male.svg",
    "esfj": "https://static.neris-assets.com/images/personality-types/avatars/faces/esfj-consul-s3-v1-male.svg",
    "esfp": "https://static.neris-assets.com/images/personality-types/avatars/faces/esfp-entertainer-s3-v1-female.svg",
    "estj": "https://static.neris-assets.com/images/personality-types/avatars/faces/estj-executive-s3-v1-female.svg",
    "estp": "https://static.neris-assets.com/images/personality-types/avatars/faces/estp-entrepreneur-s3-v1-male.svg",
}
var Gen = {
    update: function (key, value) {
        Gen.settings[key] = value;
        this.generate()
    }, settings: {
        theme: 'light',
        comments: {
            top: {
                type: 'enfp',
                content: '*talks*',
                timestamp: 0
            },
            bottom: [
                {
                    type: 'enfp',
                    content: '*talks*'
                },
                {
                    type: 'infj',
                    content: '*listens*'
                },
                {
                    type: 'infp',
                    content: '*watches*'
                },
            ]
        }
    }, generate: function () {
        let finalHTML = document.createElement('div')
        if (this.settings.theme === 'dark') $('main').classList.add('dark')
        else $('main').classList.remove('dark')
        let topcom = this.topComment(this.settings.comments.top.type, this.settings.comments.top.content, this.settings.comments.top.timestamp)
        finalHTML.appendChild(topcom)
        for (let i = 0; i < Gen.settings.comments.bottom.length; i++) {
            let cur = Gen.settings.comments.bottom[i]
            finalHTML.appendChild( Gen.comment(cur.type, cur.content) )
        }
        return finalHTML
    }, comment: function (type, com) {
        let html = document.createElement('DIV')
        html.classList.add('comment')
        html.innerHTML = `<img src="${types[type.toLowerCase()]}" class="comment-pfp">
        <div class="inner">
            <div class="top">
                <div class="name">${type.toLowerCase()} <span>@${type.toLowerCase()}</span>
                </div>
                <div class="timestamp">1 h <div class="down-arrow"></div>
                </div>
            </div>
        <div class="body">${com}</div>
        <div class="icons"></div>`
        return html
    }, topComment: function(type, com, time) {
        let html = document.createElement('DIV')
        html.classList.add('top-comment')
        let timeformatted = new Date(time).toLocaleTimeString()
        console.log(timeformatted)
        html.innerHTML = `
        <div class="top-meta">
            <img src="${types[type.toLowerCase()]}" class="comment-pfp">
            <div class="name-downarrow">
                <div class="name">
                    <p>${type.toLowerCase()}</p>
                    <p class="introverted">@${type.toLowerCase()}</p>
                </div>
                <div class="down-arrow"></div>  
            </div>
        </div>
        <div class="body">${com}</div>
        <div class="timestamp"></div>
        <div class="comment-separator"></div>
        <div class="icons"></div>
        `
        
        return html
    }
}

$('main').appendChild(Gen.generate())