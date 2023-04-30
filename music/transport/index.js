// welcome to the JS
// IIFE for safety
(function () {
  // data: each URL for the buttons of each EP
  const urls = {
    spotify: "https://open.spotify.com/album/7dvhxbHgZNJT66xujplvXg",
    apple: "https://music.apple.com/us/album/transport/1670647948",
    youtube:
      "https://music.youtube.com/playlist?list=OLAK5uy_k8If5EXnpUKWFsQEp4p5DC6-Bzy8fVWgE",
    deezer: "https://www.deezer.com/us/album/405399667",
    tidal: "https://listen.tidal.com/album/275720979",
    amazon: "https://music.amazon.com/albums/B0BV79WHJY",
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
      button.href = urls[storeId];
      $(".pane").append(button);
    }
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
    skip.setAttribute("aria-hidden", "false");
    setTimeout(function () {
      skip.classList.add("hidden");
      skip.setAttribute("aria-hidden", "true");
    }, 7000);
  }

  // set its onclick
  skip.onclick = () => {
    $(":root").style.setProperty("--animation", "0s");
    skip.classList.add("hidden");
    skip.setAttribute("aria-hidden", "true");
  };
  // set pane if hash exists
  const startOff = window.location.hash.toLowerCase()?.replace("#", "");
  if (startOff && ["underground", "ground", "air"].includes(startOff))
    switchPanes(startOff);

  localStorage.setItem("transport-already-visited", true);
})();
