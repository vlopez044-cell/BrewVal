// =========================
// PRODUCTOS DEL MENÚ
// =========================

const menuItems = [

```
{
    id: 1,
    name: "Cheesecake",
    category: "postres",
    price: "$60",
    image: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=800",
    description: "Delicioso cheesecake de zarzamora."
},

{
    id: 2,
    name: "Rol de Canela",
    category: "especialidades",
    price: "$70",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800",
    description: "Rol de canela recién horneado."
},

{
    id: 3,
    name: "Brownie",
    category: "postres",
    price: "$25",
    image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=800",
    description: "Brownie de chocolate con nuez."
},

{
    id: 4,
    name: "Café Helado",
    category: "bebidas",
    price: "$45",
    image: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?w=800",
    description: "Refrescante café helado."
},

{
    id: 5,
    name: "Matcha Latte",
    category: "bebidas",
    price: "$50",
    image: "https://images.unsplash.com/photo-1515823064-d6e0c04616a7?w=800",
    description: "Bebida cremosa de matcha."
},

{
    id: 6,
    name: "Café Americano",
    category: "bebidas",
    price: "$30",
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800",
    description: "Nuestro clásico café americano."
},

{
    id: 7,
    name: "Pastel de Zanahoria",
    category: "postres",
    price: "$60",
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=800",
    description: "Pastel de zanahoria con receta especial."
},

{
    id: 8,
    name: "Tartas de Frutos Rojos",
    category: "especialidades",
    price: "$70",
    image: "https://images.unsplash.com/photo-1464305795204-6f5bbfc7fb81?w=800",
    description: "Tartas elaboradas con frutos rojos frescos."
}
```

];

// =========================
// CONTENEDOR DEL MENÚ
// =========================

const menuContainer = document.querySelector(".menu-items");

// =========================
// MOSTRAR PRODUCTOS
// =========================

function displayMenu(items){

```
menuContainer.innerHTML = "";

items.forEach(item => {

    const menuCard = document.createElement("div");

    menuCard.classList.add("menu-item");

    menuCard.innerHTML = `
        <img src="${item.image}" alt="${item.name}">
        <h3>${item.name}</h3>
        <p>${item.description}</p>
        <span>${item.price}</span>
    `;

    menuContainer.appendChild(menuCard);
});
```

}

// =========================
// MOSTRAR TODO AL CARGAR
// =========================

displayMenu(menuItems);

// =========================
// BOTONES DE FILTRO
// =========================

const filterButtons = document.querySelectorAll(".filter-btn");

filterButtons.forEach(button => {

```
button.addEventListener("click", () => {

    document
        .querySelector(".filter-btn.active")
        .classList.remove("active");

    button.classList.add("active");

    const category = button.dataset.category;

    if(category === "all"){

        displayMenu(menuItems);

    }else{

        const filteredItems = menuItems.filter(item =>
            item.category === category
        );

        displayMenu(filteredItems);
    }
});
```

});

// =========================
// MENSAJE DE BIENVENIDA
// =========================

window.addEventListener("load", () => {

```
console.log("Bienvenido a BrewVal ☕🍰");
```

});
