import {crearProyecto, Proyecto, obtener_storage, proyectoss} from "../index"
import { renderProyectItem } from "../proyectos";

 let crear_proy_cont;

 export function render_crearProy_card() {
    // Contenedor principal de la tarjeta
    console.log("FS")
     crear_proy_cont=document.createElement("section");
    crear_proy_cont.classList.add("crear_nota-cont");
    crear_proy_cont.classList.add("hidden");
    const crear_proyect_fas = document.createElement("div");
    crear_proyect_fas.classList.add("crear_nota-fas");

    // Contenedor del título
    const crear_title = document.createElement("div");
    crear_title.classList.add("crear_title");

    // Textarea para el nombre del proyecto
    let proy_name = document.createElement("textarea");
    proy_name.placeholder = "Escribe un título...";
    proy_name.classList.add("proy-name-input");

    // Contenedor de botones
    const button_container = document.createElement("div");
    button_container.classList.add("proy-buttons-container");

    // Botón de agregar
    const add_button = document.createElement("button");
    add_button.textContent = "Agregar";
    add_button.classList.add("proy-add-button");
    add_button.addEventListener("click",()=> {
        console.log("DD")
        crearProyecto(proy_name.value)
        
        renderProyectItem(proyectoss)
    })

    // Botón de cancelar (X)
    const cancel_button = document.createElement("button");
    cancel_button.innerHTML = "&times;"; // Símbolo X
    cancel_button.classList.add("proy-cancel-button");
    cancel_button.addEventListener("click",()=> {
        crear_proy_cont.classList.toggle("crear_nota-cont")
    })

    // Agregar elementos al DOM
    crear_title.appendChild(proy_name);
    button_container.appendChild(add_button);
    button_container.appendChild(cancel_button);
    crear_proyect_fas.appendChild(crear_title);
    crear_proyect_fas.appendChild(button_container);
    crear_proy_cont.appendChild(crear_proyect_fas)
    content.appendChild(crear_proy_cont);


}