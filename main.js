(function () {
    var transforms = ['translateY', 'translateX', 'scale', 'rotate', 'rotateX', 'rotateY', 'rotateZ', 'skewX', 'skewY', 'perspective'];
    var HTMLAnimation = /** @class */ (function () {
        function HTMLAnimation(element, options) {
            this.eases = {
                "linear": function (t) { return t; },
                "easeInOutCubic": function (t) { return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1; },
                "easeInOutQuint": function (t) { return t < 0.5 ? 16 * t * t * t * t * t : 1 + 16 * --t * t * t * t * t; },
            };
            this.properties = options.properties;
            this.element = element;
            this.ease = options.ease || 'easeInOutCubic';
            this.duration = options.duration || 1;
            this.currentCSSRules = this.element.getAttribute("style");
            this.currentFrameCSSRules = this.currentCSSRules;
            this.updateElement(this.frame);
        }
        HTMLAnimation.prototype.lerp = function (start, end, amt) {
            return (1 - amt) * start + amt * end;
        };
        HTMLAnimation.prototype.parseComplexStyleProperty = function (str) {
            // adapted for typescript
            var regex = /(\w+)\((.+?)\)/g, transform = {}, match;
            while (match = regex.exec(str)) {
                transform[match[1]] = transform[match[1]]
                    ? transform[match[1]].concat([match[2]])
                    : [match[2]];
            }
            return transform;
        };
        HTMLAnimation.prototype.start = function (delay) {
            this.frame = 0;
            delay = delay || 0;
            console.log(delay);
            setTimeout(function () {
                window.requestAnimationFrame(this.frameRender.bind(this));
            }.bind(this), delay);
        };
        HTMLAnimation.prototype.frameRender = function () {
            this.frame++;
            if (this.frame > this.duration * 60) {
                console.log('Animation finished');
                return window.cancelAnimationFrame(this.frameRender.bind(this));
            }
            this.updateElement(this.frame);
            window.requestAnimationFrame(this.frameRender.bind(this));
        };
        HTMLAnimation.prototype.updateElement = function (frame) {
            this.currentFrameCSSRules = '';
            for (var property in this.properties) {
                if (transforms.indexOf(property) > -1) {
                    this.transformProperties = 'transform: ';
                }
            }
            for (var _i = 0, _a = Object.keys(this.properties); _i < _a.length; _i++) {
                var property = _a[_i];
                var propVal = this.properties[property];
                var frameAmt = frame / (this.duration * 60);
                if (transforms.indexOf(property) >= 0) {
                    this.transformProperties += "".concat(property, "(").concat(this.lerp(propVal.values[0], propVal.values[1], this.eases[this.ease](frameAmt))).concat(propVal.type, ")");
                }
                else {
                    this.currentFrameCSSRules += "".concat(property, ": ").concat(this.lerp(propVal.values[0], propVal.values[1], this.eases[this.ease](frameAmt))).concat(propVal.type, ";");
                }
            }
            this.currentFrameCSSRules += "".concat(this.transformProperties || '', ";");
            this.element.setAttribute("style", "".concat(this.currentCSSRules, "; ").concat(this.currentFrameCSSRules));
            return;
        };
        return HTMLAnimation;
    }());
    var projects = [
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
    ];
    function loadProjects(projectType) {
        var projectsHTML = '';
        for (var _i = 0, projects_1 = projects; _i < projects_1.length; _i++) {
            var project = projects_1[_i];
            var name_1 = project.name, img = project.img, type = project.type, link = project.link, description = project.description;
            var imgHTML = img ? "<img alt=\"".concat(name_1, "\" src=\"").concat(img, "\">") : " ";
            var display = type !== projectType ? 'none' : 'flex';
            var descriptionHTML = projectType === 'music' ? "<p>".concat(description, "</p><p class=\"music-sub tracks\">").concat(project.tracks, " tracks</p><p class=\"music-sub duration\">").concat(project.time, " minutes</p>") : "<p>".concat(description, "</p>");
            projectsHTML += "\n        <a class=\"project project-type-".concat(type, "\" style=\"display: ").concat(display, "\" href=\"").concat(link, "\" target=\"_blank\">\n        ").concat(imgHTML, "\n        <div>\n            <h1>").concat(name_1, "</h1>\n            ").concat(descriptionHTML, "\n        </div>\n        </a>");
        }
        return projectsHTML;
    }
    var pType = {
        string: 'dev',
        element: document.querySelector('.select-project-type.dev')
    };
    document.querySelector('.projects').innerHTML += loadProjects(pType.string);
    function sortProjects(type) {
        var projects = document.querySelector('.projects');
        projects.setAttribute('style', 'transition: 0.6s cubic-bezier(.83,0,.25,1)');
        if (pType.string === type)
            return;
        var dir = getdir(pType.string, type);
        projects.classList.add("going-".concat(not(dir)));
        pType.string = type;
        var npDummy = document.createElement('div');
        npDummy.innerHTML = loadProjects(pType.string);
        npDummy.classList.add('projects', "coming-".concat(dir));
        projects.parentElement.insertAdjacentElement('afterbegin', npDummy);
        setTimeout(function () { npDummy.classList.remove("coming-".concat(dir)); });
        setTimeout(function () {
            projects.remove();
        }, 600);
    }
    function getdir(from, to) {
        var indices = ['dev', 'music', 'other'];
        if (indices.indexOf(from) < indices.indexOf(to))
            return 'right';
        return 'left';
    }
    function not(dir) {
        if (dir === 'right')
            return 'left';
        return 'right';
    }
    var projectTypes = document.querySelectorAll('.select-project-type');
    for (var i = 0; i < projectTypes.length; i++) {
        projectTypes[i].addEventListener('click', function () {
            sortProjects(this.getAttribute('data-type'));
            pType.element.classList.remove('selected');
            this.classList.add('selected');
            pType.element = this;
        });
    }
})();
