import {productos} from "./products.js";

import {
agregarProducto,
eliminarProducto,
vaciarCarrito,
calcularSubtotal,
contarItems
} from "./cart.js";

let carrito =
JSON.parse(localStorage.getItem("carrito")) || [];

const guardar = () =>
localStorage.setItem(
"carrito",
JSON.stringify(carrito)
);

const renderProductos = () => {

const contenedor =
document.getElementById("productos");

contenedor.innerHTML =
productos.map(p => `
<div class="card">

<img src="${p.imagen}">

<h3>${p.nombre}</h3>

<p>$${p.precio}</p>

<button onclick="add(${p.id})">
Agregar
</button>

</div>
`).join("");

};

const renderCarrito = () => {

const contenedor =
document.getElementById("carrito");

if(carrito.length===0){

contenedor.innerHTML="Carrito vacío";

}else{

contenedor.innerHTML =
carrito.map(p=>`

<div>

${p.nombre}

x${p.cantidad}

$${p.precio*p.cantidad}

<button onclick="remove(${p.id})">
Eliminar
</button>

</div>

`).join("");

}

document.getElementById("subtotal")
.textContent =
calcularSubtotal(carrito);

document.getElementById("contador")
.textContent =
contarItems(carrito);

guardar();

};

window.add = id => {

const producto =
productos.find(p=>p.id===id);

carrito =
agregarProducto(carrito,producto);

renderCarrito();

};

window.remove = id => {

carrito =
eliminarProducto(carrito,id);

renderCarrito();

};

document.getElementById("vaciar")
.onclick = () => {

carrito =
vaciarCarrito();

renderCarrito();

};

renderProductos();
renderCarrito();