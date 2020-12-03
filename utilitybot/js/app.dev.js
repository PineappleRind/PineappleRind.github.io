// JavaScript by Aditya (twitter.com/TheCodingGuru) and PineappleRind (https://pineapplerind.github.io), 2020

"use strict";
var t = document.getElementById("menuOpen"),
    r = document.getElementById("navShade"),
    c = document.getElementById("blurOverlay"),
    d = document.getElementById("navItems"),
    g = document.getElementById("github"),
    h = document.getElementById("githubLabel"),
    s = {
        n: document.querySelector(".nav-toggle"),
        l: function(e) {
            e.preventDefault(), this.n.classList.toggle("expanded")
        }
    };


function openNav() {
   if (r.style.left === "calc(100% - 400px)") {
       r.style.left = "100%";
       setTimeout(function(){
        c.style.display = 'none';
   },500);
        setTimeout(function(){
            d.style.animationName = '';
    },1000);
    g.style.right = '100px';
    c.style.opacity = '0';
    h.style.display = 'none';
   } else {
       r.style.left = "calc(100% - 400px)";
       c.style.display = 'block';
       d.style.animationName = 'slide-in';
       g.style.right = '300px';
       h.style.display = 'block';
       setTimeout(function(){
           c.style.opacity = '1';
    },5);
   }
}

let modal = document.getElementById('contactModal');
let overlay = document.getElementById("overlay");
function contactModal() {
        modal.style.display = 'block';
        modal.style.animationName = 'scale-in';
        overlay.style.display = 'block';
        overlay.style.opacity = '1';
}

function closeContactModal() {
    overlay.style.opacity = '0';
        setTimeout(function(){
            overlay.style.display = 'none';
            modal.style.animationName = '';
            modal.style.display = 'none';
        },500);
        modal.style.animationName = 'scale-out';
}

function showGithubLabel() {
    h.style.opacity = '1';
    h.style.paddingLeft = '60px';
    h.style.right = '125px';
}

function hideGithubLabel() {
    h.style.opacity = '0';
    h.style.paddingLeft = '00px';
    h.style.right = '185px';
}
g.addEventListener("mouseover", function() {
    showGithubLabel();
})

g.addEventListener("mouseleave", function() {
    hideGithubLabel();
})
let a = document.getElementById("contactClose");
a.addEventListener("click",function(){
    closeContactModal();
})

let b = document.getElementById("contact");

b.addEventListener("click", function(){
    contactModal();
})
t.addEventListener("click", function(e) {
    openNav();
    s.l(e);
});

console.log("JavaScript by Aditya (twitter.com/TheCodingGuru) and PineappleRind (https://pineapplerind.github.io), 2020");

  
    var inviteButton = document.getElementById("rippleBtn"),
        i, x, y, btn, btnBounds, ripple;
  
    function triggerRipple(event) { 
      btn = event.currentTarget;
      btnBounds = btn.getBoundingClientRect();
      x = event.clientX - btnBounds.left;
      y = event.clientY - btnBounds.top;
      
      ripple = document.getElementById("ripple");
  
      ripple.classList.remove("ripple-animate");
      ripple.style.opacity = "1";
      ripple.style.transform = "translate(-50%, -50%) translate(" + x + "px," + y + "px) scale(0, 0)";
      ripple.style.transform = "translate(-50%, -50%) translate(" + x + "px," + y + "px) scale(0, 0)";
      window.requestAnimationFrame(startAnimation);
    }
  
    function startAnimation() {
      ripple.style.transform = "translate(-50%, -50%) translate(" + x + "px," + y + "px) scale(6, 6)";
      ripple.style.webkitTransform = "translate(-50%, -50%) translate(" + x + "px," + y + "px) scale(6, 6)";
      ripple.style.opacity = "0";
      ripple.classList.add("ripple-animate");
    }
  
    inviteButton.addEventListener("click", triggerRipple);