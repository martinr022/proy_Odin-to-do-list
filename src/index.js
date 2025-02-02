import "./styles.css";
import "./recordatorio.png";
import { renderHome } from "./home";
import {renderCrear_nota , hidden_Crear_nota , crear_nota_cont} from "./crear_nota"
import { newNoteItem, renderNote_Box,renderMainContent, renderAside_note} from "./mis_notas"

const blogBtn=document.querySelector(".blog_li");
const acercabtm=document.querySelector(".acerca_li");
export let proyectoss=[];

window.addEventListener("DOMContentLoaded",()=> {
    renderMainContent();
    renderAside_note();
    renderNote_Box()
 //addeventslisteners
 
newNoteItem.addEventListener("click",renderCrear_nota)
blogBtn.addEventListener("click",hidden_Crear_nota);


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

class Proyecto {
    constructor() {
        this.nota_list_=[],
        this.contadorId=0
    }
        agregarNota= function(title, texts) {
            this.nota_list_.push({
                id: this.contadorId++,
                title,
                texts
            })
            guardarEstado()
        }
}

function crearClase(nProyect){

    nProyect=new Proyecto();
    proyectoss.push(nProyect)

}

crearClase("estado")





    proyectoss[0].nota_list_ = JSON.parse(localStorage.getItem('notas')) || [];
    proyectoss[0].contadorId = JSON.parse(localStorage.getItem('contadorId')) || 0;
  

// Función para guardar TODO el estado
export function guardarEstado() {
    localStorage.setItem('notas', JSON.stringify(proyectoss[0].nota_list_));
    localStorage.setItem('contadorId', JSON.stringify(proyectoss[0].contadorId));
    
}


