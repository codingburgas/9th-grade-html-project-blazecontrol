const themeToggler = document.getElementById("theme-toggler");

// Load saved theme or default to light
const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
  document.documentElement.style.colorScheme = savedTheme;
}

function updateButtonLabel() {
  const currentScheme = document.documentElement.style.colorScheme;

  if (!currentScheme || currentScheme === "") {
    document.documentElement.style.colorScheme = "light";
    themeToggler.textContent = "Light Mode";
    localStorage.setItem("theme", "light");
  } else {
    themeToggler.textContent = currentScheme === "dark" ? "Dark Mode" : "Light Mode";
  }
}

themeToggler.addEventListener("click", () => {
  if (document.documentElement.style.colorScheme === "dark") {
    document.documentElement.style.colorScheme = "light";
    localStorage.setItem("theme", "light");
  } else {
    document.documentElement.style.colorScheme = "dark";
    localStorage.setItem("theme", "dark");
  }
  updateButtonLabel();
});

updateButtonLabel();