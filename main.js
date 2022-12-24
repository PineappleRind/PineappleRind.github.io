(function () {
  let hash = window.location.hash.substring(1);
  const $ = document.querySelector.bind(document);
  const $$ = document.querySelectorAll.bind(document);

  const projects = [
    {
      name: "Bezier Visualizer",
      description:
        "A site to visualize manipulable, animated Cubic Bezier curves.",
      img: "bezier-visualizer/img/thumb",
      link: "/bezier-visualizer",
      type: "site",
    },
    {
      name: "Radium",
      description:
        'A fresh-looking theme for VSCode. Almost radioactive.</p><p class="small">Made with a friend',
      img: "https://radium-theme.github.io/example",
      link: "https://radium-theme.github.io",
      type: "theme",
    },
    {
      name: "Multidimensional Interchange",
      description: "Single",
      img: "/music/multidimensional-interchange/mi.thumb",
      type: "music",
      link: "/music/multidimensional-interchange",
      class: "new",
      tracks: 1,
      date: "2022.12.20",
      time: 4,
    },
    {
      name: "Transport",
      description: "3 EPs",
      img: "/music/transport/imgs/collageTransport.thumb",
      link: "/music/transport",
      type: "music",
      tracks: "?",
      date: "2022.11.29 - 2023.01.29",
      time: "?",
    },
    {
      name: "Seaweed",
      description: "Single",
      img: "/music/seaweed/seaweed.thumb",
      link: "/music/seaweed",
      type: "music",
      tracks: 1,
      date: "2022.10.29",
      time: 4,
    },
    {
      name: "Berries",
      description: "EP",
      img: "/music/berries/berries.thumb",
      type: "music",
      link: "/music/berries",
      tracks: 5,
      date: "2022.08.02",
      time: 17,
    },
    {
      name: "Social Credit Quiz",
      description:
        "Inspired by the Internet meme, this quiz tests your loyalty to the CCP",
      link: "/social-credit",
      type: "site",
      img: "./social-credit/eye-pop",
    },
    {
      name: "Wiggle Text",
      description:
        "Make a string of text that appears to be in the shape of a wiggle",
      link: "/wiggle",
      type: "site",
      img: "./imgs/wiggle",
    },
    {
      name: "TimeUtils",
      description:
        "Create Discord timestamps and get your IANA timezone",
      link: "/timeutils",
      type: "site",
      img: "./timeutils/thumb",
    },
  ];

  // Warning — messy code...
  function getProjectHTML(projectType) {
    let projectsHTML = "";
    for (const project of projects) {
      let { name, img, type, link, description } = project;
      let imgHTML = getImage(name, img);
      let display = isType(type, projectType) ? "none" : "flex";
      let descriptionHTML =
        type === "music"
          ? `<p>${description}</p><p class="music-sub tracks">${project.tracks === 1 ? "Single" : `${project.tracks} tracks`
          }</p><p class="music-sub duration">${project.time
          } minutes</p><p class="music-sub date">${project.date}</p>`
          : "<p>" + description + "</p>";

      projectsHTML += `<a class="project project-type-${type} ${project.class || ''
        }" style="display: ${display}" href="${link ? `${link}" target="_blank` : "#"
        }">${imgHTML}<div><h1 data-type="${type}"> ${name}</h1>${descriptionHTML}</div></a>`;


    }

    return projectsHTML;
  }

  function getImage(name, src) {
    if (src) {
      return `<picture>
  <source srcset="${src}.webp" type="image/webp"/>
  <img alt="${name} image" src="${src}.png">
</picture>`
    } else return ""
  }

  function isType(type, projectType) {
    let indices = ["site", "music", "other"];
    if (projectType === "other" && indices.indexOf(type) === -1) return false;
    return type !== projectType;
  }

  // current selected project type
  var pType = {
    string: "site",
    element: $(".select-project-type.site"),
  };


  function switchProjectType(type) {
    let projects = $(".projects");
    // already selected? don't bother
    if (pType.string === type) return;
    let dir = getdir(pType.string, type);
    // move the current block to the (!dir)
    projects.classList.add(`going-${dir === "right" ? "left" : "right"}`);
    // update currently selected
    pType.string = type;
    // add a block with the new content
    var newBlock = document.createElement("div");
    newBlock.innerHTML = getProjectHTML(pType.string);
    // more music link
    if (type === 'music') {
      let mmL = getMoreMusicLink();
      newBlock.append(mmL);
    }
    // hide it in the other direction
    newBlock.classList.add("projects", `coming-${dir}`);
    // append
    projects.parentElement.insertAdjacentElement("afterbegin", newBlock);
    setTimeout(function () {
      // animate it to the center
      newBlock.classList.remove("coming-" + dir);
    });
    setTimeout(function () {
      // then after the transition ends remove the old one
      projects.remove();
    }, 600);
  }
  // gets the direction between two types 
  function getdir(from, to) {
    let indices = ["site", "music", "other"];
    if (indices.indexOf(from) < indices.indexOf(to))
      return "right";
    return "left";
  }

  /********** Listen ***********/
  let projectTypes = $$(".select-project-type"),
    indicator = $(".select-project-type-wrap .indicator");
  for (const select of projectTypes) {
    let rect = {
      parent: select.parentElement.getBoundingClientRect(),
      cur: select.getBoundingClientRect(),
    };
    // when a new project type is selected
    select.addEventListener("click", function () {
      // switch types
      switchProjectType(this.getAttribute("data-type"));
      // update the type switchers
      removeActive(projectTypes);
      pType.element = this;
      this.classList.add("selected");
      updateIndicator(rect);
    });

    // make the indicator update based on hash if there is one
    if (hash)
      if (select.getAttribute("data-type").includes(hash)) {
        removeActive(select.parentElement.children);
        updateIndicator(rect);
        select.classList.add("selected");
        continue;
      }
  }
  function updateIndicator(rect) {
    indicator.style.width = rect.cur.width + "px";
    indicator.style.left = rect.cur.left - rect.parent.left - 5 + "px";
  }
  function removeActive(d) {
    for (const p of d) p.classList.remove("selected");
  }
  /******** more music ********/
  function getMoreMusicLink() {
    let link = document.createElement('a'),
      container = document.createElement('div');
    container.classList.add('more-music-link-container');
    link.classList.add('more-music-link');
    link.onfocus = moreMusicHandler;
    link.innerHTML = 'More music...'
    link.setAttribute('tabindex', 0)
    container.append(link)
    return container;
  }

  let mm_isOpen;
  function moreMusicHandler(e) {
    if (mm_isOpen) return;
    let bcr = e.target.getBoundingClientRect(),
      launcher = document.createElement('div');
    launcher.classList.add('more-music-launcher');

    launcher.style.top = bcr.top + 44 + 'px';
    // update launcher on resize
    window.onresize = () => {
      bcr = e.target.getBoundingClientRect();
      launcher.style.top = bcr.y + 44 + 'px';
    }
    let URLs = {
      "Spotify": "https://open.spotify.com/artist/1mxdLhD07JVKCqNvbzW3l0",
      "Apple_Music": "https://music.apple.com/artist/pineapplerind/1606851499",
      "YouTube_Music": "https://music.youtube.com/channel/UCHBF_eoWre9Um353fOxayww",
      "Tidal": "https://tidal.com/browse/artist/30355280",
      "Amazon_Music": "https://music.amazon.com/artists/B09R3S4YDW/pineapplerind",
      "Deezer": "https://www.deezer.com/artist/158442482",
      "Pandora": "https://www.pandora.com/artist/pineapplerind/ARgXdmk9wgPVqbX"
    }

    for (let [store, url] of Object.entries(URLs)) {
      let btn = document.createElement('a');
      btn.classList.add('more-music-store');
      btn.innerHTML = store.replace('_', ' ');
      btn.href = url;
      btn.setAttribute('target', '_blank')
      launcher.append(btn);

      btn.onclick = () => closeLauncher(launcher);
    }
    mm_isOpen = true;
    document.body.append(launcher);

    /* handle close, wrapped in setTimeout */
    setTimeout(() => {
      document.documentElement.addEventListener('click', e => {
        if (
          (e.target !== launcher)
          &&
          (!e.target.classList.contains('more-music-store'))) {
          mm_isOpen = false;
          closeLauncher(launcher)
        }
      })
    }, 100)
  }

  function closeLauncher(launcher) {
    launcher.classList.add('hidden');
    $('.more-music-link').blur()
    setTimeout(function () {
      launcher.remove();
      mm_isOpen = false;
    }, 400)
  }
  /******** init ********/
  if (hash) switchProjectType(hash)
  else $(".projects").innerHTML += getProjectHTML(pType.string);
})();
