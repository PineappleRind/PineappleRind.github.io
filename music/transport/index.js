// welcome to the JS
// IIFE for safety
(function () {
    // data: each URL for the buttons of each EP
    const urls = {
        "underground": {
            "spotify": "https://open.spotify.com/album/0UDLh0aaDqesBu7dmxOYuw",
            "apple": "https://music.apple.com/ca/album/underground-transport-ep/1657309013",
            "youtube": "https://music.youtube.com/playlist?list=OLAK5uy_kcwzkOW_hHLIo3WaCaii5Pe78UTh1g6Sc",
            "deezer": "https://www.deezer.com/album/381835367",
            "tidal": "https://listen.tidal.com/album/263457030",
            "amazon": "https://music.amazon.com/albums/B0BNLVY6JG"
        },
        // leave these empty, the user won't access it anyways
        "ground": {},
        "air": {}
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
    function loadButtons() {
        for (const [storeId, storeName] of Object.entries(stores)) {
            let button = createElement('a', `class:button-store-link;data-ref:${storeId};target:_blank`, storeName);
            $('.pane').append(button);
        }

        switchPanes();
    }
    let last = {
        pic: $('.bg-image.underground'),
        trigger: $('[data-trigger=underground]')
    }
    // updates hrefs of the buttons depending on which tab is selected
    function switchPanes(pane) {
        // already selected? dumb user :(
        if (last.trigger.dataset === pane) return;

        // hide pane
        let paneEl = $(".pane"),
            switchers = $('.pane-switchers');
        // remove all colorings
        paneEl.classList.remove('underground', 'ground', 'air')
        switchers.classList.remove('underground', 'ground', 'air')
        // then add the right one
        paneEl.classList.add(pane || 'underground')
        switchers.classList.add(pane || 'underground')
        // update buttons
        // by the way, this won't ever be shown
        // because you can't switch tabs yet!
        let i = 0;
        for (const button of $('.button-store-link', 1)) {
            i++;
            // staggered delay
            setTimeout(function () {
                // hide the button
                button.classList.add('hidden');
                setTimeout(function () {
                    // wait until fully hidden, then update button & unhide
                    let link = urls[pane || 'underground'][button.dataset.ref];
                    if (link) button.href = link;
                    else button.setAttribute('disabled', true)
                    button.classList.remove('hidden');
                }, 200)
            }, i * 50)
        }
    }

    // for each tab
    for (const trigger of $('.pane-switcher', 1)) {
        // listen for clicks and update page accordingly
        trigger.onclick = () => {
            if (trigger.getAttribute("disabled") !== null) return;
            last.trigger.classList.remove('selected');
            trigger.classList.add('selected');
            let togo = trigger.dataset.trigger;
            switchPanes(togo);

            let pic = $(`.bg-image.${togo}`);
            last.pic.classList.add('hidden');
            pic.classList.remove('hidden');

            last = { trigger, pic };
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

    loadButtons()

    // now if user prefers reduced motion 
    // stop the video, immediately. we don't want seizures. 
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        let video = $('#video video');
        video.play();
        video.pause();
        video.currentTime = video.duration;
    }

    // if user has visited site before 
    // show the skip animation button and hide it after 7 secs (animation duration)
    let skip =  $('.skip-animation');
    if (localStorage.getItem('transport-already-visited')) {
        skip.classList.remove('hidden')
        setTimeout(function(){
            skip.classList.add('hidden')
        }, 7000)
    }

    // set its onclick
    skip.onclick = () => {
        $(":root").style.setProperty('--animation', "0s");
        skip.classList.add('hidden');
    }
    localStorage.setItem('transport-already-visited', true);
})()