
function renderPropiedades(lista, contenedorId) {
    const contenedor = document.getElementById(contenedorId);
    if (!contenedor) {
        console.error(`Contenedor con id "${contenedorId}" no encontrado.`);
        return;
    }
    contenedor.innerHTML = "";

    lista.slice(0, 3).forEach((prop) => {
        const card = document.createElement("div");
        card.className = "col-md-4 mb-4";
        card.innerHTML = `
        <div class="card">
        <img src="${prop.src}" class="card-img-top" alt="Imagen de la propiedad" />
        <div class="card-body">
            <h5 class="card-title">${prop.nombre}</h5>
            <p class="card-text">${prop.descripcion}</p>
            <p><i class="fas fa-map-marker-alt"></i> ${prop.ubicacion}</p>
            <p><i class="fas fa-bed"></i> ${prop.habitaciones} Habitaciones | 
                <i class="fas fa-bath"></i> ${prop.banos} Baños</p>
            <p><i class="fas fa-dollar-sign"></i> ${prop.costo}</p>
            <p class="${prop.smoke ? 'text-success' : 'text-danger'}">
            <i class="${prop.smoke ? 'fas fa-smoking' : 'fas fa-smoking-ban'}"></i>
            ${prop.smoke ? 'Permitido fumar' : 'No se permite fumar'}
            </p>
            <p class="${prop.pets ? 'text-success' : 'text-danger'}">
            <i class="${prop.pets ? 'fas fa-paw' : 'fas fa-ban'}"></i>
            ${prop.pets ? 'Mascotas permitidas' : 'No se permiten mascotas'}
            </p>
        </div>
        </div>
    `;
        contenedor.appendChild(card);
    });
}



document.addEventListener('DOMContentLoaded', () => {
    if (typeof propiedades_venta !== "undefined" && document.getElementById("venta-container")) {
        renderPropiedades(propiedades_venta, "venta-container");
    }

    if (typeof propiedades_alquiler !== "undefined" && document.getElementById("alquiler-container")) {
        renderPropiedades(propiedades_alquiler, "alquiler-container");
    }
});
