// footer.js

document.addEventListener("DOMContentLoaded", () => {
    console.log("Footer chargé !");
    // Tu peux ajouter ici des animations, ou gérer un formulaire newsletter par exemple.
    fetch("data/products.json")
    .then((response) => response.json())
    .then((products) => {
      const productList = document.getElementById("product-list");

      products.forEach((product) => {
        const card = document.createElement("div");

        card.innerHTML = `
          <img src="${product.image}" alt="${product.name}" width="100%">
          <h3>${product.name}</h3>
          <p>${product.category}</p>
          <h3>${product.price.toFixed(2)} TND</h3>
          <button class="add-to-cart" data-name="${product.name}" data-price="${product.price}">
            Ajouter au panier
          </button>
        `;

        productList.appendChild(card);
      });

      // Gestion du panier (bonus)
      document.querySelectorAll(".add-to-cart").forEach((button) => {
        button.addEventListener("click", () => {
          const name = button.getAttribute("data-name");
          const price = parseFloat(button.getAttribute("data-price"));

          let panier = JSON.parse(localStorage.getItem("panier")) || [];
          panier.push({ name, price });
          localStorage.setItem("panier", JSON.stringify(panier));
          alert(`${name} a été ajouté au panier !`);
          console.log("Panier :", panier);
        });
      });
    })
    .catch((error) => {
      console.error("Erreur de chargement des produits :", error);
    });
  });
  
  

  const toggle = document.getElementById("darkModeToggle");

  toggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    // Changer l’icône
    toggle.textContent = document.body.classList.contains("dark-mode") ? "☀️" : "🌙";
  });