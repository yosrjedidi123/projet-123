const toggle = document.getElementById("darkModeToggle");

toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  // Changer l’icône
  toggle.textContent = document.body.classList.contains("dark-mode") ? "☀️" : "🌙";
});
