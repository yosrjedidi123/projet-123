  const toggle = document.getElementById("darkModeToggle");

  toggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    // Changer l’icône
    toggle.textContent = document.body.classList.contains("dark-mode") ? "☀️" : "🌙";
  });



  document.getElementById("darkModeToggle").addEventListener("change", function () {
    const isDark = this.checked;
    document.body.classList.toggle("dark", isDark);
    localStorage.setItem("darkMode", isDark); // 🔒 Sauvegarde dans le navigateur
  });
  

  document.addEventListener("DOMContentLoaded", function () {
    const isDark = localStorage.getItem("darkMode") === "true";
    document.body.classList.toggle("dark", isDark);
    const toggle = document.getElementById("darkModeToggle");
    if (toggle) toggle.checked = isDark;
  });
  