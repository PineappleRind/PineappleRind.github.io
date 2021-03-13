function $(id) {
    return document.getElementsByClassName(id)
}

for (let j = 0; j < $("btn").length; j++) {
  setTimeout(function(){
      setTimeout(function(){
        $("btn")[j].classList.remove('hidden')
      },500 * j)
  },1000)
}