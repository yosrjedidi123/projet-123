// footer.js
//////////////////////////////////////////////////////////////////
function updateCartCount() {
  const cart = JSON.parse(localStorage.getItem("panier")) || [];
  document.querySelector(".cart").textContent = `🛒 (${cart.length})`;
}

function renderCartContents() {
  const cart = JSON.parse(localStorage.getItem("panier")) || [];
  console.log("test Panier :", cart);

  const cartItemsContainer = document.getElementById("cart-items");
  const cartTotalSpan = document.getElementById("cart-total");

  cartItemsContainer.innerHTML = "";
  let total = 0;

  cart.forEach(item => {
    console.log("test Produit :", item);

    const li = document.createElement("li");
    li.textContent = `${item.name} - ${item.price.toFixed(2)} €`;
    cartItemsContainer.appendChild(li);
    total += item.price.toFixed(2); // ou similaire
  });

  cartTotalSpan.textContent = total.toFixed(2);
}


function toggleCartDisplay() {
  const cartContainer = document.getElementById("cart-container");
  if (cartContainer.style.display === "none") {
    renderCartContents();
    cartContainer.style.display = "block";
  } else {
    cartContainer.style.display = "none";
  }
}

function checkout() {
  alert("Merci pour votre commande !");
  localStorage.removeItem("panier");
  updateCartCount();
  renderCartContents();
  document.getElementById("cart-container").style.display = "none";
}

// Ajouter l'écouteur de clic pour ouvrir/fermer le panier
document.querySelector(".cart").addEventListener("click", toggleCartDisplay);

// Appeler ça au chargement pour afficher le bon nombre
updateCartCount();
//////////////////////////////////////////////////////////////////

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

//////////////////////////////////////////////////////////////////
      updateCartCount();
//////////////////////////////////////////////////////////////////

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
          updateCartCount();
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



///////////////////////////////////////////////////////////////////
const cartIcon = document.querySelector('.cart');
const cartContainer = document.getElementById('cart-container');

cartIcon.addEventListener('click', () => {
  // Toggle l'affichage du panier
  if (cartContainer.style.display === 'none') {
    cartContainer.style.display = 'block';
  } else {
    cartContainer.style.display = 'none';
  }

  // Met à jour le contenu du panier si nécessaire
  updateCartCount();
});
//////////////////////////////////////////////////////////////////

