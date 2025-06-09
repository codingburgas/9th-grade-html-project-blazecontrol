const themeToggler = document.getElementById("theme-toggler");

function updateButtonLabel() {
  const currentScheme = document.documentElement.style.colorScheme;

  if (!currentScheme || currentScheme === "") {
    document.documentElement.style.colorScheme = "light";
    themeToggler.textContent = "Light Mode";
  } else {
    themeToggler.textContent = currentScheme === "dark" ? "Dark Mode" : "Light Mode";
  }
}

themeToggler.addEventListener("click", () => {
  if (document.documentElement.style.colorScheme === "dark") {
    document.documentElement.style.colorScheme = "light";
  } else {
    document.documentElement.style.colorScheme = "dark";
  }
  updateButtonLabel();
});

updateButtonLabel();