function actualizarContador(){

    let carrito =
    JSON.parse(localStorage.getItem("carrito"))
    || [];

    let contador =
    document.getElementById("contador-carrito");

    if(contador){

        contador.textContent =
        carrito.length;

    }

}

actualizarContador();