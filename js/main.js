// DOM Variables
const toggleBtn = document.getElementById("nav__sidebar-toggle"),
  barMenuIcon = document.querySelector("#nav__sidebar-toggle .bar"),
  closeIcon = document.querySelector("#nav__sidebar-toggle .x-mark"),
  sideBar = document.querySelector("aside"),
  mainElem = document.querySelector("main"),
  themeSwitcher = document.getElementById("sidebar__theme-switcher"),
  rootELem = document.documentElement,
  collapseBtn = document.getElementById("sidebar__collapse");

// Sidebar toggle function
const sidebarToggle = () => {
  const sideBar = document.querySelector("aside");
  sideBar.classList.toggle("hidden");
  mainElem.classList.toggle("open");
};

// Sidebar Collapse
const collapse = () => {
  sideBar.classList.toggle("sidebar-collapsed");
};

// Toggling Icons
const toggleIcons = () => {
  setTimeout(() => {
    barMenuIcon.classList.toggle("d-none");
    closeIcon.classList.toggle("d-none");
  }, 100);
};

// Theme Switcher
const switchTheme = () => {
  let dataTheme = rootELem.getAttribute("data-theme"),
    newTheme = dataTheme === "light" ? "dark" : "light";

  rootELem.setAttribute("data-theme", newTheme);

  localStorage.setItem("theme", newTheme);
};

toggleBtn.addEventListener("click", sidebarToggle);
toggleBtn.addEventListener("click", toggleIcons);
themeSwitcher.addEventListener("click", switchTheme);
collapseBtn.addEventListener("click", collapse);
