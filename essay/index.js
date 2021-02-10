function $(e) {
    return document.getElementById(e)
}
<<<<<<< Updated upstream
let o = window,
    i = $("dark"),
    b = $("body");

function p() {
    !1 === i.checked ? b.classList.remove("dark") : b.classList.add("dark")
}
i.onclick = (() => {
    p()
}), onscroll = (() => {
    const e = o.innerHeight,
        t = o.pageYOffset,
        d = document.body.offsetHeight,
        n = parseInt(t / (d - e) * 100);
    $("progress").style.width = n + "%"
});
=======
function setCookie(cname,cvalue,exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }
  
  function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }
  
let input = $('dark')
let theBody = $('body')
let darkmodebool = false
function darkmode() {
    if (input.checked === false) {
        document.body.classList.remove('dark');
        darkmodebool = false
    } else {
        document.body.classList.add('dark')
        darkmodebool = true
    }
}

input.onclick = () => {
    darkmode()
    setCookie('darkmodetrue', darkmodebool);
}

if (getCookie('darkmodetrue') === 'true') {
    document.body.classList.add('dark')
}
>>>>>>> Stashed changes
