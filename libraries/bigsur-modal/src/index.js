document.body.insertAdjacentHTML('beforeend','<div id="BIGSURMODAL-CONTAINER"></div>')
var BSM_modalShowing = false
var BSM_queue = []
function BigSurModal(obj) {
    try{this.title = obj.title;if (!obj.title) throw new Error('BIG SUR MODAL: Modal needs a title.')} catch(e){return console.error(e)}
    try{this.description = obj.description;if (!obj.description) throw new Error('BIG SUR MODAL: Modal needs a description.')} catch(e){return console.error(e)}
    try{this.buttonContent = obj.buttons;if (!obj.buttons) throw new Error('BIG SUR MODAL: Modal needs buttons.')} catch(e){return console.error(e)}

    if (obj.theme) this.theme = obj.theme
    else {
        this.theme = 'BSM_theme_light'
        obj.theme = 'BSM_theme_light'
    }
    if (obj.appIcon) this.appIcon = obj.appIcon
    else {
        this.appIcon = 'console_logo.png'
        obj.appIcon = 'console_logo.png'
    }
    this.show = function() {
         this.createdModal = BSM_CreateModal(obj.title,obj.description,obj.buttons,obj.appIcon,obj.theme)
    }
    this.close = function() {
        try {
            BSM_DestroyModal(this.createdModal)
            if (!this.createdModal) throw new Error('BIG SUR MODAL: There are no modals currently open to close.')
        } catch (e) {
            console.error(e)
        }
    }
}
var cont = document.getElementById('BIGSURMODAL-CONTAINER')
function BSM_CreateModal(t,d,bc,ic,theme) {
    let buttons = ``

    for (let i = 0; i < bc.length; i++) {
        if (bc.length >= 3) {
            var vertical = 'vertical'
        } else {
            var vertical = ''
        }
        if (!bc[i].default) bc[i].default = false
        try {
            if (!bc[i].name) throw new Error('BIG SUR MODAL: Button ' + i + ' needs a name.')
            if (!bc[i].function) bc[i].function = 'BSM_DestroyModal()'
            buttons += `<button onclick="${bc[i].function};BSM_DestroyModal()" class="BSM-btn ${bc[i].default}">${bc[i].name}</button>`
        } catch(e) {
            console.error(e)
        }
    }
    var html = `
    <div class="BSM-appicon">
        <img src="${ic}">
    </div>
    <h1 class="BSM-title">${t}</h1>
    <h2 class="BSM-description">${d}</h1>
    <div class="BSM-btns ${vertical}">
        ${buttons}
    </div>
    `
    if (BSM_modalShowing == false) BSM_modalShowing = true
    else if (BSM_modalShowing= true) return BSM_queue.push(html)
    let modal = BSM_CreateModalHelper(html,theme)
    BSM_SetClose(modal)
    return modal
}
function BSM_CreateModalHelper(html,theme) {
    let BSM_modal = document.createElement('DIV')
    BSM_modal.innerHTML = html
    BSM_modal.classList.add('BSM-modal')
    BSM_modal.classList.add('BSM_theme_' + theme)
    cont.appendChild(BSM_modal)
    cont.classList.add('overlay')
    console.log(BSM_modal)
    return BSM_modal
}
function BSM_SetClose(modal,defBtn) {
      modal.onkeypress = e => {
          if (e.keyCode == 13) defBtn.click()
          else if (e.keyCode == 27) defBtn.click()
      }
}
function BSM_DestroyModal() {
    let modal = cont.children[0]
    console.log(modal)
    modal.style.animationName = 'comeout'
    BSM_modalShowing = false
    cont.classList.remove('overlay')
    setTimeout(function(){
        modal.remove()
    },80)
    if (BSM_queue.length == 0) return
    else {
        BSM_CreateModalFromQueue(BSM_queue[0])
    }
    console.log('Modal successfully closed')
}
function BSM_CreateModalFromQueue(html) {
    setTimeout(() => {
        BSM_CreateModalHelper(html)
        BSM_queue.shift()
    }, 100);
}
