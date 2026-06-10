const destinos = [

{
nombre:"Machu Picchu",
precio:1200,
imagen:"https://images.unsplash.com/photo-1526392060635-9d6019884377?q=80&w=1200&auto=format&fit=crop"
},

{
nombre:"Lago Titicaca",
precio:900,
imagen:"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/09/28/9f/2b/lago-titicaca.jpg?w=1200"
},

{
nombre:"Valle del Colca",
precio:700,
imagen:"https://www.nativatrips.com/wp-content/uploads/2025/07/valle-colca.jpg"
},

{
nombre:"Reserva de Paracas",
precio:650,
imagen:"https://blog.redbus.pe/wp-content/uploads/2020/07/Paracas_466243646-scaled.jpg"
},

{
nombre:"Huascarán",
precio:850,
imagen:"https://i0.wp.com/www.actualidadambiental.pe/wp-content/uploads/2021/06/laguna-paron-andina.jpg"
}

];

let contenedor =
document.getElementById("contenedor-destinos");

if(contenedor){

destinos.forEach(destino=>{

contenedor.innerHTML += `

<div class="destino-card">

<img src="${destino.imagen}">

<h3>${destino.nombre}</h3>

<p>
Destino ecológico regenerativo.
</p>

<h4>S/${destino.precio}</h4>

<button onclick="agregarCarrito(
'${destino.nombre}',
${destino.precio}
)">
Agregar al carrito
</button>

</div>

`;

});

}

function agregarCarrito(nombreDestino,precioDestino){

let precioPaquete =
Number(
document.getElementById("paquete").value
);

if(precioPaquete===0){

alert(
"Seleccione primero un paquete"
);

return;

}

let total = precioDestino + precioPaquete;

let carrito =
JSON.parse(
localStorage.getItem("carrito")
) || [];

carrito.push({

destino:nombreDestino,
precioDestino:precioDestino,
precioPaquete:precioPaquete,
total:total

});

localStorage.setItem(
"carrito",
JSON.stringify(carrito)
);

alert(
"Destino agregado al carrito\nTotal: S/"+total
);

}