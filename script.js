// ==========================
// PRODUCTOS BREWVAL
// ==========================

const productos = [

    {
        nombre: "Cheesecake de Zarzamora",
        precio: "$60",
        imagen: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=1200",
        descripcion: "Suave cheesecake artesanal con zarzamora."
    },

    {
        nombre: "Brownie Premium",
        precio: "$25",
        imagen: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=1200",
        descripcion: "Brownie de chocolate intenso con nuez."
    },

    {
        nombre: "Matcha Latte",
        precio: "$50",
        imagen: "https://images.unsplash.com/photo-1515823064-d6e0c04616a7?w=1200",
        descripcion: "Bebida cremosa elaborada con matcha japonés."
    },

    {
        nombre: "Café Americano",
        precio: "$30",
        imagen: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1200",
        descripcion: "Nuestro clásico café americano."
    },

    {
        nombre: "Rol de Canela",
        precio: "$70",
        imagen: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=1200",
        descripcion: "Recién horneado con glaseado especial."
    },

    {
        nombre: "Tarta de Frutos Rojos",
        precio: "$70",
        imagen: "https://images.unsplash.com/photo-1464305795204-6f5bbfc7fb81?w=1200",
        descripcion: "Preparada con frutos rojos frescos."
    }

];

// ==========================
// CONTENEDOR DEL MENÚ
// ==========================

const menuContainer = document.querySelector(".menu-items");

// ==========================
// CREAR TARJETAS
// ==========================

productos.forEach(producto => {

    menuContainer.innerHTML += `

        <div class="menu-card">

            <img src="${producto.imagen}" alt="${producto.nombre}">

            <div class="menu-card-content">

                <h3>${producto.nombre}</h3>

                <p>${producto.descripcion}</p>

                <br>

                <span class="price">
                    ${producto.precio}
                </span>

            </div>

        </div>

    `;

});

// ==========================
// EFECTO APARICIÓN AL HACER SCROLL
// ==========================

const elementos = document.querySelectorAll(
    ".about, .menu-section, .gallery, .testimonials, .contact"
);

const mostrarElemento = () => {

    elementos.forEach(elemento => {

        const posicion = elemento.getBoundingClientRect().top;

        const pantalla = window.innerHeight - 100;

        if (posicion < pantalla) {

            elemento.style.opacity = "1";
            elemento.style.transform = "translateY(0px)";
        }

    });

};

elementos.forEach(elemento => {

    elemento.style.opacity = "0";
    elemento.style.transform = "translateY(40px)";
    elemento.style.transition = "all 1s ease";

});

window.addEventListener("scroll", mostrarElemento);

mostrarElemento();

// ==========================
// MENSAJE DE BIENVENIDA
// ==========================

console.log("☕ Bienvenido a BrewVal");
