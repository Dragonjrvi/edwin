import {
agregarProducto,
eliminarProducto,
vaciarCarrito,
calcularSubtotal,
contarItems
} from "../js/cart.js";

test("agregar producto nuevo", ()=>{

const carrito = [];

const producto = {id:1,precio:100};

const resultado = agregarProducto(carrito,producto);

expect(resultado.length).toBe(1);

});

test("incrementar cantidad si existe", ()=>{

const carrito = [
{id:1,precio:100,cantidad:1}
];

const producto = {id:1,precio:100};

const resultado = agregarProducto(carrito,producto);

expect(resultado[0].cantidad).toBe(2);

});

test("eliminar producto", ()=>{

const carrito = [
{id:1,precio:100,cantidad:1}
];

const resultado = eliminarProducto(carrito,1);

expect(resultado.length).toBe(0);

});

test("vaciar carrito", ()=>{

expect(vaciarCarrito().length).toBe(0);

});

test("subtotal con productos", ()=>{

const carrito = [
{id:1,precio:100,cantidad:2}
];

expect(calcularSubtotal(carrito)).toBe(200);

});

test("subtotal vacío", ()=>{

expect(calcularSubtotal([])).toBe(0);

});

test("contar items con productos", ()=>{

const carrito = [
{cantidad:2},
{cantidad:3}
];

expect(contarItems(carrito)).toBe(5);

});

test("contar items vacío", ()=>{

expect(contarItems([])).toBe(0);

});
test("agregar producto cuando existen otros diferentes", ()=>{

const carrito = [
{id:1,precio:100,cantidad:1},
{id:2,precio:200,cantidad:1}
];

const producto = {id:1,precio:100};

const resultado = agregarProducto(carrito,producto);

expect(resultado[0].cantidad).toBe(2);
expect(resultado[1].cantidad).toBe(1);

});