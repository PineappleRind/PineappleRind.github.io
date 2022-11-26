// welcome to the JS
// IIFE for safety
(function () {
    // data: each URL for the buttons of each EP
    // is this what you were looking for? ;)
    const urls = {
        "underground": null,
        "ground": null,
        "air": null
    }

    // data: each store and its corresponding full name
    const stores = {
        "spotify": "Spotify",
        "apple": "Apple Music",
        "youtube": "YouTube Music",
        "deezer": "Deezer",
        "tidal": "Tidal",
        "amazon": "Amazon Music"
    }

    // load buttons
    // not called because nothing is out yet..
    function loadButtons() {
        for (const [storeId, storeName] of Object.entries(stores)) {
            let button = createElement('a', `class:button-store-link;data-ref:${storeId}`, storeName);
            $('.pane').append(button);
        }

        updateButtons();
    }

    // updates hrefs of the buttons depending on which tab is selected
    function updateButtons(pane) {
        for (const button of $('.button-store-link', 1))
            button.href = urls[pane || 'underground'][button.dataset.ref];
    }

    for (const trigger of $('.pane-switcher', 1)) {
        trigger.onclick = () => {
            if ($("[data-trigger=air]").getAttribute("disabled") !== null) return;
            let togo = trigger.dataset.trigger;
            updateButtons(togo);
            
            let img = $('.bg-image');
            img.classList.add('hidden')
            img.src = `transport-${togo}.png`
            img.onload = () => {
                img.classList.remove('hidden');
            }
        }
    }

    // jquery-like shorthand
    function $(str, all) {
        return document[`querySelector${all ? "All" : ""}`].bind(document)(str);
    }

    // utility for creating elements (stolen from one of my private repos)
    function createElement(type, attrs, value) {
        let i = document.createElement(type);
        return attrs && attrs.split(";").forEach(t => {
            if (!t) return;
            let e = t.split(":")
            i.setAttribute(e[0].trim(), e[1].trim());
        }), i.innerHTML = value || "", i
    };
})()