/* hey there 
   so this is the first iteration of cleaning up
   my old, bad homepage code. there's still a bit
   to do but it's a good start (:
*/

import { projects } from "./projects";
import type { MusicProject, Project, Projects } from "./types";

const TRANSITION_LENGTH_MS = 600;

let hash = window.location.hash.substring(1);
const $ = document.querySelector.bind(document);
const $$ = (el: string): NodeListOf<Element> => document.querySelectorAll(el);

// createElement utility
function createElement(type: string, attrs?: string | null, value?: string) {
    let el = document.createElement(type);
    if (attrs)
        attrs.split(";").forEach((t) => {
            if (!t) return;
            let e = t.split(/(?<!\\)\=/gm);
            el.setAttribute(e[0].trim(), e[1].trim().replace("\\", ""));
        });
    el.innerHTML = value || "";
    return el;
}

class ProjectManager {
    projects: Projects;
    animator: PaneAnimator;
    container: HTMLElement;
    previousBlock: HTMLElement;

    constructor(projects: Projects) {
        this.projects = projects;
        this.container = $(".projects-wrap");
        this.animator = new PaneAnimator(this.container);
    }

    getCardsForPane(pane: string): HTMLElement[] {
        let result: HTMLElement[] = [];
        // append a project for each project
        for (const project of this.projects) {
            if (project.type !== pane) continue;
            let projectEl = this.generate.project.apply(this, [project]);
            result.push(projectEl);
        }
        // Add more music link if applicable
        if (pane === "music") result.push(getMoreMusicLink());

        return result;
    }
    /* The functions here are imperative :| */
    generate = {
        /* main generation function; generates a project card */
        project(project: Project | MusicProject): HTMLElement {
            const { name, img: url, type, link, description: desc = "" } = project;
            let card = this.generate.container(type, link),
                infoContainer = createElement("div"),
                heading = createElement("h1", `data-type=${type}`, name),
                picture = this.generate.image(name, url),
                // description elements
                description = [createElement("p", null, desc)];
            // add music metadata if necessary
            if ((project as MusicProject).metadata)
                description.push(...this.generate.musicMetadata((project as MusicProject).metadata));

            infoContainer.append(heading, ...description);
            card.append(picture, infoContainer);

            return card;
        },
        /* generation helpers; generates the container surrounding the project */
        container(type: string, link: string) {
            // create container initialized with its type
            let container = createElement("a", `class=project project-type-${type}`) as HTMLAnchorElement;
            // add its <a> stuff, if necessary
            if (link) {
                container.href = link;
                container.setAttribute("target", "_blank");
            }

            return container;
        },
        // thumbnail generator
        image(name: string, url: string) {
            if (!url) return "";
            let picture = createElement("picture"),
                source = createElement("source", `srcset=${url}.webp;type=image/webp`),
                fallback = createElement("img", `alt=${name} image;src=${url}.png`);
            picture.append(source, fallback);
            return picture;
        },
        musicMetadata(metadata) {
            let output: HTMLElement[] = [];
            for (const item in metadata) {
                let element = createElement('p', `class=music-sub ${item}`, metadata[item]);
                // add plural units if necessary
                if (item === 'time') element.textContent += ` minutes`;
                else if (item === 'tracks') {
                    // deal with singles as well 
                    if (metadata[item] === 1) element.textContent = 'single';
                    else element.textContent += ` tracks`;
                }

                output.push(element);
            }
            return output;
        },
    };
    /**
     * Generates div.projects, full of projects only of type `pane`, and returns it.
     */
    newBlock(pane: string) {
        let newBlock = createElement("div", `class=projects;data-type=${pane}`);
        for (const card of this.getCardsForPane(pane)) newBlock.append(card);
        return newBlock;
    }
    /**
     * Loads a pane without animating it in.
     * This function should only be called once. 
     * It assumes .projects-wrap is empty.
     */
    load(pane: string) {
        let newBlock = this.newBlock(pane);
        this.previousBlock = newBlock;
        this.container.append(newBlock);
    }

    async switch(pane: string) {
        let newBlock = this.newBlock(pane);
        await this.animator.requestSwitch(newBlock, pane);
        console.log("Did", this.previousBlock.dataset.type, pane)
    }
}

class PaneAnimator {
    container: HTMLElement;
    showing: string;
    types: string[];
    directionMap: { [x: string]: string }
    constructor(container: HTMLElement) {
        this.container = container;
        this.showing = "site";
        this.types = ["site", "music", "other"];
        this.directionMap = { "1": "right", "-1": "left" }
    }

    async requestSwitch(newBlock: HTMLElement, pane: string): Promise<void | 1> {
        if (this.showing === pane || !this.types.includes(pane)) {
            // console.log("Denied",this.showing,pane)
            return 1;
        }

        let s = this.showing;
        // console.log(`Doing ${s} ${pane}`);
        await this.switchToPane($(`.projects[data-type=${s}]`), newBlock, pane);
    }


    // Use $(`.projects[data-type=${currentBlock.dataset.type}]`) instead of currentBlock because
    // of something I have no idea how to go about thinking about, but it has to do with multiple
    // project container of the same type...
    private async switchToPane(currentBlock: HTMLElement, newBlock: HTMLElement, pane: string) {
        const direction = this.getDirection(this.showing, pane)
        this.showing = pane;
        // Move currently showing block away from this direction
        $(`.projects[data-type=${currentBlock.dataset.type}]`).classList.add(`going-${this.directionMap[-direction]}`);
        // Hide the new block towards this direction
        newBlock.classList.add(`coming-${this.directionMap[direction]}`);
        this.container.append(newBlock);
        // Wait until the next event loop to make sure we're not 
        // adding and removing the class at the same time
        await new Promise(resolve => setTimeout(resolve, 10))
        newBlock.classList.remove(`coming-${this.directionMap[direction]}`);
        // Remove the old block after the transition ends
        await new Promise(resolve => setTimeout(resolve, TRANSITION_LENGTH_MS))
        $(`.projects[data-type=${currentBlock.dataset.type}]`).remove();
    }

    // if `from` -> `to` is moving right, 1; otherwise, -1
    getDirection = (from: string, to: string) =>
        this.types.indexOf(from) < this.types.indexOf(to) ? 1 : -1
}

/******** init ********/
let projectLoader = new ProjectManager(projects);
projectLoader.load(hash || 'site');

/********** Listen ***********/
let projectTypes = $$(".select-project-type"),
    indicator = $(".select-project-type-wrap .indicator");
for (const select of Array.from(projectTypes)) {
    let rect = {
        parent: select.parentElement?.getBoundingClientRect(),
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
        if (select.getAttribute("data-type")?.includes(hash)) {
            removeActive(select.parentElement?.children);
            updateIndicator(rect);
            select.classList.add("selected");
            continue;
        }
}
function updateIndicator(rect) {
    indicator.style.width = rect.cur.width + "px";
    indicator.style.left = rect.cur.left - rect.parent.left - 5 + "px";
}
function removeActive(d: HTMLCollection | NodeListOf<Element>) {
    for (const p of Array.from(d))
        p.classList.remove("selected");
}
/******** more music ********/
function getMoreMusicLink() {
    let link = document.createElement("a"),
        container = document.createElement("div");
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
    if (mm_isOpen) return;
    let bcr = e.target.getBoundingClientRect(),
        launcher = document.createElement("div");
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
        YouTube_Music:
            "https://music.youtube.com/channel/UCHBF_eoWre9Um353fOxayww",
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
