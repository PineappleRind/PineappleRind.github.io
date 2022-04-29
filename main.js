(function () {
    var transforms = ['translateY', 'translateX', 'scale', 'rotate', 'rotateX', 'rotateY', 'rotateZ', 'skewX', 'skewY', 'perspective'];
    var hash = window.location.hash.substring(1);
    var $ = document.querySelector.bind(document);
    var $$ = document.querySelectorAll.bind(document);
    for (var i = 0; i < $$('.select-project-type').length; i++) {
        var select = $$('.select-project-type')[i];
        if (select.getAttribute('data-type').includes(hash)) {
            select.classList.add('selected');
            break;
        }
    }
    var projects = [
        {
            name: "Bezier Visualizer",
            description: "A site to visualize manipulable, animated Cubic Bezier curves.",
            img: "bezier-visualizer/thumb.png",
            link: "https://pineapplerind.ga/bezier-visualizer",
            type: 'site'
        },
        {
            name: "Radium",
            description: "A fresh-looking theme for VSCode. Almost radioactive.</p><p class=\"small\">Made with a friend",
            img: 'https://radium-theme.github.io/example.png',
            link: 'https://radium-theme.github.io',
            type: 'theme'
        },
        {
            name: "Colours",
            description: "Each song is a color",
            img: 'imgs/colours.png',
            link: 'https://artists.landr.com/pr',
            type: 'album',
            tracks: 6,
            time: 31
        },
        {
            name: "Coming soon",
            description: "???? ?? ? ?-????? ??",
            img: 'imgs/comingsoon.png',
            type: 'album',
            link: false,
            tracks: '?',
            time: '?'
        },
        {
            name: "Social Credit Quiz",
            link: "https://pineapplerind.ga/social-credit",
            description: 'Inspired by the Internet meme, this quiz tests your loyalty to the CCP',
            type: 'site',
            img: './social-credit/eye-pop.png'
        },
        {
            name: "Wiggle Text",
            link: "https://pineapplerind.ga/wiggle",
            description: "Make a string of text that appears to be in the shape of a wiggle",
            type: 'site',
            img: './imgs/wiggle.png'
        }
    ];
    function loadProjects(projectType) {
        var projectsHTML = '';
        for (var _i = 0, projects_1 = projects; _i < projects_1.length; _i++) {
            var project = projects_1[_i];
            var name_1 = project.name, img = project.img, type = project.type, link = project.link, description = project.description;
            var imgHTML = img ? "<img alt=\"".concat(name_1, "\" src=\"").concat(img, "\">") : " ";
            var display = isType(type, projectType) ? 'none' : 'flex';
            var descriptionHTML = type === 'album' ? "<p>".concat(description, "</p><p class=\"album-sub tracks\">").concat(project.tracks, " tracks</p><p class=\"album-sub duration\">").concat(project.time, " minutes</p>") : "<p>".concat(description, "</p>");
            projectsHTML += "\n        <a class=\"project project-type-".concat(type, "\" style=\"display: ").concat(display, "\" href=\"").concat(link, "\" target=\"_blank\">\n        ").concat(imgHTML, "\n        <div>\n            <h1 data-type=\"").concat(type, "\"> ").concat(name_1, "</h1>\n            ").concat(descriptionHTML, "\n        </div>\n        </a>");
        }
        return projectsHTML;
    }
    function isType(type, projectType) {
        var indices = ['all', 'site', 'album', 'other'];
        if (projectType === 'other' && indices.indexOf(type) === -1)
            return false;
        return type !== projectType;
    }
    var pType = {
        string: hash ? hash : '',
        element: hash ? $('.select-project-type.' + hash) : $('.select-project-type.site')
    };
    if (hash) {
        pType.element.classList.add('active');
    }
    $('.projects').innerHTML += loadProjects(pType.string);
    function sortProjects(type) {
        var projects = $('.projects');
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
        var indices = ['site', 'album', 'other'];
        if (indices.indexOf(from) < indices.indexOf(to))
            return 'right';
        return 'left';
    }
    function not(dir) {
        if (dir === 'right')
            return 'left';
        return 'right';
    }
    var projectTypes = $$('.select-project-type');
    for (var i = 0; i < projectTypes.length; i++) {
        projectTypes[i].addEventListener('click', function () {
            sortProjects(this.getAttribute('data-type'));
            removeActive(projectTypes);
            pType.element = this;
            window.location.hash = this.getAttribute('data-type');
            this.classList.add('selected');
        });
    }
    function removeActive(projectTypes) {
        for (var i = 0; i < projectTypes.length; i++)
            projectTypes[i].classList.remove('selected');
    }
})();
