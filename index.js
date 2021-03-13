function $(id) {
    return document.getElementsByClassName(id)
}

for (let j = 0; j < $("btn").length; j++) {
  setTimeout(function(){
      setTimeout(function(){
          $("btn")[j].style.opacity = '1'
          $("btn")[j].style.transform = 'translateY(0px)'
          setTimeout(function(){
              $("btn")[j].style.transition = '0.3s'
          },500 * (j + 1))
      },500 * j)
  },1000)
}