const projects = [
    {
        name: "Bezier Visualizer",
        description: "A site to visualize manipulable, animated Cubic Bezier curves.",
        img: "bezier-visualizer/thumb.png",
        link: "https://pineapplerind.ga/bezier-visualizer"
    },
    {
        name: "Radium",
        description: "A fresh-looking theme for VSCode. Almost radioactive.",
        img: 'https://radium-theme.github.io/example.png',
        link: 'https://radium-theme.github.io'
    },
]
var page = ``
function newt(url) {
    window.open(url, '_blank').focus();
}
for (let i = 0; i < projects.length; i++) {
   page += `
    <a >
    <a class="box" href="${projects[i].link}"">
    <img alt="${projects[i].name}" src="${projects[i].img}">
    <div><h1>${projects[i].name}</h1>
    <p>${projects[i].description}</p>
    </div></a>
    </a>`
}
document.querySelector('.projects').innerHTML += page