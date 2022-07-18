(function () {
    let hash = window.location.hash.substring(1);
    const $ = document.querySelector.bind(document);
    const $$ = document.querySelectorAll.bind(document);
    if (hash)
        for (let i = 0; i < $$('.select-project-type').length; i++) {
            const select = $$('.select-project-type')[i];
            if (select.getAttribute('data-type').includes(hash)) {
                removeActive(select.parentElement);
                select.classList.add('selected');
                break;
            }
        }
    const projects = [{
            name: "Bezier Visualizer", description: "A site to visualize manipulable, animated Cubic Bezier curves.",
            img: "bezier-visualizer/thumb.png",
            link: "/bezier-visualizer",
            type: 'site'
        }, {
            name: "Radium", description: "A fresh-looking theme for VSCode. Almost radioactive.</p><p class=\"small\">Made with a friend",
            img: 'https://radium-theme.github.io/example.png',
            link: 'https://radium-theme.github.io',
            type: 'theme'
        }, {
            name: "Colours", description: "Album (2022)",
            img: '/music/colours/colours.png',
            link: 'https://artists.landr.com/pr',
            type: 'music', tracks: 6, time: 31
        }, {
            name: "Polyhedra", description: "Single (2022)",
            img: 'imgs/polyhedra',
            type: 'music',
            link: '/music/polyhedra/polyhedra.thumb.png', tracks: 1, time: 3
        }, {
            name: "Social Credit Quiz",
            description: 'Inspired by the Internet meme, this quiz tests your loyalty to the CCP',
            link: "/social-credit",
            type: 'site',
            img: './social-credit/eye-pop.png'
        }, {
            name: "Wiggle Text",
            description: "Make a string of text that appears to be in the shape of a wiggle",
            link: "/wiggle",
            type: 'site',
            img: './imgs/wiggle.png'
        }];
    function loadProjects(projectType) {
        var projectsHTML = '';
        for (const project of projects) {
            let { name, img, type, link, description } = project;
            let imgHTML = img ? '<img alt="' + name + '" src="' + img + '">' : '';
            let display = isType(type, projectType) ? 'none' : 'flex';
            let descriptionHTML = type === "music" ? `<p>${description}</p><p class="album-sub tracks">${project.tracks === 1 ? "Single" : `${project.tracks} tracks`}</p><p class="album-sub duration">${project.time} minutes</p>` : '<p>' + description + '</p>';
            projectsHTML += '<a class="project project-type-' + type + '" style="display: ' + display + '" href="' + link + '" target="_blank">' + imgHTML + '<div><h1 data-type="' + type + '"> ' + name + '</h1>' + descriptionHTML + '</div></a>';
        }
        return projectsHTML;
    }
    function isType(type, projectType) {
        let indices = ['site', 'music', 'other'];
        if (projectType === 'other' && indices.indexOf(type) === -1)
            return false;
        return type !== projectType;
    }
    var pType = {
        string: hash ? hash : 'site',
        element: hash ? $('.select-project-type.' + hash) : $('.select-project-type.site')
    };
    if (hash)
        pType.element.classList.add('active');
    $('.projects').innerHTML += loadProjects(pType.string);
    function sortProjects(type) {
        let projects = $('.projects');
        if (pType.string === type)
            return;
        let dir = getdir(pType.string, type);
        projects.classList.add(('going-' + (dir === 'right' ? 'left' : 'right')));
        pType.string = type;
        var npDummy = document.createElement('div');
        npDummy.innerHTML = loadProjects(pType.string);
        npDummy.classList.add('projects', ('coming-' + dir));
        projects.parentElement.insertAdjacentElement('afterbegin', npDummy);
        setTimeout(function () { npDummy.classList.remove('coming-' + dir); });
        setTimeout(function () {
            projects.remove();
        }, 600);
    }
    function getdir(from, to) {
        let indices = ['site', 'music', 'other'];
        if (indices.indexOf(from) < indices.indexOf(to))
            return 'right';
        return 'left';
    }
    let projectTypes = $$('.select-project-type');
    for (let i = 0; i < projectTypes.length; i++) {
        projectTypes[i].addEventListener('click', function () {
            sortProjects(this.getAttribute('data-type'));
            removeActive(projectTypes);
            pType.element = this;
            window.location.hash = this.getAttribute('data-type');
            this.classList.add('selected');
        });
    }
    function removeActive(projectTypes) {
        for (let i = 0; i < projectTypes.length; i++)
            projectTypes[i].classList.remove('selected');
    }
})();
