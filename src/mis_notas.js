import "./styles.css";
const content= document.querySelector("#content");
import alfilerImg from "./alfiler.png";
import add_notes_ from "./icons/add_notes.svg"
import proyects_ from "./icons/folder_open.svg"
import inbox_ from "./icons/inbox.svg";
import new_proy from "./icons/new_proy.svg";
import {renderProyectItem, subMenuProyUl, seleccioar_Proyecto,proyecto_actual} from "./proyectos.js";
import {crear_nota_cont,show_Crear_nota} from "./crear_nota.js"
import {render_crearProy_card} from "./UI/crear_proy.js";
import calendar_ from "./icons/events_.svg";
import settings_noteImg from "./icons/verMas.svg"
import { format } from 'date-fns';
import {guardarEstado} from "./index";
import {proyectoss, Proyecto} from "./index";

import { togglear_elementos } from "./helpers/doom_Helpers.js";



export let newNoteItem;


 let contenedor;
 let mis_notas_cont

export function renderMainContent(){
   
     contenedor=document.createElement("div");
    contenedor.classList.add("cuerpo_cont");

    const title_section=document.createElement("div");
    title_section.classList.add("title_section")

    const title_section_H1=document.createElement("h1");
    title_section_H1.textContent="Mis notas";
      mis_notas_cont=document.createElement("section");
    mis_notas_cont.classList.add("mis_notas_cont")
    contenedor.appendChild(title_section)
    contenedor.appendChild(mis_notas_cont)
    
    title_section.appendChild(title_section_H1);

    content.appendChild(contenedor);

    return{mis_notas_cont}
 
}



export function renderNote_Box(proyecto_actual) {
 
  if (!mis_notas_cont) throw new Error("Ejecuta renderMainContent() primero");
  const fragmento_nota=document.createDocumentFragment();
  
    for (let obj of proyectoss[proyecto_actual].nota_list_) {

    // Contenedor principal

const noteBox = document.createElement('div');
noteBox.classList.add('note_box');

// Header de la nota
const { header_note_check, check_button, headerNote, titleNote, fijarNote, noteIconFijar } = renderNote_header(obj.title);

    // Cuerpo de la nota
    const {textNote, textNoteP}=renderNote_body(obj.texts)

    //footer note
     const{footerNote, settings_btn, settings_btn_img, fechaDate ,dateTxT}= renderNote_footer(obj.fecha)

    // settings note ul
  const {settingsNoteUl, edit, recordatorio, estilos, eliminar}= renderNote_settings()

   //ADD EVENTS LISTENERS

   settings_btn.addEventListener("click", () => {
    settingsNoteUl.classList.toggle("settings_note_ul"); // Cambia solo para este elemento
  })

   eliminar.addEventListener("click",() => {
    deleteNote_(obj.id);
    renderNote_Box(proyecto_actual)
})

    //elementos del contenedor principal note_box
    noteBox.appendChild(header_note_check)
    noteBox.appendChild(textNote)
    noteBox.appendChild(footerNote)
    noteBox.appendChild(settingsNoteUl);

  // Añadir imagen al botón y elementos al header
  header_note_check.appendChild(check_button);
  header_note_check.appendChild(headerNote)
  fijarNote.appendChild(noteIconFijar);
  headerNote.appendChild(titleNote);
  headerNote.appendChild(fijarNote);

  // añadir elementos al teext note
  textNote.appendChild(textNoteP);

  // añadir elementos al footer note
    footerNote.appendChild(fechaDate);
    footerNote.appendChild(settings_btn);
    fechaDate.appendChild(dateTxT);
    settings_btn.appendChild(settings_btn_img);

  // añadir elementos al footer note

  settingsNoteUl.appendChild(edit);
  settingsNoteUl.appendChild(recordatorio);
  settingsNoteUl.appendChild(estilos);
  settingsNoteUl.appendChild(eliminar);
  console.log(settingsNoteUl); 
 
  fragmento_nota.appendChild(noteBox);
  
  
    }
    mis_notas_cont.innerHTML="";
    mis_notas_cont.appendChild(fragmento_nota)
}
 
function renderNote_header(title){
  const header_note_check= document.createElement('div');
header_note_check.classList.add('header_note_check');

const check_button=document.createElement("button");
check_button.classList.add("check_button");

    const headerNote = document.createElement('div');
    headerNote.classList.add('header_note');
    
    // Título
    const titleNote= document.createElement('h1');
    titleNote.classList.add('title_note');
    titleNote.textContent = title;
    
    // Botón fijar
    const fijarNote = document.createElement('button');
    fijarNote.classList.add('fijar_note');
    
    const noteIconFijar = document.createElement('img');
    noteIconFijar.classList.add('noteIcon');
    noteIconFijar.src = alfilerImg;
    noteIconFijar.alt = 'fijar';
      // Devuelve un objeto con los elementos necesarios
  return {
    header_note_check,
    check_button,
    headerNote,
    titleNote,
    fijarNote,
    noteIconFijar,
  };
}

function renderNote_body(texts){
  const textNote = document.createElement('div');
  textNote.classList.add('text_note');
  
  const textNoteP = document.createElement('p');
  textNoteP.innerText=texts;

  return {textNote, textNoteP}
  
}
  
function renderNote_footer(fechaActual){
  const footerNote=document.createElement("div");
  footerNote.classList.add("footer_note");
  const settings_btn=document.createElement("button");
  settings_btn.classList.add("settings_btn");
  
  const settings_btn_img=document.createElement("img");

  settings_btn_img.src=settings_noteImg;

  const fechaDate=document.createElement("div")
  fechaDate.classList.add("fecha_note");
  const dateTxT=document.createElement("p")
  dateTxT.textContent=fechaActual;
  
  return {
    footerNote, settings_btn, settings_btn_img, fechaDate ,dateTxT
  }

}

function renderNote_settings(){
  const settingsNoteUl= document.createElement("ul");

    settingsNoteUl.classList.add("hidden");
    
    const edit=document.createElement("li");
    edit.textContent="Editar"
    const recordatorio=document.createElement("li");
    recordatorio.textContent="Recordatorio"
    const estilos=document.createElement("li");
    estilos.textContent="Estilos"
    const eliminar=document.createElement("li");
    eliminar.textContent="Eliminar"
   

    return{
      settingsNoteUl, edit, recordatorio, estilos, eliminar
    }
    
}




// Cerrar el dropdown si se hace clic fuera de él

// BORRAR NOTA
export function deleteNote_(id) {
    const index = proyectoss[proyecto_actual].nota_list_.findIndex(item => item.id === id);
    if (index !== -1) {
        proyectoss[proyecto_actual].nota_list_.splice(index, 1);
    }
proyectoss[proyecto_actual].contadorId--;
    guardarEstado()
    renderNote_Box(proyecto_actual)
}

/* 
 nota para implmentar 
 -crear una clase que tome los datos de los input como atributos y comvertielos en un arrays
  y empujarlos a una lista de arrays que contenga todas las demas notas y despues renderizar note_box
  -modificar el render note par comvertirla en un bucre for que recorra todos los arrays de la lista de arrays
  y renderizarlos uno por uno
  -al estar la nota renderizada dentro de un array se eliminara si se remueve de la lista
  -al remover un array se volvera a renderizar el note_box para actualizar cambios



*/

/* 
 nota para implmentar 
 
 -f


*/