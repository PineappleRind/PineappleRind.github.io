var TestWindow = {
    update: function (page,num) {
        document.body.classList.add('transitioning')
        setTimeout(function () {
            document.body.classList.remove('transitioning')
            document.body.innerHTML = TestWindow.getPageHTML(page,num)
        }, 200)
    },
    getPageHTML: function (page,num) {
        if (!num) num = 0
        let html = ``
        html += `<h1>${page.title}</h1>`
        html += `<p>${page.description}</p>`
        html += `<div class="buttons-cont">`
        for (let i = 0; i < page.buttons.length; i++) {
            html += `<button onclick="pages[${num}].buttons[${i}].action()">${page.buttons[i].name}</button>`
        }
        html += `</div>`
        return html
    }
}