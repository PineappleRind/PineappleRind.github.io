var TestWindow = {
    update: function (page,num,toupdate) {
        if (!toupdate) var toupdate = TestWindow.getPageHTML(page,num)
        document.body.classList.add('transitioning')
        setTimeout(function () {
            document.body.classList.remove('transitioning')
            document.body.innerHTML = toupdate
        }, 200)
    },
    getPageHTML: function (page,num) {
        if (!num) num = 0
        let html = ``
        html += `<h1>${page.title}</h1>
        <p>${page.description}</p>
        <div class="buttons-cont">`
        for (let i = 0; i < page.buttons.length; i++) {
            html += `<button onclick="pages[${num}].buttons[${i}].action()">${page.buttons[i].name}</button>`
        }
        html += `</div>`
        return html
    },
    getComparisonHTML: function(obj) {
        let html = ``
        html += `<h1>${obj.title}</h1>`
        for (let i = 0; i < functions.length; i++) {

        }
    },
    beginTest: function() {
        TestWindow.update(null,null,TestWindow.getComparisonHTML(pages[6]))
    },
    nextComparison: function() {
        TestWindow.update(null,null,TestWindow.getComparisonHTML(pages[6]))
    }
}