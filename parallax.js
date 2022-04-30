let svg = {
    base: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 900 600" preserveAspectRatio="none"version="1.1">
<rect x="0" y="0" width="900" height="600" fill="#11112a"/>
</svg>`,
    wave1: `<svg class="wave" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 900 600" preserveAspectRatio="none" version="1.1">
    <path d="M0 274L21.5 278.3C43 282.7 86 291.3 128.8 294.8C171.7 298.3 214.3 296.7 257.2 297.8C300 299 343 303 385.8 303.3C428.7 303.7 471.3 300.3 514.2 282.8C557 265.3 600 233.7 642.8 231.7C685.7 229.7 728.3 257.3 771.2 268.8C814 280.3 857 275.7 878.5 273.3L900 271L900 601L878.5 601C857 601 814 601 771.2 601C728.3 601 685.7 601 642.8 601C600 601 557 601 514.2 601C471.3 601 428.7 601 385.8 601C343 601 300 601 257.2 601C214.3 601 171.7 601 128.8 601C86 601 43 601 21.5 601L0 601Z" fill="#5849b0"/>
    </svg>`,
    wave2: `<svg class="wave" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 900 600" preserveAspectRatio="none" version="1.1">
    <path d="M0 281L21.5 284.2C43 287.3 86 293.7 128.8 303.7C171.7 313.7 214.3 327.3 257.2 319.3C300 311.3 343 281.7 385.8 288.7C428.7 295.7 471.3 339.3 514.2 360.3C557 381.3 600 379.7 642.8 367.2C685.7 354.7 728.3 331.3 771.2 313.5C814 295.7 857 283.3 878.5 277.2L900 271L900 601L878.5 601C857 601 814 601 771.2 601C728.3 601 685.7 601 642.8 601C600 601 557 601 514.2 601C471.3 601 428.7 601 385.8 601C343 601 300 601 257.2 601C214.3 601 171.7 601 128.8 601C86 601 43 601 21.5 601L0 601Z" fill="#423b8c"/>
    </svg>`,
    wave3: `<svg class="wave" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 900 600" preserveAspectRatio="none" version="1.1">
    <path d="M0 433L21.5 431.2C43 429.3 86 425.7 128.8 416.5C171.7 407.3 214.3 392.7 257.2 388.7C300 384.7 343 391.3 385.8 388.5C428.7 385.7 471.3 373.3 514.2 363.7C557 354 600 347 642.8 340.3C685.7 333.7 728.3 327.3 771.2 343.3C814 359.3 857 397.7 878.5 416.8L900 436L900 601L878.5 601C857 601 814 601 771.2 601C728.3 601 685.7 601 642.8 601C600 601 557 601 514.2 601C471.3 601 428.7 601 385.8 601C343 601 300 601 257.2 601C214.3 601 171.7 601 128.8 601C86 601 43 601 21.5 601L0 601Z" fill="#2f2d6a"/>
    </svg>`,
    wave4: `<svg class="wave" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 900 600" preserveAspectRatio="none" version="1.1">
    <path d="M0 466L21.5 468.3C43 470.7 86 475.3 128.8 464.8C171.7 454.3 214.3 428.7 257.2 430C300 431.3 343 459.7 385.8 460.5C428.7 461.3 471.3 434.7 514.2 425.3C557 416 600 424 642.8 429.8C685.7 435.7 728.3 439.3 771.2 431.7C814 424 857 405 878.5 395.5L900 386L900 601L878.5 601C857 601 814 601 771.2 601C728.3 601 685.7 601 642.8 601C600 601 557 601 514.2 601C471.3 601 428.7 601 385.8 601C343 601 300 601 257.2 601C214.3 601 171.7 601 128.8 601C86 601 43 601 21.5 601L0 601Z" fill="#1e1f49"/>
    </svg>`,
    wave5: `<svg class="wave" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 900 600" preserveAspectRatio="none" version="1.1">
    <path d="M0 540L21.5 536.3C43 532.7 86 525.3 128.8 525C171.7 524.7 214.3 531.3 257.2 533.5C300 535.7 343 533.3 385.8 532.8C428.7 532.3 471.3 533.7 514.2 525C557 516.3 600 497.7 642.8 499.3C685.7 501 728.3 523 771.2 531.8C814 540.7 857 536.3 878.5 534.2L900 532L900 601L878.5 601C857 601 814 601 771.2 601C728.3 601 685.7 601 642.8 601C600 601 557 601 514.2 601C471.3 601 428.7 601 385.8 601C343 601 300 601 257.2 601C214.3 601 171.7 601 128.8 601C86 601 43 601 21.5 601L0 601Z" fill="#11112a"/>
    </svg>`
}
let inner = document.querySelector('.inner')
loadVisual(svg)
parallax(inner.scrollTop)
inner.onscroll = () => {
    // parallax effect for each wave, using scroll Y and scroll height
    parallax(inner.scrollTop)
}
function parallax(y) {
    // each wave moves at a different speed
    let speedY = [0.1, 0.08, 0.06, 0.04, 0.02]
    let speedX = [0.1, 0.08, 0.06, 0.04, 0.02]
    let waves = document.querySelectorAll('.wave')
    for (let i = 0; i < waves.length; i++) {
        let waveY = (y * speedY[i]) - (inner.scrollHeight * speedY[i])
        let waveX = (y * speedX[i]) - 20
        waves[i].style.transform = `translateY(${waveY}px) translateX(${waveX}px) scale(1.3)`
    }

}
function loadVisual(svg) {
    let visual = document.getElementById('visual')
    for (const wave in svg) {
        visual.innerHTML += svg[wave]
    }
}