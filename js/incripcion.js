const productos = [
    {id:1, nombre:"Plan Básico", precio:150000, img:"img/plan/basico.png", clases:"2 clases semanales"},
    {id:2, nombre:"Plan Intermedio", precio:220000, img:"img/plan/intermedio.png", clases:"3 clases semanales"},
    {id:3, nombre:"Plan Avanzado", precio:380000, img:"img/plan/avanzado.png", clases:"4 clases semanales"},
    {id:4, nombre:"Plan Para Empresa", precio:0, img:"img/plan/empresa.png", clases:"Personalizado"},
    {id:5, nombre:"Plan Familiar", precio:280000, img:"img/plan/familiar.png", clases:"2-3 clases semanales"}
];

function agregarAlCarrito(id){
    // Chicas, acá leemos lo que hay guardado en el navegador
    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    let producto = productos.find(function(p){
        return p.id === id;
    });

    if(producto) {
        // Acá para que solo puedan tener un plan a la vez
        carrito = [producto];
        localStorage.setItem("carrito", JSON.stringify(carrito));
        
        window.location.href = "incribirme.html";
    }
}

function mostrarCarrito(){
    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    let contenedor = document.getElementById("carritoContainer");

  
    if(!contenedor) return; 

    contenedor.innerHTML = "";
    let total = 0;

    carrito.forEach(function(producto, index){
        contenedor.innerHTML +=
        "<div class='resumen-item principal'>" +
        "<img src='" + producto.img + "' width='50'>" +
        "<h3>" + producto.nombre + "</h3>" +
        "<p class='item-precio'>$" + producto.precio + "</p>" +
        "</div>";

        total = total + producto.precio;
    });

    let totalElemento = document.getElementById("totalPrecio");
    if(totalElemento) {
        totalElemento.textContent = "$" + total;
    }
}

document.addEventListener('DOMContentLoaded', function() {
    if(document.getElementById('carritoContainer')) {
        mostrarCarrito();
    }
});