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
function init(){
    
  const loader = document.querySelector('.loader');

  // reset position of the loading screen
  gsap.set(loader, {
      scaleX: 0, 
      rotation: 30, 
      xPercent: -5,
      yPercent: -50, 
      transformOrigin: 'left center', 
      autoAlpha: 1
  });

  function loaderIn() {
      // GSAP tween to stretch the loading screen across the whole screen
      return gsap.fromTo(loader, 
          {
              rotation: 30,
              scaleX: 0,
              xPercent: -5
          },
          { 
              duration: 0.8,
              xPercent: 0,
              scaleX: 1, 
              rotation: 0,
              ease: 'Power4.inOut', 
              transformOrigin: 'right center'
          });
  }

  function loaderAway() {
      // GSAP tween to hide the loading screen
      return gsap.to(loader, { 
          duration: 0.8, 
          scaleX: 0,
          xPercent: 10, 
          rotation: 30, 
          transformOrigin: 'left center', 
          ease: 'Power4.inOut'
      });
          loadBtns()
  }

  // do something before the transition starts
  barba.hooks.before(() => {

      document.querySelector('html').classList.add('is-transitioning');
      barba.wrapper.classList.add('is-animating');

  });

  // do something after the transition finishes
  barba.hooks.after(() => {

      document.querySelector('html').classList.remove('is-transitioning');
      barba.wrapper.classList.remove('is-animating');
      loadBtns()

  });

  // scroll to the top of the page
  barba.hooks.enter(() => {

      window.scrollTo(0, 0);

  });

  barba.init({
      transitions: [{
          async leave() {
              await loaderIn();
      
          },
          enter() {
              loaderAway();
          }
      }]
  })

}

window.addEventListener('load', function(){
  init();
});
