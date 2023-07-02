function calcularPrecio() {
    // Obtener los valores del formulario
    let ancho = parseFloat(document.getElementById('ancho').value);
    let alto = parseFloat(document.getElementById('alto').value);
    let cantidad = parseInt(document.getElementById('cantidad').value);

    let tarifa = 6.25;

    // Calcular el precio
    let tarifa1 = ancho * alto * tarifa * cantidad;
    let precio;

    if (tarifa1 < 15000) {
        precio = 15000;
    } else if (tarifa1 >= 15000 && tarifa1 < 35000) {
        precio = ancho * alto * 7.25 * cantidad;
    } else if (tarifa1 >= 35000 && tarifa1 < 200000) {
        precio = ancho * alto * 6.25 * cantidad;
    } else if (tarifa1 >= 200000) {
        precio = ancho * alto * 5.25 * cantidad;
    }

    // Formatear el precio con dos decimales
        

    // Actualizar el precio en el elemento HTML
    document.getElementById('precio').textContent = '$' + precio;
}




const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });