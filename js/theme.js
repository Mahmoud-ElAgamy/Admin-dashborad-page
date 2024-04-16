const localS = localStorage.getItem("theme"),
  themeToSet = localS;

if (!localS) {
  themeToSet = matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
} else {
  document.documentElement.setAttribute("data-theme", themeToSet);
}
