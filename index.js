const projects = [
    {
        name: "Bezier Visualizer",
        description: "A site to visualize manipulable, animated Cubic Bezier curves.",
        img: "bezier-visualizer/thumb.png",
        link: "https://pineapplerind.ga/bezier-visualizer",
        level: 'major'
    },
    {
        name: "Radium",
        description: "A fresh-looking theme for VSCode. Almost radioactive.",
        img: 'https://radium-theme.github.io/example.png',
        link: 'https://radium-theme.github.io',
        level: 'major'
    },
    {
        name: "Colours",
        description: "I made an instrumental album. All the song names are colours.",
        img: 'imgs/colours.png',
        link: 'https://pineapplerind.ga/colours',
        level: 'major'
    },
    {
        name: "Social Credit Quiz",
        link: "https://pineapplerind.ga/social-credit",
        description: 'Inspired by the Internet meme, this quiz tests your loyalty to the CCP. Zhong Xina failed, will you?',
        level: 'minor'
    }, 
    {
        name: "Text Stats",
        link: "https://pineapplerind.ga/text-stats",
        img: false,
        description: "View the statistics of any piece of text, such as word count, sentence count, and most common letters",
        level: 'minor'
    },
    {
        name: "Wiggle Text",
        link: "https://pineapplerind.ga/wiggle",
        description: "Make a string of text that appears to be in the shape of a wiggle",
        level: 'minor'
    }
]
var pages = {
    major: ``,
    minor: ``
}

function newt(url) {
    window.open(url, '_blank').focus();
}

for (const project of projects) {
    let { name, img, level, link, description } = project;
    let imgHTML = `<img alt="${name}" src="${img}">`
    if (!img) imgHTML = ''
    pages[level] += `<a><a class="box" href="${link}"">${imgHTML}<div><h1>${name}</h1><p>${description}</p></div></a></a>`
}
document.querySelector('.featured').innerHTML += pages.major
document.querySelector('.lesser').innerHTML += pages.minor