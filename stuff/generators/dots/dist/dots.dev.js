"use strict";

var _loop = function _loop(i) {
  setTimeout(function () {
    var r = document.getElementsByClassName('dot')[i];
    r.style.height = (i + 3) * (i + 3) + 'px';
    r.style.width = (i + 3) * (i + 3) + 'px';
  }, 100);
};

for (var i = 0; i <= document.getElementsByClassName('dot').length; i++) {
  _loop(i);
}