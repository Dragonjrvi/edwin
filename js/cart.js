export const agregarProducto = (carrito, producto) => {

const existe = carrito.find(p => p.id === producto.id);

if(existe){

return carrito.map(p =>
p.id === producto.id
? {...p, cantidad: p.cantidad + 1}
: p
);

}

return [...carrito, {...producto, cantidad:1}];

};

export const eliminarProducto = (carrito, id) =>
carrito.filter(p => p.id !== id);

export const vaciarCarrito = () => [];

export const calcularSubtotal = carrito =>
carrito.reduce(
(total,p)=> total + p.precio*p.cantidad,0
);

export const contarItems = carrito =>
carrito.reduce(
(total,p)=> total + p.cantidad,0
);