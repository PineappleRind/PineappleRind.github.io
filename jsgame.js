let btn, cntr, cntrt, counter, firstOption, secondOption, openstore, overlay, closeOverlay, integer;

btn = document.getElementById('clicker');
cntr = document.querySelector('.counter');
cntrt = document.querySelector('.counter-store');
counter = 0;
twotimes = 0;

firstOption = document.getElementById('first');
secondOption = document.getElementById('second');

btn.addEventListener('click', () => {
    main();
    counter++;
})

function main() {
    increase();
    addThingyIForgot();
}

function increase() {
    cntr.innerHTML = counter;
    cntrt.innerHTML = counter;
}

function addThingyIForgot() {
    if (counter >= 50) {
        firstOption.style.opacity = '1';
        firstOption.style.pointerEvents = 'all';
    } else {
        firstOption.style.opacity = '0.4';
        firstOption.style.pointerEvents = 'none';
    }
}

firstOption.addEventListener('click', () => {
    integer = 50;
    counter = counter - integer;
    setTimeout(function() {
        integer = integer + 50;
    }, 10)
    main();
    btn.addEventListener('click', () => {
        counter++;
    })
})

secondOption.addEventListener('click', () => {
    counter = counter - 200;
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