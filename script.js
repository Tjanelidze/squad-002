"use strict";

const openBtn = document.querySelector(".show-modal");
const closeBtn = document.querySelector(".close-modal");
const navBox = document.querySelector(".nav-bar");
const overlay = document.querySelector(".overlay");

function openAndCloseModal() {
  navBox.classList.toggle("hidden");
  overlay.classList.toggle("hidden");
  openBtn.classList.toggle("hidden");
  closeBtn.classList.toggle("hidden");
}

openBtn.addEventListener("click", openAndCloseModal);
overlay.addEventListener("click", openAndCloseModal);
closeBtn.addEventListener("click", openAndCloseModal);
