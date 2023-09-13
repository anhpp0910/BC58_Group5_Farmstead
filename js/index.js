// SUN MOON SWITCHER
var changeIcon = function (icon) {
  icon.classList.toggle("gg-moon");
};

document.getElementById("theme-switcher").onclick = switchTheme = () => {
  const rootElem = document.documentElement;
  let dataTheme = rootElem.getAttribute("data-theme").newTheme;
  newTheme = dataTheme === "light" ? "dark" : "light";
  rootElem.setAttribute("data-theme", newTheme);
};

document
  .querySelector("#theme-switcher")
  .addEventListener("click", switchTheme());
