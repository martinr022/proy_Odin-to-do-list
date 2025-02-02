import "./styles.css"
import icon_toDo from "./recordatorio.png"
const content= document.querySelector("#content")

export function renderHome(){




    const presentacion_cont= document.createElement("section");
    presentacion_cont.classList.add("presentacion_cont");

    const presentacion_descripcion= document.createElement("div");
    presentacion_descripcion.classList.add("presentacion-descripcion");

    const recordatorioImg=document.createElement("img");
    recordatorioImg.setAttribute("src",icon_toDo);

    const h1Txt=document.createElement("h1");
    h1Txt.textContent="ToDoList";

    const pTXt= document.createElement("p");
    pTXt.textContent="ToDoList es la aplicación perfecta para ayudarte a organizar tus tareas y maximizar tu productividad. Crea listas de tareas, establece prioridades y recibe recordatorios para mantenerte al día con tus proyectos y objetivos. Con una interfaz sencilla e intuitiva, puedes agregar, editar y eliminar tareas rápidamente, así como marcarlas como completadas para un seguimiento claro de tu progreso."

    const boton_start_cont=document.createElement("div");
    boton_start_cont.classList.add("boton_start-cont");

    const startButton= document.createElement("button");
    startButton.textContent="Comenzar";

    presentacion_cont.appendChild(presentacion_descripcion);
    presentacion_cont.appendChild(boton_start_cont);

    presentacion_descripcion.appendChild(recordatorioImg);
    presentacion_descripcion.appendChild(h1Txt);
    presentacion_descripcion.appendChild(pTXt);

    boton_start_cont.appendChild(startButton);

    content.appendChild(presentacion_cont);


}