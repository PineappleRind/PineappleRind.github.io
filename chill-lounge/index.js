let modal = document.getElementById('overlay');
let modalButton = document.getElementById('link');

function linkConfirm(link) {
    modal.style.display = 'flex';
    setTimeout(function(){
        modal.style.transform = 'scale(1.1)'
        modal.style.opacity = '1'
    },10)
    modalButton.setAttribute('onclick', "window.location.href = '" + link + "'");
}

function linkClose() {
    modal.style.transform = 'scale(1.4)'
    modal.style.opacity = '0'
    setTimeout(function(){
        modal.style.display = 'none';
    },300)
}