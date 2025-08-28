import "./styles.css";
import "./recordatorio.png";
import { renderHome } from "./home";
import {renderCrear_nota , show_Crear_nota,hidden_Crear_nota} from "./crear_nota"
import { newNoteItem, renderNote_Box,renderMainContent} from "./mis_notas"
import { renderAside_note } from "./UI/renderAside";
import { proyecto_actual ,renderProyectItem} from "./proyectos";

import { close_Other_Menus } from "./helpers/doom_Helpers";

import { recopilarNotas,compararFechaLimite} from "./UI/principal_proy";


const blogBtn=document.querySelector(".blog_li");
blogBtn.addEventListener("click",hidden_Crear_nota);
const acercabtm=document.querySelector(".acerca_li");
export let proyectoss=[];


window.addEventListener("DOMContentLoaded",()=> {
    
    obtener_storage()
    renderMainContent();
    renderAside_note();
    renderCrear_nota();
    renderProyectItem(proyectoss);
    renderNote_Box(proyecto_actual);
    console.log(proyecto_actual)
    console.log(proyectoss)
const allNotasInbox = recopilarNotas(proyectoss);
console.log(allNotasInbox)


compararFechaLimite(allNotasInbox)
proyectoss.push(allNotasInbox)

  
})
console.log("hola");
// index.js

/*export const estado = {
    contadorId: 0,
    nota_list_: [],
    agregarNota: function(title, texts) {
        this.nota_list_.push({
            id: this.contadorId++,
            title,
            texts
        });
        guardarEstado()
    }
};*/

export class Proyecto {
    constructor(nombre,id=generarIdUnico()) {
        this.id = id; // Generar un ID único
        this.nombre=nombre;
        this.nota_list_=[];
        this.contadorId=0;
    }
        agregarNota= function(title, texts,fecha_limite, fecha_MilSeg) {
            this.nota_list_.push({ 
                id:this.contadorId++,
                title,
                texts,
                fecha_limite,
                fecha_MilSeg
            }
            )
           
            guardarEstado()
        }
}

export function crearProyecto(nombreProyecto,id) {
    const nuevoProyecto = new Proyecto(nombreProyecto,id);
    proyectoss.push(nuevoProyecto);
guardarEstado()
}

 // CREAMO UN PROYECTO BASE (predeterminado)


// Función para generar un ID único

export function generarIdUnico() {
    const timestamp = Date.now(); // Timestamp actual
    const random = Math.floor(Math.random() * 10000); // Número aleatorio
    return `proyecto_${timestamp}_${random}`; // Combinar ambos
}



console.log(proyectoss[0])
console.log(Date.now())

// Cargar proyectos desde localStorage
export function obtener_storage() {
    const datos_=localStorage.getItem("proyectos");
    if (datos_){
        const proyectos_guardados= JSON.parse(datos_);
        proyectoss.length = 0; // Limpiar array actual
        for (const p of proyectos_guardados) {
            const nuevoProyecto = new Proyecto(p.nombre, p.id);
            nuevoProyecto.nota_list_ = p.nota_list_ || [];
            nuevoProyecto.contadorId = p.contadorId || 0;
            proyectoss.push(nuevoProyecto);
        }
    }
    }

// Guardar el estado de todos los proyectos en localStorage
export function guardarEstado() {

    localStorage.setItem("proyectos", JSON.stringify(proyectoss))

};
    
close_Other_Menus("#nuevaNotaIdBtn",".crear_nota_cont","mostrar")

close_Other_Menus("#proyIdBtn",".subUl","show")


   

