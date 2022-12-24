const $ = (s, a) => document[`querySelector${a ? 'All' : ''}`](s)

const sel = $('#openIn'),
    links = {
        "spotify": "https://open.spotify.com/album/0qaY2njKCtyFLzW6qXGJ2B",
        "youtube": "https://music.youtube.com/playlist?list=OLAK5uy_kHiCVWHb2B9OOlkVnzHJcIAzEgTZUq0IQ",
        "apple": "https://geo.music.apple.com/album/multidimensional-interchange-single/1660828092?app=music",
        "tidal": "http://www.tidal.com/album/267785251",
        "deezer": "https://www.deezer.com/album/388752497",
        "amazon": "https://music.amazon.com/albums/B0BQPJXPPN?ref=dm_ff_linkfire"
    }, map = {
        "spotify": "Spotify",
        "apple": "Apple Music",
        "youtube": "YouTube Music",
        "deezer": "Deezer",
        "tidal": "Tidal",
        "amazon": "Amazon Music"
    };

for (const store in links) {
    sel.append(option(store, links[store]))
}

function option(name, link) {
    let opt = document.createElement('option');
    opt.textContent = map[name];
    opt.value = link;
    return opt;
}

sel.oninput = e => {
    if (e.target.dataset.choose === '') return;
    window.open(e.target.value, '_blank');
}

// distribute the headers

Array.from($('.sprawl', 1)).forEach(h => {
    let ih = h.innerHTML;
    h.innerHTML = "";
    for (const char of ih) {
        let span = document.createElement('span');
        span.textContent = char;
        h.append(span)
    }
})