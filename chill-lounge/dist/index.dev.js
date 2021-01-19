"use strict";

var modal = document.getElementById('overlay');
var modalButton = document.getElementById('link');

function linkConfirm(link) {
  modal.style.display = 'flex';
  setTimeout(function () {
    modal.style.transform = 'scale(1.1)';
  }, 10);
  modalButton.setAttribute('onclick', "window.location.href = '" + link + "'");
}