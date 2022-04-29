(function () {
    const transforms: string[] = ['translateY', 'translateX', 'scale', 'rotate', 'rotateX', 'rotateY', 'rotateZ', 'skewX', 'skewY', 'perspective'];
    interface HTMLAnimationOptions {
        properties: {
            [key: string]: {
                values: number[];
                type: any;
            };
        };
        duration?: number;
        frame?: number;
        ease?: string;
    }
    class HTMLAnimation implements HTMLAnimationOptions {
        properties: {
            [key: string]: {
                values: number[];
                type: any;
            };
        };
        element: Element;
        duration: number;
        transformProperties: any;
        ease: string;
        frame: number;
        private currentCSSRules: string;
        private currentFrameCSSRules: string;

        constructor(element: Element, options: HTMLAnimationOptions) {
            this.properties = options.properties;
            this.element = element;
            this.ease = options.ease || 'easeInOutCubic';
            this.duration = options.duration || 1;
            this.currentCSSRules = this.element.getAttribute("style");
            this.currentFrameCSSRules = this.currentCSSRules;
            this.updateElement(this.frame)
        }

        lerp(start: number, end: number, amt: number) {
            return (1 - amt) * start + amt * end;
        }
        parseComplexStyleProperty(str: string) { // https://stackoverflow.com/a/38410027
            // adapted for typescript
            var regex = /(\w+)\((.+?)\)/g, transform: any = {}, match;
            while (match = regex.exec(str)) {
                transform[match[1]] = transform[match[1]]
                    ? transform[match[1]].concat([match[2]])
                    : [match[2]]
            }
            return transform
        }

        start(delay?: number) {
            this.frame = 0;
            delay = delay || 0
            console.log(delay)
            setTimeout(function () {
                window.requestAnimationFrame(this.frameRender.bind(this));
            }.bind(this), delay)
        }
        frameRender() {
            this.frame++;
            if (this.frame > this.duration * 60) {
                console.log('Animation finished');
                return window.cancelAnimationFrame(this.frameRender.bind(this));
            }
            this.updateElement(this.frame);
            window.requestAnimationFrame(this.frameRender.bind(this));
        }
        updateElement(frame: number) {
            this.currentFrameCSSRules = ''
            for (let property in this.properties) { if (transforms.indexOf(property) > -1) { this.transformProperties = 'transform: '; } }
            for (const property of Object.keys(this.properties)) {
                const propVal = this.properties[property];
                let frameAmt = frame / (this.duration * 60);

                if (transforms.indexOf(property) >= 0) {
                    this.transformProperties += `${property}(${this.lerp(
                        propVal.values[0],
                        propVal.values[1],
                        this.eases[this.ease as keyof typeof this.eases](frameAmt))}${propVal.type})`;
                } else {
                    this.currentFrameCSSRules += `${property}: ${this.lerp(
                        propVal.values[0],
                        propVal.values[1],
                        this.eases[this.ease as keyof typeof this.eases](frameAmt))}${propVal.type};`
                }
            }
            this.currentFrameCSSRules += `${this.transformProperties || ''};`;
            this.element.setAttribute("style", `${this.currentCSSRules}; ${this.currentFrameCSSRules}`);
            return
        }

        eases = {
            "linear": function (t: number) { return t; },
            "easeInOutCubic": function (t: number) { return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1; },
            "easeInOutQuint": function (t: number) { return t < 0.5 ? 16 * t * t * t * t * t : 1 + 16 * --t * t * t * t * t; },
        };
    }
    const projects = [
        {
            name: "Bezier Visualizer",
            description: "A site to visualize manipulable, animated Cubic Bezier curves.",
            img: "bezier-visualizer/thumb.png",
            link: "https://pineapplerind.ga/bezier-visualizer",
            type: 'dev'
        },
        {
            name: "Radium",
            description: "A fresh-looking theme for VSCode. Almost radioactive.</p><p class=\"small\">Made with a friend",
            img: 'https://radium-theme.github.io/example.png',
            link: 'https://radium-theme.github.io',
            type: 'other'
        },
        {
            name: "Colours",
            description: "Each song is a color",
            img: 'imgs/colours.png',
            link: 'https://artists.landr.com/pr',
            type: 'music',
            tracks: 6,
            time: 31
        },
        {
            name: "Coming soon",
            description: "???? ?? ? ?-????? ??",
            img: 'imgs/comingsoon.png',
            type: 'music',
            link: false,
            tracks: '?',
            time: '?'
        },
        {
            name: "Social Credit Quiz",
            link: "https://pineapplerind.ga/social-credit",
            description: 'Inspired by the Internet meme, this quiz tests your loyalty to the CCP. Zhong Xina failed, will you?',
            type: 'dev',
            img: './social-credit/eye-pop.png'
        },
        {
            name: "Wiggle Text",
            link: "https://pineapplerind.ga/wiggle",
            description: "Make a string of text that appears to be in the shape of a wiggle",
            type: 'dev',
            img: './imgs/wiggle.png'
        }
    ]


    function loadProjects(projectType: string) {
        var projectsHTML: string = '';
        for (const project of projects) {
            let { name, img, type, link, description } = project;
            let imgHTML = img ? `<img alt="${name}" src="${img}">` : ` `
            let display = type !== projectType ? 'none' : 'flex'
            let descriptionHTML = projectType === 'music' ? `<p>${description}</p><p class="music-sub tracks">${project.tracks} tracks</p><p class="music-sub duration">${project.time} minutes</p>` : `<p>${description}</p>`
            projectsHTML += `
        <a class="project project-type-${type}" style="display: ${display}" href="${link}" target="_blank">
        ${imgHTML}
        <div>
            <h1>${name}</h1>
            ${descriptionHTML}
        </div>
        </a>`
        }
        return projectsHTML
    }
    var pType = {
        string: 'dev',
        element: document.querySelector('.select-project-type.dev')
    }
    document.querySelector('.projects').innerHTML += loadProjects(pType.string);

    function sortProjects(type: string) {
        let projects = document.querySelector('.projects');
        projects.setAttribute('style', 'transition: 0.6s cubic-bezier(.83,0,.25,1)')
        if (pType.string === type) return
        let dir = getdir(pType.string, type)
        projects.classList.add(`going-${not(dir)}`)
        pType.string = type;
        var npDummy = document.createElement('div');
        npDummy.innerHTML = loadProjects(pType.string);
        npDummy.classList.add('projects', `coming-${dir}`);
        projects.parentElement.insertAdjacentElement('afterbegin', npDummy);
        setTimeout(function () { npDummy.classList.remove(`coming-${dir}`); })
        setTimeout(function () {
            projects.remove();
        }, 600)
    }
    function getdir(from: string, to: string) {
        let indices = ['dev', 'music', 'other'];
        if (indices.indexOf(from) < indices.indexOf(to)) return 'right'
        return 'left'
    }
    function not(dir: string) {
        if (dir === 'right') return 'left'
        return 'right'
    }
    let projectTypes = document.querySelectorAll('.select-project-type');
    for (let i = 0; i < projectTypes.length; i++) {
        projectTypes[i].addEventListener('click', function () {
            sortProjects(this.getAttribute('data-type'));
            pType.element.classList.remove('selected')
            this.classList.add('selected')
            pType.element = this;
        })
    }
})()