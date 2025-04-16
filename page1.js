// footer.js

document.addEventListener("DOMContentLoaded", () => {
    console.log("Footer chargé !");
    // Tu peux ajouter ici des animations, ou gérer un formulaire newsletter par exemple.
  });
  
  

  const toggle = document.getElementById("darkModeToggle");

  toggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    // Changer l’icône
    toggle.textContent = document.body.classList.contains("dark-mode") ? "☀️" : "🌙";
  });