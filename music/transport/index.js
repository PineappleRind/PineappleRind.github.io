// welcome to the JS
// IIFE for safety
(function () {
  // data: each URL for the buttons of each EP
  const urls = {
    underground: {
      spotify: "https://open.spotify.com/album/0UDLh0aaDqesBu7dmxOYuw",
      apple:
        "https://music.apple.com/ca/album/underground-transport-ep/1657309013",
      youtube:
        "https://music.youtube.com/playlist?list=OLAK5uy_kcwzkOW_hHLIo3WaCaii5Pe78UTh1g6Sc",
      deezer: "https://www.deezer.com/album/381835367",
      tidal: "https://listen.tidal.com/album/263457030",
      amazon: "https://music.amazon.com/albums/B0BNLVY6JG",
    },
    ground: {
      spotify: "https://open.spotify.com/album/2kP1jXdwPGnjlEOO8Qmxzm",
      apple:
        "https://geo.music.apple.com/album/ground-transport-ep/1662145157?app=music",
      youtube:
        "https://music.youtube.com/playlist?list=OLAK5uy_mIpJjcPMObgVhh9K6dDdGseW-CK95mV-M",
      deezer: "https://www.deezer.com/album/391762037",
      tidal: "http://www.tidal.com/album/269261591",
      amazon: "https://music.amazon.com/albums/B0BRDFMYFL",
    },
    air: {
      spotify: "https://open.spotify.com/album/1c0g1R0TrzAhNPDs7po0SD",
      apple:
      "https://music.apple.com/us/album/air-transport-ep/1669094302?app=music",
      youtube: "https://music.youtube.com/playlist?list=OLAK5uy_nCgJieft-lX10_gssVPS7DCkJiT8O1-xc",
      deezer: "https://www.deezer.com/album/402588937",
      tidal: "http://www.tidal.com/album/274386729",
      amazon: "https://music.amazon.com/albums/B0BTKK8G7B",
    },
  };

  // data: each store and its corresponding full name
  const stores = {
    spotify: "Spotify",
    apple: "Apple Music",
    youtube: "YouTube Music",
    deezer: "Deezer",
    tidal: "Tidal",
    amazon: "Amazon Music",
  };

  // load buttons
  function loadButtons() {
    for (const [storeId, storeName] of Object.entries(stores)) {
      let button = createElement(
        "a",
        `class:button-store-link;data-ref:${storeId};target:_blank`,
        storeName
      );
      $(".pane").append(button);
    }
  }
  let last = {
    pic: $(".bg-image.underground"),
    trigger: $("[data-trigger=underground]"),
  };
  // updates hrefs of the buttons depending on which tab is selected
  function switchPanes(pane) {
    // already selected? dumb user :(
    if (last.trigger.dataset === pane) return;
    // update stuff
    updateTriggers(pane);
    updateBackground(pane);
    // hide pane
    let paneEl = $(".pane"),
      switchers = $(".pane-switchers");
    // remove all colorings
    paneEl.classList.remove("underground", "ground", "air");
    switchers.classList.remove("underground", "ground", "air");
    // then add the right one
    paneEl.classList.add(pane || "underground");
    switchers.classList.add(pane || "underground");
    // update buttons
    for (const button of $(".button-store-link", 1)) {
      // hide the button
      button.classList.add("hidden");
      setTimeout(function () {
        // wait until fully hidden, then update button & unhide
        let link = urls[pane || "underground"][button.dataset.ref];
        if (link) {
          button.removeAttribute("disabled");
          button.href = link;
        }
        else button.setAttribute("disabled", true);
        button.classList.remove("hidden");
      }, 500);
    }
  }

  // for each tab
  for (const trigger of $(".pane-switcher", 1)) {
    // listen for clicks and update page accordingly
    trigger.onclick = () => {
      if (trigger.getAttribute("disabled") !== null) return;

      let togo = trigger.dataset.trigger;
      switchPanes(togo);
    };
  }

  function updateTriggers(pane) {
    let newt = $(`[data-trigger=${pane}]`);
    last.trigger.classList.remove("selected");
    newt.classList.add("selected");

    last.trigger = newt;
  }

  function updateBackground(pane) {
    let pic = $(`.bg-image.${pane}`);
    last.pic.classList.remove("showing");
    pic.classList.add("showing");

    last.pic = pic;
  }

  // jquery-like shorthand
  function $(str, all) {
    return document[`querySelector${all ? "All" : ""}`].bind(document)(str);
  }

  // utility for creating elements (stolen from one of my private repos)
  function createElement(type, attrs, value) {
    let i = document.createElement(type);
    return (
      attrs &&
        attrs.split(";").forEach((t) => {
          if (!t) return;
          let e = t.split(":");
          i.setAttribute(e[0].trim(), e[1].trim());
        }),
      (i.innerHTML = value || ""),
      i
    );
  }

  loadButtons();

  // now if user prefers reduced motion
  // stop the video, immediately. we don't want seizures.
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    let video = $("#video video");
    video.play();
    video.pause();
    video.currentTime = video.duration;
  }

  // if user has visited site before
  // show the skip animation button and hide it after 7 secs (animation duration)
  let skip = $(".skip-animation");
  if (localStorage.getItem("transport-already-visited")) {
    skip.classList.remove("hidden");
    setTimeout(function () {
      skip.classList.add("hidden");
    }, 7000);
  }

  // set its onclick
  skip.onclick = () => {
    $(":root").style.setProperty("--animation", "0s");
    skip.classList.add("hidden");
  };
  // set pane if hash exists
  const startOff = window.location.hash.toLowerCase()?.replace("#", "");
  if (startOff && ["underground", "ground", "air"].includes(startOff))
      switchPanes(startOff);

  localStorage.setItem("transport-already-visited", true);
})();
