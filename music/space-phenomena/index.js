const listen = document.querySelector("#listenContents");
const links = document.querySelector("#linkContents");
const ease = getComputedStyle(document.body).getPropertyValue("--anim-ease");
const data = {
    "Spotify": "https://open.spotify.com/album/0zARpE80yYn1FaOSaKRkhU",
    "Apple Music": "https://music.apple.com/us/album/1699244574",
    "YouTube Music": "https://music.youtube.com/playlist?list=OLAK5uy_nrbEqYKfN7GNA2z0I6clfXNhmzwqCkS4w",
    "Deezer": "https://www.deezer.com/album/468566245",
    "Tidal": "http://www.tidal.com/album/307142118",
    "Amazon Music": "https://music.amazon.com/albums/B0CCST3QGG"
}
populateLinks(links.querySelector(".contents-inner"))

let touchEvent = 'ontouchstart' in window ? 'touchstart' : 'click';

listen.addEventListener(touchEvent, async () => {
    listen.animate([
        { gridTemplateRows: "1fr" }, { gridTemplateRows: "0fr" }
    ], { duration: 1000, fill: "both", easing: ease });

    await links.animate([
        { gridTemplateRows: "0fr" }, { gridTemplateRows: "1fr" }
    ], { duration: 1000, fill: "both", easing: ease }).finished;
})


function populateLinks(links) {
    for (const [store, link] of Object.entries(data)) {
        const button = document.createElement("a");
        button.classList.add("button");
        button.innerText = store;
        button.href = link;
        button.setAttribute("target", "_blank")
        links.append(button)
    }
}