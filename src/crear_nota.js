import "./styles.css";
import fijarImg from "./alfiler.png";
import calendarioImg from "./calendario.png";
import cromaticoImg from "./cromatico.png";
import añadirBtn from "./anadir.png"
import {renderNote_Box} from "./mis_notas"

import {proyectoss} from "./index";
import { format } from 'date-fns';
const content= document.querySelector("#content");
let crear_nota_cont;
let contadorId=0;

export function renderCrear_nota(){

     crear_nota_cont=document.createElement("section");
    crear_nota_cont.classList.add("crear_nota_cont");
    crear_nota_cont.classList.add("hidden");

    const crear_nota=document.createElement("div");
    crear_nota.classList.add("crear_nota");

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
    title_Txt.placeholder="Escribe un titulo...";


    const crear_text=document.createElement("div");
    crear_text.classList.add("crear_text");

    let text_Txt=document.createElement("textarea");
    text_Txt.placeholder="Añade un texto...";


    const crear_nota_items=document.createElement("ul");
    crear_nota_items.classList.add("crear_nota_items");

    const li_cromatico=document.createElement("li");
    li_cromatico.textContent="Estilos";
    const cromatico_img=document.createElement("img");
   cromatico_img.src=cromaticoImg;

   const li_calendario=document.createElement("li");
   li_calendario.textContent="Fecha";
   const calendario_img=document.createElement("img");
   calendario_img.src=calendarioImg;

    const li_alfiler=document.createElement("li");
    li_alfiler.textContent="Pioridad";
    const alfiler_img=document.createElement("img");
    alfiler_img.src=fijarImg;

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

    crear_nota_items.appendChild(li_cromatico);
    crear_nota_items.appendChild(li_calendario);
    crear_nota_items.appendChild(li_alfiler);

    li_cromatico.appendChild(cromatico_img)

    li_calendario.appendChild(calendario_img);

    li_alfiler.appendChild(alfiler_img);

    crear_nota_cont.appendChild(crear_nota);

    content.appendChild(crear_nota_cont);

    
    button_header.addEventListener("click", () => {
        if (title_Txt.value.trim() !== "" && text_Txt.value.trim() !== "") {
           proyectoss[0].agregarNota(title_Txt.value,text_Txt.value)
            renderNote_Box();
            
        }
        title_Txt.value="";
        text_Txt.value="";
        return;
    });
};












const fechasss=new Date();


console.log(format(fechasss,"dd/MMM/yy"));



export {crear_nota_cont};

export function hidden_Crear_nota(){
    crear_nota_cont.classList.toggle("crear_nota_cont")
};