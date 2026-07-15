function comprar(nombre){

const numero="9845237111";

const mensaje=`Hola, me interesa el perfume ${nombre}. ¿Está disponible?`;

window.open(

`https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`,

"_blank"

);

}

const buscador=document.getElementById("buscar");

if(buscador){

buscador.addEventListener("keyup",()=>{

const texto=buscador.value.toLowerCase();

document.querySelectorAll(".producto").forEach(card=>{

const nombre=card.querySelector("h3").textContent.toLowerCase();

card.style.display=nombre.includes(texto)?"block":"none";

});

});

}
