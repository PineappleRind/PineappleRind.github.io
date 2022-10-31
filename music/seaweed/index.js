(function () {
    const $ = document.querySelectorAll.bind(document);

    let links = {
        "spotify": "https://open.spotify.com/album/4MiYtWJvjgwqavDfXRCqiE",
        "apple": "https://geo.music.apple.com/album/seaweed-single/1648723126?app=music",
        "youtube": "https://music.youtube.com/playlist?list=OLAK5uy_kT8voevR5Xi_xj3r4UWgEa-A8Xvush60Y",
        "deezer": "https://www.deezer.com/album/363499487",
        "amazon": "https://music.amazon.com/albums/B0BHHRZ9HZ",
        "tidal": "http://www.tidal.com/album/252462812"
    }

    let linkcont = $('.⛓')[0],
        hidden = $('.😶‍🌫️');

    for (const link of linkcont.children) {
        link.onclick = () => window.open(links[link.getAttribute('value')], '_blank');
    }

    for (const [i, hid] of hidden.entries()) {
        setTimeout(function () {
            if (hid.tagName.toLowerCase() === 'img') return;
            hid.classList.remove('😶‍🌫️');
        }, i * 300)
    }

    let settings = {
        resolution: 30,
        speed: 30,
        intensity: 10,
        wobbliness: 2,
        overlapProtection: 0.1,
        direction: 'x',
        gradient: {
            from: [217, 100, 33],
            to: [162, 100, 71],
        }
    }

    WobbleText(document.querySelector('h1'), settings)
})()