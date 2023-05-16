const icon = document.querySelector(".icon");
const search = document.querySelector(".search");
icon.onclick = () => search.classList.toggle("active");

const header = document.querySelector("header");
const body = document.querySelector("body");

body.onscroll = () => {
  window.pageYOffset == 0
    ? header.classList.remove("active")
    : header.classList.add("active");
};
