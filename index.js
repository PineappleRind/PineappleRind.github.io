const projects = [
    {
        name: "Memelist.ml",
        description: "Funny concepts that you can say or refer to sometimes that will not make sense to most people.",
        img: 'imgs/memelist.png',
        link: 'https://memelist.ml', // Memelist
    },
    {
        name: "bigsur-modal",
        description: "2.4kb minified library to make alert dialogs in the style of MacOS Big Sur.",
        img: 'imgs/bigsur-modal.png',
        link: 'https://pineapplerind.ga/libraries/bigsur-modal'
    },
    {
        name: "Radium (Soon)",
        description: "A fresh-looking theme for VSCode. Almost radioactive.",
        img: 'imgs/comingsoon.png',
        link: false
    }
]
let base = `<div id="body">        <div class="section">
<h1>pineapplerind</h1>
<button onclick="toProjects(page)">projects</button>
</div>

</div>`
var page = ``
function newt(url) {
    window.open(url, '_blank').focus();
}
for (let i = 0; i < projects.length; i++) {
    let link = `<button onclick="newt('${projects[i].link}')">Link</button>`
   if (!projects[i].link) {
       link = `<button disabled>No website</button>`
   }
   page += `<div class="sectionofboxes">
    <div class="box">
    <img src="${projects[i].img}">
    <div><h1>${projects[i].name}</h1>
    <p>${projects[i].description}</p>
    <div class="box-buttons">
        ${link}
        </div>
    </div></div></div>`

    if (i == projects.length - 1) {
        page += `<button style="position:fixed;top:20px;right:20px;" onclick="toProjects(base)">Go back</button>`
    }
}
function toProjects(e) {
    document.body.classList.add('transitioning');
    console.log('transitioning')
    setTimeout(function(){
        console.log('transitionoint out')
        document.body.classList.remove('transitioning');
        document.getElementById('body').innerHTML = e;
        window.scrollTo(0,0)
    },500)
}