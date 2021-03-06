const toggleSwitch = document.querySelector('input[type="checkbox"]');
const nav = document.getElementById("nav");
const toggleIcon = document.getElementById("toggle-icon");
const image1 = document.getElementById("image1");
const image2 = document.getElementById("image2");
const image3 = document.getElementById("image3");
const imageW = document.getElementById("image_welcome");
const textBox = document.getElementById("text-box");
const DARK_THEME = "dark";
const LIGHT_THEME = "light";

// dark or light image
function imageMode(color) {
  image1.src = `img/artist_${color}.svg`;
  image2.src = `img/drawing_${color}.svg`;
  image3.src = `img/engineer_${color}.svg`;
  imageW.src = `img/welcome_${color}.svg`;
}

function toggleDarkLightMode(isDark) {
  nav.style.backgroundColor =
    isDark === DARK_THEME ? "rgb( 0 0 0 / 50%)" : "rgb( 255 255 255 / 50%)";
  textBox.style.backgroundColor =
    isDark === DARK_THEME ? "rgb(255 255 255 / 50%)" : "rgb(0 0 0 / 50%)";
  toggleIcon.children[0].textContent =
    isDark === DARK_THEME ? "Dark Mode" : "Light Mode";
  isDark === DARK_THEME
    ? toggleIcon.children[1].classList.replace("fa-sun", "fa-moon")
    : toggleIcon.children[1].classList.replace("fa-moon", "fa-sun");
  isDark === DARK_THEME ? imageMode(DARK_THEME) : imageMode(LIGHT_THEME);
}

// Switch theme dynamically
function switchTheme(event) {
  if (event.target.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
    toggleDarkLightMode(DARK_THEME);
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light");
    toggleDarkLightMode(LIGHT_THEME);
  }
}

// Event Listener
toggleSwitch.addEventListener("change", switchTheme);

// check local storage for theme
const currentTheme = localStorage.getItem("theme");
if (currentTheme) {
  document.documentElement.setAttribute("data-theme", currentTheme);

  if (currentTheme === DARK_THEME) {
    toggleSwitch.checked = true;
    toggleDarkLightMode(DARK_THEME);
  }
}
