let btn, cntr, counter, firstOption, openstore, overlay, closeOverlay;

btn = document.getElementById('clicker');
cntr = document.querySelector('.counter');
counter = 0;

firstOption = document.getElementById('first');

setInterval(function(){
    if (counter >= 5) {
        firstOption.style.opacity = '1';
        firstOption.style.cursor = 'pointer';
        firstOption.style.pointerEvents = 'all';
    }
}, 1000)
btn.addEventListener('click', () => {
    counter++;
    cntr.innerHTML = counter;
})

openstore = document.querySelector('.open-store');
overlay = document.querySelector('.store-overlay');
closeOverlay = document.getElementById('closeOverlay');

openstore.addEventListener('click', () => {
    overlay.style.display = 'flex';
    setTimeout(() => {
        overlay.classList.add('showing');
    }, 100)
})

closeOverlay.addEventListener('click', () => {
    overlay.classList.remove('showing');
    setTimeout(() => {
        overlay.style.display = 'none';
    }, 1000)
})