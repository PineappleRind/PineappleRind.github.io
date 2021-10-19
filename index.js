const projects = [
    {
        name: "Bezier Visualizer",
        description: "A site to visualize manipulable, animated Cubic Bezier curves.",
        img: "bezier-visualizer/thumb.png",
        link: "https://pineapplerind.ga/bezier-visualizer"
    },
    {
        name: "bigsur-modal",
        description: "2.4kb minified library to make alert dialogs in the style of MacOS Big Sur.",
        img: 'imgs/bigsur-modal.png',
        link: 'https://pineapplerind.ga/libraries/bigsur-modal'
    },
    {
        name: "Radium",
        description: "A fresh-looking theme for VSCode. Almost radioactive.",
        img: 'https://radium-theme.github.io/example.png',
        link: 'https://radium-theme.github.io'
    },
    {
        name: "Memelist.ml",
        description: "Funny concepts that you can say or refer to sometimes that will not make sense to most people.",
        img: 'imgs/memelist.png',
        link: 'https://memelist.ml', // Memelist
    }
]
var page = ``
function newt(url) {
    window.open(url, '_blank').focus();
}
for (let i = 0; i < projects.length; i++) {
   page += `
    <div class="box" onclick="newt('${projects[i].link}')">
    <img src="${projects[i].img}">
    <div><h1>${projects[i].name}</h1>
    <p>${projects[i].description}</p>
    </div></div>`
}
document.querySelector('.projects').innerHTML += page

if (localStorage.getItem('pineapplerindSurveyState') == 'doNotShowAgain') {} else if (Math.random() < 0.5) {
    document.querySelector('form').style.display = 'none'
}
