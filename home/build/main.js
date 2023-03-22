/* hey there
   so this is the first iteration of cleaning up
   my old, bad homepage code. there's still a bit
   to do but it's a good start (:
*/
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var _a, _b, _c;
import { projects } from "./projects";
const TRANSITION_LENGTH_MS = 600;
let hash = window.location.hash.substring(1);
const $ = document.querySelector.bind(document);
const $$ = (el) => document.querySelectorAll(el);
// createElement utility
function createElement(type, attrs, value) {
    let el = document.createElement(type);
    if (attrs)
        attrs.split(";").forEach((t) => {
            if (!t)
                return;
            let e = t.split(/(?<!\\)\=/gm);
            el.setAttribute(e[0].trim(), e[1].trim().replace("\\", ""));
        });
    el.innerHTML = value || "";
    return el;
}
class ProjectManager {
    constructor(projects) {
        /* The functions here are imperative :| */
        this.generate = {
            /* main generation function; generates a project card */
            project(project) {
                const { name, img: url, type, link, description: desc = "" } = project;
                let card = this.generate.container(type, link), infoContainer = createElement("div"), heading = createElement("h1", `data-type=${type}`, name), picture = this.generate.image(name, url), 
                // description elements
                description = [createElement("p", null, desc)];
                // add music metadata if necessary
                if (project.metadata)
                    description.push(...this.generate.musicMetadata(project.metadata));
                infoContainer.append(heading, ...description);
                card.append(picture, infoContainer);
                return card;
            },
            /* generation helpers; generates the container surrounding the project */
            container(type, link) {
                // create container initialized with its type
                let container = createElement("a", `class=project project-type-${type}`);
                // add its <a> stuff, if necessary
                if (link) {
                    container.href = link;
                    container.setAttribute("target", "_blank");
                }
                return container;
            },
            // thumbnail generator
            image(name, url) {
                if (!url)
                    return "";
                let picture = createElement("picture"), source = createElement("source", `srcset=${url}.webp;type=image/webp`), fallback = createElement("img", `alt=${name} image;src=${url}.png`);
                picture.append(source, fallback);
                return picture;
            },
            musicMetadata(metadata) {
                let output = [];
                for (const item in metadata) {
                    let element = createElement('p', `class=music-sub ${item}`, metadata[item]);
                    // add plural units if necessary
                    if (item === 'time')
                        element.textContent += ` minutes`;
                    else if (item === 'tracks') {
                        // deal with singles as well 
                        if (metadata[item] === 1)
                            element.textContent = 'single';
                        else
                            element.textContent += ` tracks`;
                    }
                    output.push(element);
                }
                return output;
            },
        };
        this.projects = projects;
        this.container = $(".projects-wrap");
        this.animator = new PaneAnimator(this.container);
    }
    getCardsForPane(pane) {
        let result = [];
        // append a project for each project
        for (const project of this.projects) {
            if (project.type !== pane)
                continue;
            let projectEl = this.generate.project.apply(this, [project]);
            result.push(projectEl);
        }
        // Add more music link if applicable
        if (pane === "music")
            result.push(getMoreMusicLink());
        return result;
    }
    /**
     * Generates div.projects, full of projects only of type `pane`, and returns it.
     */
    newBlock(pane) {
        let newBlock = createElement("div", `class=projects;data-type=${pane}`);
        for (const card of this.getCardsForPane(pane))
            newBlock.append(card);
        return newBlock;
    }
    /**
     * Loads a pane without animating it in.
     * This function should only be called once.
     * It assumes .projects-wrap is empty.
     */
    load(pane) {
        let newBlock = this.newBlock(pane);
        this.previousBlock = newBlock;
        this.container.append(newBlock);
    }
    switch(pane) {
        return __awaiter(this, void 0, void 0, function* () {
            let newBlock = this.newBlock(pane);
            yield this.animator.requestSwitch(newBlock, pane);
            // console.log("Did", this.previousBlock.dataset.type, pane)
        });
    }
}
class PaneAnimator {
    constructor(container) {
        // if `from` -> `to` is moving right, 1; otherwise, -1
        this.getDirection = (from, to) => this.types.indexOf(from) < this.types.indexOf(to) ? 1 : -1;
        this.container = container;
        this.showing = "site";
        this.types = ["site", "music", "other"];
        this.directionMap = { "1": "right", "-1": "left" };
    }
    requestSwitch(newBlock, pane) {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.showing === pane || !this.types.includes(pane)) {
                // console.log("Denied",this.showing,pane)
                return 1;
            }
            let s = this.showing;
            // console.log(`Doing ${s} ${pane}`);
            this.showing = pane;
            yield this.switchToPane($(`.projects[data-type=${s}]`), newBlock, pane);
        });
    }
    // Use $(`.projects[data-type=${currentBlock.dataset.type}]`) instead of currentBlock because
    // of something I have no idea how to go about thinking about, but it has to do with multiple
    // project container of the same type...
    switchToPane(currentBlock, newBlock, pane) {
        return __awaiter(this, void 0, void 0, function* () {
            const direction = this.getDirection(this.showing, pane);
            // Move currently showing block away from this direction
            $(`.projects[data-type=${currentBlock.dataset.type}]`).classList.add(`going-${this.directionMap[-direction]}`);
            // Hide the new block towards this direction
            newBlock.classList.add(`coming-${this.directionMap[direction]}`);
            this.container.append(newBlock);
            // Wait until the next event loop to make sure we're not 
            // adding and removing the class at the same time
            yield new Promise(resolve => setTimeout(resolve, 10));
            newBlock.classList.remove(`coming-${this.directionMap[direction]}`);
            // Remove the old block after the transition ends
            yield new Promise(resolve => setTimeout(resolve, TRANSITION_LENGTH_MS));
            $(`.projects[data-type=${currentBlock.dataset.type}]`).remove();
        });
    }
}
/******** init ********/
let projectLoader = new ProjectManager(projects);
projectLoader.load(hash || 'site');
/********** Listen ***********/
let projectTypes = $$(".select-project-type"), indicator = $(".select-project-type-wrap .indicator");
for (const select of Array.from(projectTypes)) {
    let rect = {
        parent: (_a = select.parentElement) === null || _a === void 0 ? void 0 : _a.getBoundingClientRect(),
        cur: select.getBoundingClientRect(),
    };
    // when a new project type is selected
    select.addEventListener("click", function () {
        // switch types
        projectLoader.switch.apply(projectLoader, [this.getAttribute("data-type")]);
        // update the type switchers
        removeActive(projectTypes);
        this.classList.add("selected");
        updateIndicator(rect);
    });
    // make the indicator update based on hash if there is one
    if (hash)
        if ((_b = select.getAttribute("data-type")) === null || _b === void 0 ? void 0 : _b.includes(hash)) {
            removeActive((_c = select.parentElement) === null || _c === void 0 ? void 0 : _c.children);
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
    for (const p of Array.from(d))
        p.classList.remove("selected");
}
/******** more music ********/
function getMoreMusicLink() {
    let link = document.createElement("a"), container = document.createElement("div");
    container.classList.add("more-music-link-container");
    link.classList.add("more-music-link");
    link.onfocus = moreMusicHandler;
    link.onblur = () => {
        mm_isOpen = false;
        closeLauncher();
    };
    link.innerHTML = "More music...";
    link.setAttribute("tabindex", "0");
    container.append(link);
    return container;
}
let mm_isOpen;
function moreMusicHandler(e) {
    if (mm_isOpen)
        return;
    let bcr = e.target.getBoundingClientRect(), launcher = document.createElement("div");
    launcher.classList.add("more-music-launcher");
    launcher.style.top = bcr.top + 44 + "px";
    // update launcher on resize
    window.onresize = () => {
        bcr = e.target.getBoundingClientRect();
        launcher.style.top = bcr.y + 44 + "px";
    };
    let URLs = {
        Spotify: "https://open.spotify.com/artist/1mxdLhD07JVKCqNvbzW3l0",
        Apple_Music: "https://music.apple.com/artist/pineapplerind/1606851499",
        YouTube_Music: "https://music.youtube.com/channel/UCHBF_eoWre9Um353fOxayww",
        Tidal: "https://tidal.com/browse/artist/30355280",
        Amazon_Music: "https://music.amazon.com/artists/B09R3S4YDW/pineapplerind",
        Deezer: "https://www.deezer.com/artist/158442482",
        Pandora: "https://www.pandora.com/artist/pineapplerind/ARgXdmk9wgPVqbX",
    };
    for (let [store, url] of Object.entries(URLs)) {
        let btn = document.createElement("a");
        btn.classList.add("more-music-store");
        btn.innerHTML = store.replace("_", " ");
        btn.href = url;
        btn.setAttribute("target", "_blank");
        launcher.append(btn);
        btn.onmouseup = () => closeLauncher();
    }
    mm_isOpen = true;
    document.body.append(launcher);
}
function closeLauncher() {
    let launcher = $(".more-music-launcher");
    launcher.classList.add("hidden");
    $(".more-music-link").blur();
    setTimeout(function () {
        launcher.remove();
        mm_isOpen = false;
    }, 400);
}
/********* animation *********/
for (const [i, element] of Array.from($$(".animate-hidden")).entries()) {
    setTimeout(() => {
        element.classList.remove("animate-hidden");
    }, (i + 1) * 100);
}
