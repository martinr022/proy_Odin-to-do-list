import "./styles.css";
import piorityImg from "./icons/pioridad.svg";
import cronogramaImg from "./icons/cronograma.svg";
import asignarImg from "./icons/añadir_proy.svg";
import añadirBtn from "./anadir.png"
import {renderNote_Box} from "./mis_notas"
import { proyecto_actual } from "./proyectos";
import {guardarEstado, proyectoss} from "./index";
import { format } from 'date-fns';
const content= document.querySelector("#content");

let contadorId=0;
export let crear_nota_cont;


export function renderCrear_nota(){
   
    const obtener_fecha=new Date();
let fechaActual=format(obtener_fecha,"dd/MMM/yy")

 

     crear_nota_cont=document.createElement("section");
   
    crear_nota_cont.classList.add("crear_nota_cont");
    

    const crear_nota=document.createElement("div");
    crear_nota.classList.add("crear_nota");
    crear_nota.id="crear_notaId"

    const crear_nota_header =document.createElement("div");
    crear_nota_header.classList.add("crear_nota_header");

    const h1_header =document.createElement("h1");
    h1_header.textContent="Crear nota"
    const button_header=document.createElement("button");
    
    button_header.textContent="Añadir";



    const button_img=document.createElement("img");
    button_img.src=añadirBtn;

    

    const crear_nota_fas=document.createElement("div");
    crear_nota_fas.classList.add("crear_nota-fas");

    const crear_title=document.createElement("div");
    crear_title.classList.add("crear_title");

    let title_Txt=document.createElement("textarea");
    title_Txt.placeholder="Escribe tarea...";


    const crear_text=document.createElement("div");
    crear_text.classList.add("crear_text");

    let text_Txt=document.createElement("textarea");
    text_Txt.placeholder="Añade un texto...";


    const crear_nota_items=document.createElement("ul");
    crear_nota_items.classList.add("crear_nota_items");

    const li_asignar=document.createElement("li");
    li_asignar.textContent="Asignar a";
    const asignar_img=document.createElement("img");
   asignar_img.src=asignarImg;

   const li_cronograma=document.createElement("li");
    const fechaInput= document.createElement("input");
      fechaInput.type="date";
      fechaInput.classList.add("fechaValue")
   /*li_cronograma.textContent="Fecha";
   const cronograma_img=document.createElement("img");
   cronograma_img.src=cronogramaImg;
   li_cronograma.addEventListener("click",()=>{ 
      
   })*/

    const li_pioridad=document.createElement("li");
    li_pioridad.textContent="Pioridad";
    const piority_img=document.createElement("img");
    piority_img.src=piorityImg;

    crear_nota.appendChild(crear_nota_header);
    crear_nota.appendChild(crear_nota_fas);
    crear_nota.appendChild(crear_nota_items);

    crear_nota_header.appendChild(h1_header);
    crear_nota_header.appendChild(button_header);

    button_header.appendChild(button_img);

    crear_nota_fas.appendChild(crear_title);
    crear_nota_fas.appendChild(crear_text);

    crear_title.appendChild(title_Txt);

    crear_text.appendChild(text_Txt);

    crear_nota_items.appendChild(li_asignar);
    crear_nota_items.appendChild(li_cronograma);
    crear_nota_items.appendChild(li_pioridad);

    li_cronograma.appendChild(fechaInput)

    li_asignar.appendChild(asignar_img);

    li_pioridad.appendChild(piority_img);

    crear_nota_cont.appendChild(crear_nota);

    content.appendChild(crear_nota_cont);

    
    button_header.addEventListener("click", () => {
        if (title_Txt.value.trim() !== "" && text_Txt.value.trim() !== "") {
           proyectoss[proyecto_actual].agregarNota(title_Txt.value,text_Txt.value,format(new Date(fechaInput.value), 'dd/MM/yyyy'),new Date(fechaInput.value).getTime())
            renderNote_Box(proyecto_actual);
            guardarEstado()
        }
        title_Txt.value="";
        text_Txt.value="";
        return;
    });
};

function desplegarFechaInput(){

}










const fechasss=new Date();


console.log(format(fechasss,"dd/MMM/yy"));


export function show_Crear_nota(){
    crear_nota_cont.classList.add("mostrar")
};


export function hidden_Crear_nota(){
    crear_nota_cont.classList.remove("mostrar")
};
