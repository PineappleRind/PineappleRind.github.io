function $(id) {
    return document.getElementsByClassName(id)
}

onload = () => {
    loadBtns()
}

function loadBtns() {
    for (let j = 0; j < $("btn").length; j++) {
        setTimeout(function(){
            setTimeout(function(){
                $("btn")[j].classList.remove('hidden')
            },500 * j)
        },1000)
    }
}
      barba.init({
        transitions: [{
          name: 'opacity-transition',
          leave(data) {
            return gsap.to(data.current.container, {
              opacity: 0
            });
          },
          enter(data) {
            return gsap.from(data.next.container, {
              opacity: 0
            });
          }
        }]
      });
